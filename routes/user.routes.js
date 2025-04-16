    import express from "express";
import { register, login, logout, verifyEmail, monthlySell } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", register);  // User Registration
router.post("/login", login);        // User Login
router.get("/logout", logout);       // User Logout
router.get("/verify-email/:token", verifyEmail);  // Email Verification ✅
router.get("/monthlySell/:loggedInUserId", monthlySell);  // Email Verification ✅

export default router;
