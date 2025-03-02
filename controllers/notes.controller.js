import Notes from "../model/note.model.js";

// ✅ Upload Notes Controller
export const uploadNotes = async (req, res) => {
  try {
    const { title, department, semester } = req.body;

    if (!title || !department || !semester) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!req.files?.["pdf"]?.[0]?.path || !req.files?.["image"]?.[0]?.path) {
      return res.status(400).json({ message: "PDF and Image are required" });
    }

    // ✅ Extract Cloudinary URLs
    const pdfUrl = req.files["pdf"][0].path; // PDF File URL from Cloudinary
    const imageUrl = req.files["image"][0].path; // Image File URL from Cloudinary

    // ✅ Save in MongoDB
    const newNote = new Notes({
      title,
      department,
      semester,
      pdfUrl,
      subjectImg: imageUrl,
    });
    await newNote.save();

    res.status(201).json({ message: "Notes uploaded successfully!", note: newNote });
  } catch (err) {
    console.error("Upload Error:", err);
    res.status(500).json({ message: "Error uploading notes", error: err.message });
  }
};

// ✅ Get Notes by Department & Semester
export const getNotes = async (req, res) => {
  try {
    const { department, semester } = req.query;

    if (!department || !semester) {
      return res.status(400).json({ message: "Department and Semester are required" });
    }

    const notes = await Notes.find({ department, semester });

    if (notes.length === 0) {
      return res.status(404).json({ message: "No notes found for the given filters" });
    }

    res.status(200).json({ notes });
  } catch (error) {
    console.error("Fetch Error:", error);
    res.status(500).json({ message: "Error fetching notes", error: error.message });
  }
};
