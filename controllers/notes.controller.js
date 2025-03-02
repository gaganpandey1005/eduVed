import fs from "fs";
import Notes from "../model/note.model.js";
import cloudinary from "../config/cloudinary.connection.js";

export const uploadNote = async (req, res) => {
  try {
    const { title, department, semester } = req.body;

    if (!req.files || !req.files.pdf || !req.files.subjectImg) {
      return res
        .status(400)
        .json({ message: "Both PDF and Image are required." });
    }

    const pdfFile = req.files.pdf[0]; // Extract PDF file
    const imageFile = req.files.subjectImg[0]; // Extract image file

    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(imageFile.path, {
      folder: "note_images",
    });

    // Save note details to MongoDB
    const newNote = new Notes({
      title,
      department,
      semester,
      pdf: pdfFile.filename, // PDF stored locally
      subjectImg: result.secure_url, // Image URL from Cloudinary
    });

    await newNote.save();

    // Delete image from local storage after uploading to Cloudinary
    fs.unlink(imageFile.path, (err) => {
      if (err) {
        console.error("Error deleting local image:", err);
      } else {
        console.log("Deleted local image successfully");
      }
    });

    res
      .status(201)
      .json({ message: "Note uploaded successfully", note: newNote });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error uploading note", error: error.message });
  }
};

export const getNotes = async (req, res) => {
  try {
    const { semester, department } = req.query;
    console.log("semester",semester,"department",department);
    
    // Querying database correctly
    const notes = await Notes.find({ semester, department });


    if (!notes || notes.length === 0) {
      return res.status(400).json({
        message: "Currently no notes available for this department or semester",
      });
    }

    res.status(200).json({ message: "Notes retrieved successfully", notes });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving notes", error: error.message });
  }
};
