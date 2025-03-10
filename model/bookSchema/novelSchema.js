import mongoose from "mongoose";

const novelSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  title: {
    // Added colon here
    type: String,
    required: true,
  },
  publishDate: {
    type: Date,
    default: Date.now,
  },
  price: {
    type: Number,
    required: true,
  },
  isSold: {
    type: Boolean,
    default: false,
  },
  soldBy: {
    type: String,
    required: true,
  },
  buyBy: {
    type: String,
    required: true,
  },
  buyDate: {
    type: Date,
    default: Date.now,
  },
  location: {
    type: String,
  },
});

export default mongoose.model("Novel", novelSchema);
