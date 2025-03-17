import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cards from "../ui/Cards";
import axios from "axios";

const Chapter = () => {
  const { department, semester, subject } = useParams();
  const [notesData, setNotesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://eduved-backend-tpos.onrender.com/api/chapter/getNotes?department=${department}&semester=${semester}&subjectName=${subject}`
        );
        console.log("data",response.data);

        // Check if the response contains notes
        if (response.data && Array.isArray(response.data.notes)) {
          setNotesData(response.data.notes);
        } else {
          setNotesData([]);
        }
      } catch (error) {
        console.error("Error fetching notes:", error);
        setNotesData([]); // Prevent .map() errors
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [department, semester, subject]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <div className="flex flex-col items-center mt-12 mb-28">
        <h1 className="text-blue-400 text-2xl font-bold mb-6">
          Notes for {subject.toUpperCase()} - Semester {semester}
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {notesData.length > 0 ? (
            notesData.map((item, index) => (
              <Cards
                key={index}
                title={`Chapter ${item.chapterNo}`}
                image={"/src/assets/images/note.png"}
                link={item.notesPdf}
              />
            ))
          ) : (
            <p>No notes available.</p>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center mt-12 mb-28">
        <h1 className="text-blue-400 text-2xl font-bold mb-6">
          PYQ for {subject.toUpperCase()} - Semester {semester}
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {notesData.length > 0 ? (
            notesData.map((item, index) => (
              <Cards
                key={index}
                title={`Chapter ${item.chapterNo}`}
                image={"/src/assets/images/note.png"}
                link={item.notesPdf}
              />
            ))
          ) : (
            <p>No previous year questions available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Chapter;
