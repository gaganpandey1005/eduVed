import multer from "multer";
import fs from "fs";
import path from "path";

// Configure Multer for PDF storage locally
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = "./uploads";
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

const uploadFiles = upload.fields([
  { name: "notesPdf", maxCount: 1 },
  { name: "pyqPdf", maxCount: 1 },
]);

export default uploadFiles; // ✅ Ensure this is a function
