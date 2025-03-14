import express from "express";
import upload from "../middlewares/cloudinaryMulter.js"; // Corrected the import
import addShivani from "../controllers/bookControllers/shivani.controller.js";

const router = express.Router();

router.post("/add", upload.single("image"), addShivani);

export default router;
