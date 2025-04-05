import express from "express";

import { getMessages, getUsersForChat, sendMessage } from "../controllers/chat.controller.js";
const router = express.Router();

router.get("/users/:id", getUsersForChat);
router.get("/:id",  getMessages);
router.post("/send/:id", sendMessage);

export default router;
