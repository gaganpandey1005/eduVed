import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  chapter: [{ type: mongoose.Schema.Types.ObjectId, ref: "Chapter" }],
  semester: {
    type: String,
    enum: ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"], // Predefined semester values
    required: true,
  },
  department: [
    {
      type: String,
      enum: ["CSE", "IT", "ECE", "AIML", "DS", "ME", "CE"],
      required: true,
    },
  ],
});

const Subject = mongoose.model("Subject", subjectSchema);
export default Subject;
