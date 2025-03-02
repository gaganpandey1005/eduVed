    import express from "express";
import { register, login, logout, verifyEmail } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", register);  // User Registration
router.post("/login", login);        // User Login
router.get("/logout", logout);       // User Logout
router.get("/verify-email/:token", verifyEmail);  // Email Verification ✅

export default router;
