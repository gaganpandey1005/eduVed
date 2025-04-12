import { useRef } from "react";
import apirequest from "../utils/lib/apiRequest";

const departments = [
  { name: "Computer Science", value: "CS" },
  { name: "Electrical Engineering", value: "EE" },
  { name: "Mechanical Engineering", value: "ME" },
  { name: "Civil Engineering", value: "CE" },
  { name: "Electronics & Communication", value: "ECE" },
  { name: "Information Technology", value: "IT" },
];

const semesters = Array.from({ length: 8 }, (_, i) => i + 1);

const UploadNotes = () => {
  const chapterNoRef = useRef(null);
  const subjectNameRef = useRef(null);
  const departmentRef = useRef(null);
  const semesterRef = useRef(null);
  const notesPdfRef = useRef(null);
  const pyqPdfRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("chapterNo", chapterNoRef.current.value);
    data.append("subjectName", subjectNameRef.current.value);
    data.append("department", departmentRef.current.value);
    data.append("semester", semesterRef.current.value);
    data.append("notesPdf", notesPdfRef.current.files[0]);
    data.append("pyqPdf", pyqPdfRef.current.files[0]);
    
    try {
      await apirequest.post(
        "/chapter/upload",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      alert("Upload successful!");
    } catch (error) {
      console.error("Upload failed", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-800 rounded-lg shadow-md text-violet-100">
      <h2 className="text-2xl font-bold mb-4">Upload Notes & PYQs</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" ref={chapterNoRef} placeholder="Chapter No" className="w-full p-2 rounded" required />
        <input type="text" ref={subjectNameRef} placeholder="Subject Name" className="w-full p-2 rounded" required />
        <select ref={departmentRef} className="w-full p-2 rounded" required>
          <option value="">Select Department</option>
          {departments.map((dept) => (
            <option className="bg-pink text-blue-800" key={dept.value} value={dept.value}>{dept.name}</option>
          ))}
        </select>
        <select ref={semesterRef} className="w-full p-2 rounded" required>
          <option value="">Select Semester</option>
          {semesters.map((sem) => (
            <option className=" text-blue-800" key={sem} value={sem}>{sem}</option>
          ))}
        </select>
        <label className="block text-sm font-medium">Choose Notes PDF:</label>
        <input type="file" ref={notesPdfRef} accept="application/pdf" className="w-full" required />
        <label className="block text-sm font-medium">Choose PYQ PDF:</label>
        <input type="file" ref={pyqPdfRef} accept="application/pdf" className="w-full" required />
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Upload</button>
      </form>
    </div>
  );
};

export default UploadNotes;
