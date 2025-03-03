import mongoose from "mongoose";

const chapterSchema = new mongoose.Schema({
  name: String,
  notesPdf: String,
  pyqPdf: String,
});
const Chapter=mongoose.model("Chapter", chapterSchema);
export default Chapter;