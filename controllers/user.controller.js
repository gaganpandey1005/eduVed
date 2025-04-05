import User from "../model/user.model.js";
import sendEmail from "../utils/sendEmail.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { json } from "stream/consumers";
// import io from "socket.io"

// ✅ Register User
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
    const verificationToken = crypto.randomBytes(20).toString("hex");
    user.verificationToken = crypto
      .createHash("sha256")
      .update(verificationToken)
      .digest("hex");
    user.verificationTokenExpiration = Date.now() + 15 * 60 * 1000; // 15 min expiry
    await user.save();

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

    if (!token) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid verification token" });
    }

    // ✅ Hash token for comparison
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    // ✅ Find user
    const user = await User.findOne({
      verificationToken: hashedToken,
      verificationTokenExpiration: { $gt: Date.now() },
    });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid or expired token" });
    }

    // ✅ Mark user as verified
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

// ✅ Login with Local Storage for JWT
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please provide email and password" });
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await bcrypt.compare(password, user.password))) {
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
const { password: _, ...userInfo } = user;
    // ✅ Generate JWT token
    const token = jwt.sign(
      {
        _id: user._id,
        email: user.email,
        department: user.department,
        semester: user.semester,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    console.log("Generated Token:", token);

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      token,
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        department: user.department,
        semester: user.semester,
      },

    });
  } catch (error) {
    console.error("Error during login:", error.message);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

// ✅ Logout User (Handled on Client Side)
const logout = (req, res) => {
  res.status(200).json({ success: true, message: "Logged out successfully" });
};




export { register, verifyEmail, login,logout };
