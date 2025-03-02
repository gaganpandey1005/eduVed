import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Name is required"],
      minLength: [2, "Name must be at least 2 characters"],
      maxLength: [50, "Name should be less than 50 characters"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: [8, "Password must be at least 8 characters long"],
      select: false, // Exclude password in queries by default
    },
    department: {
      type: String,
      
      required: [true, "Department is required"],
    },
    semester: {
      type: Number,
     
      required: true,
    },
    verified: {
      type: Boolean,
      default: false, // Initially false
    },
    verificationToken: String, // Token for email verification
    verificationTokenExpiration: Date, // Token expiry
  },
  { timestamps: true }
);

// ✅ Define instance methods
userSchema.methods = {
  generateJwtToken() {
    return jwt.sign(
      {
        _id: this._id,
        email: this.email,
        department: this.department,
        semester: this.semester, // Stores ObjectId reference
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
  },

  async comparePassword(plainText) {
    return await bcrypt.compare(plainText, this.password);
  },

  async generateVerificationToken() {
    const verificationToken = crypto.randomBytes(20).toString("hex");

    this.verificationToken = crypto
      .createHash("sha256")
      .update(verificationToken)
      .digest("hex");
    this.verificationTokenExpiration = Date.now() + 15 * 60 * 1000; // 15 minutes validity

    await this.save();
    return verificationToken;
  },
};

// ✅ Hash Password Before Saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

export default mongoose.model("User", userSchema);
