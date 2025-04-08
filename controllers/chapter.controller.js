import fs from "fs";
import path from "path";
import { google } from "googleapis";
import jwtClient from "../config/googleDrive.js"; // Import JWT client
import Chapter from "../model/chapter.model.js";

// Initialize Google Drive API
const drive = google.drive({ version: "v3", auth: jwtClient });

export const uploadNote = async (req, res) => {
  try {
    const { chapterNo, subjectName, department, semester } = req.body;

    if (!req.files || !req.files.notesPdf || !req.files.pyqPdf) {
      return res
        .status(400)
        .json({ message: "Both Notes PDF and PYQ PDF are required." });
    }

    const notesPdfFile = req.files.notesPdf[0]; // Correct field name
    const pyqPdfFile = req.files.pyqPdf[0]; // Correct field name

    // Function to upload a file to Google Drive
    const uploadToDrive = async (filePath, fileName, mimeType) => {
      const fileMetaData = {
        name: fileName,
        parents: ["1UfqeBaoIcMqvUozfewJQnhNkNCc7le8H"], // Google Drive folder ID
      };

      const media = {
        mimeType,
        body: fs.createReadStream(filePath),
      };

      const response = await drive.files.create({
        resource: fileMetaData,
        media,
        fields: "id",
      });

      // Make the file public
      await drive.permissions.create({
        fileId: response.data.id,
        requestBody: { role: "reader", type: "anyone" },
      });

      // Get the public link
      const file = await drive.files.get({
        fileId: response.data.id,
        fields: "webViewLink",
      });

      return file.data.webViewLink;
    };

    // Upload files to Google Drive
    const notesPdfUrl = await uploadToDrive(
      notesPdfFile.path,
      notesPdfFile.originalname,
      "application/pdf"
    );
    const pyqPdfUrl = await uploadToDrive(
      pyqPdfFile.path,
      pyqPdfFile.originalname,
      "application/pdf"
    );

    // Save note details to MongoDB
    const newChapter = new Chapter({
      subjectName,
      chapterNo,
      department,
      semester,
      pyqPdf: pyqPdfUrl,
      notesPdf: notesPdfUrl,
    });
    fs.unlinkSync(notesPdfFile.path);
    

    fs.unlinkSync(pyqPdfFile.path);

    await newChapter.save();

    // Delete local files after uploading

    res
      .status(201)
      .json({ message: "Notes uploaded successfully", note: newChapter });
  } catch (error) {
    console.error("Error uploading note:", error);
    res
      .status(500)
      .json({ message: "Error uploading note", error: error.message });
  }
};

export const getNotes = async (req, res) => {
  try {
    const { semester, department, subjectName } = req.query;

    // Validate required fields
    if (!semester || !department || !subjectName) {
      return res.status(400).json({
        message: "semester, department, and subjectName are required",
      });
    }


    const notes = await Chapter.find({ semester, department, subjectName });

    if (!notes.length) {
      return res.status(404).json({
        message: `No notes available for ${subjectName}, ${department}, Semester ${semester}`,
      });
    }

    res.status(200).json({ message: "Notes retrieved successfully", notes });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving notes", error: error.message });
  }
};

export const searchNotes = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({ message: "Search query is required." });
    }

    const notes = await Chapter.find({
      $or: [
        { subjectName: { $regex: query, $options: "i" } },
        { chapterNo: { $regex: query, $options: "i" } },
      ],
    });

    if (!notes.length) {
      return res.status(404).json({ message: "No matching notes found." });
    }

    res.status(200).json({ message: "Notes found", notes });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error searching notes", error: error.message });
  }
};
