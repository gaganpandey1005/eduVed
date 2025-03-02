import express from "express";
import { getNotes, uploadNote } from "../controllers/notes.controller.js";
import uploadFiles from "../middlewares/multer.config.js";

const router = express.Router();

// Corrected route - Ensure uploadFiles is used correctly
router.post("/upload", uploadFiles, uploadNote);
router.get("/getNotes", getNotes);

export default router;
