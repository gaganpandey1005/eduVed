import express from "express";
import upload from "../middlewares/cloudinaryMulter.js"; // Corrected the import
import {
  addShivani,
  deleteShivaniBook,
  updateShivaniBook,
  getSingleShivaniBook,
  getAllShivaniBooks,
} from "../controllers/bookControllers/shivani.controller.js";

const router = express.Router();

// Route to add a new Shivani book
router.post("/add", upload.single("image"), addShivani);

// Route to get all Shivani books (with pagination)
router.get("/all", getAllShivaniBooks);

// Route to get a single Shivani book by ID
router.get("/:id", getSingleShivaniBook);

// Route to update a Shivani book by ID
router.put("/update/:id", updateShivaniBook);

// Route to delete a Shivani book by ID
router.delete("/delete/:id", deleteShivaniBook);

export default router;
