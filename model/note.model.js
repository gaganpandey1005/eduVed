import mongoose from "mongoose";

const  noteSchema =new mongoose.Schema({
    title: { type: String, required: true },
    department: { type: String, required: true },
    semester: { type: Number, required: true },
    pdfUrl: { type: String, required: true },
    subjectImg:{type:String}
});

export default mongoose.model("Notes", noteSchema);