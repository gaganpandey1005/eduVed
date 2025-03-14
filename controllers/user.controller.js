import User from "../model/user.model.js";
import sendEmail from "../utils/sendEmail.js";
import crypto from "crypto";

// ✅ Register User
const register = async (req, res) => {
  try {
    const { fullName, email, password, semester, department } = req.body;

    // ✅ Check for missing fields
    if (!fullName || !email || !password || !semester || !department) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    // ✅ Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    // ✅ Create new user
    const user = await User.create({
      fullName,
      email,
      password,
      semester,
      department,
    });

    // ✅ Generate Verification Token
    const verificationToken = await user.generateVerificationToken();

    // ✅ Create Verification Link
    const verificationLink = `${process.env.BASE_URL}verify-email/${verificationToken}`;

    // ✅ Send Verification Email
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
    console.error("Error during registration:", error.message);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

// ✅ Verify Email
const verifyEmail = async (req, res) => {
  try {
    const { token } = req.params;
    console.log("Token:", token);

    // ✅ Check for invalid token
    if (!token) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid verification token" });
    }

    // ✅ Hash the received token (to match the stored hashed token)
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    // ✅ Find user with matching token and valid expiration
    const user = await User.findOne({
      verificationToken: hashedToken,
      verificationTokenExpiration: { $gt: Date.now() },
    });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid or expired token" });
    }

    // ✅ Update user as verified
    user.verified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpiration = undefined;
    await user.save();

    res
      .status(200)
      .json({ success: true, message: "Email verified successfully!" });
  } catch (error) {
    console.error("Error during email verification:", error.message);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

// ✅ Login with Email Verification Check
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // ✅ Check for missing fields
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please provide email and password" });
    }

    // ✅ Find user with the given email
    const user = await User.findOne({ email }).select("+password");

    // ✅ Check for invalid credentials
    if (!user || !(await user.comparePassword(password))) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    // ✅ Check if email is verified
    if (!user.verified) {
      return res.status(403).json({
        success: false,
        message: "Email not verified. Please check your email.",
      });
    }

    // ✅ Generate JWT token
    const token = user.generateJwtToken();
    console.log("Generated Token:", token);

    // ✅ Remove password from response
    user.password = undefined;

    // ✅ Set token as HTTP-only cookie
    res.cookie("token", token, {
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
      httpOnly: true,
      secure: true, // Use true if HTTPS is enabled
    });

    res
      .status(200)
      .json({ success: true, message: "User logged in successfully", user });
  } catch (error) {
    console.error("Error during login:", error.message);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

// ✅ Logout User
const logout = (req, res) => {
  try {
    res.cookie("token", "", {
      expires: new Date(0),
      httpOnly: true,
      secure: true,
    });

    res.status(200).json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    console.error("Error during logout:", error.message);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

export { register, verifyEmail, login, logout };
