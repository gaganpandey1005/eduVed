import express from "express";
import upload from "../middlewares/upload.js";
import { uploadNotes, getNotes } from "../controllers/notes.controller.js";

const router = express.Router();

// ✅ Route for Uploading Notes (Expecting PDF & Image)
router.post(
  "/upload",
  upload.fields([
    { name: "pdf", maxCount: 1 },
    { name: "image", maxCount: 1 },
  ]),
  uploadNotes
);

// ✅ Route for Fetching Notes  
router.get("/notes", getNotes);

export default router;
