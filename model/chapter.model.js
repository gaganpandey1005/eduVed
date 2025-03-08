import mongoose from "mongoose";

const chapterSchema = new mongoose.Schema({
  chapterNo: String,
  notesPdf: String,
  pyqPdf: String,
  semester:String,
  department:String,
  subjectName:String
});
const Chapter=mongoose.model("Chapter", chapterSchema);
export default Chapter;