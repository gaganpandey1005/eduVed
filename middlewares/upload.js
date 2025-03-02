import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.connection.js"; // ✅ Import Fixed Cloudinary Configuration

// ✅ Setup Cloudinary Storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    return {
      folder: "pdf_uploads",
      resource_type: "auto",
      public_id: `${file.originalname.split(".")[0]}`, // ✅ Stores without modifying filename
    };
  },
});

// ✅ File Filter to allow only PDFs & Images
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "application/pdf" ||
    file.mimetype.startsWith("image/")
  ) {
    cb(null, true);
  } else {
    cb(new Error("Only PDF and image files are allowed"), false);
  }
};

// ✅ Multer Upload Middleware
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  // limits: { fileSize: 5 * 1024 * 1024 }, // ✅ 5MB File Size Limit
});

export default upload;
