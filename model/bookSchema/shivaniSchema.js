import mongoose from "mongoose";
import User from "../user.model.js"; // Corrected import statement

const shivaniSchema = new mongoose.Schema({
  semester: {
    type: Number,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  soldBy: {
    type: mongoose.Schema.Types.ObjectId, // Corrected type definition
    ref: "User", // Referencing the User model correctly
    
  },
  buyBy: {
    type: mongoose.Schema.Types.ObjectId, // Corrected type definition
    ref: "User", // Referencing the User model correctly
    
  },
  isSold: {
    type: Boolean,
    default: false,
  },
  price: {
    type: Number,
    required: true,
  },
  buyDate: {
    type: Date,
    default: Date.now,
  },
  location: {
    type: String,
  },
  quantity: {
    type: Number,
    default: 0,
    required: true,
  },
  imageUrl:String
});

export default mongoose.model("Shivani", shivaniSchema);
