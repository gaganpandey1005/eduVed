// Import required packages
import Razorpay from "razorpay";
import dotenv from "dotenv";

// Load env variables
dotenv.config();

// Create Razorpay instance once
const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ✅ Export it for use in payment routes
export default razorpayInstance;
