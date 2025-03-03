import User from "../model/user.model.js";
import sendEmail from "../utils/sendEmail.js";

import crypto from "crypto";

const register = async (req, res) => {
  try {
    const { fullName, email, password, semester, department } = req.body;

    if (!fullName || !email || !password || !semester || !department) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const user = await User.create({
      fullName,
      email,
      password,
      semester,
      department,
    });

    // ✅ Generate Verification Token
    const verificationToken = await user.generateVerificationToken();

    // ✅ Send Verification Email
    const verificationLink = `${process.env.BASE_URL}verify-email/${verificationToken}`;
    await sendEmail(
      user.email,
      "Verify Your Email",
      `Click here to verify your email: ${verificationLink}`
    );

    res.status(200).json({
      success: true,
      message: "User registered successfully. Please verify your email.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

// ✅ Verify Email Function
const verifyEmail = async (req, res) => {
  try {
    const { token } = req.params;

    if (!token) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid verification token" });
    }

    // ✅ Hash the received token (because we stored it hashed)
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    // ✅ Find user with matching token
    const user = await User.findOne({
      verificationToken: hashedToken,
      verificationTokenExpiration: { $gt: Date.now() }, // Token must not be expired
    });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid or expired token" });
    }

    // ✅ Verify the user
    user.verified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpiration = undefined;
    await user.save();

    res
      .status(200)
      .json({ success: true, message: "Email verified successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

// ✅ Login with Email Verification Check
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please provide email and password" });
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.comparePassword(password))) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    if (!user.verified) {
      return res
        .status(403)
        .json({
          success: false,
          message: "Email not verified. Please check your email.",
        });
    }

    const token = user.generateJwtToken();
    console.log("token", token);

    user.password = undefined;

    res.cookie("token", token, {
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: true,
    });

    res
      .status(200)
      .json({ success: true, message: "User logged in successfully", user }),
      user
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};
const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
    httpOnly: true,
    secure: true,
  });

  res.status(200).json({ success: true, message: "Logged out successfully" });
};

export { register, verifyEmail, login, logout };
