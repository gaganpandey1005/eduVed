import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { type } from "os";

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
    semester: {
      type: String,
      enum: ["1", "2", "3", "4", "5", "6", "7", "8"], // Predefined semester values
      required: true,
    },
    //listed books
    soldBooks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Shivani",
      },
    ],
    buyBooks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Shivani",
      },
    ],
    //books which get sold
    bookSolded: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shivani",
    }],
    department: {
      type: String,
      enum: ["CS", "IT", "ECE", "AIML", "DS", "ME", "CE", "CS/IT"], // Predefined department values
      required: true,
    },
    verified: {
      type: Boolean,
      default: false, // Initially false
    },
    verificationToken: String,
    verificationTokenExpiration: Date,
    registrationDate: {
      type: Date,
      enum: Date.now(),
    },
  },
  { timestamps: true }
);

// ✅ Hash Password Before Saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

export default mongoose.model("User", userSchema);
