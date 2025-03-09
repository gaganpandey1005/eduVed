import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cards from "../ui/Cards"; 
import axios from "axios";

const Chapter = () => {
  const { department, semester, subject } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/chapter/getNotes?department=${department}&semester=${semester}&subjectName=${subject}`
        );

        console.log("API Response:", response.data); // Debugging log
        setData(Array.isArray(response.data.notes) ? response.data.notes : []);
      } catch (error) {
        console.error("Error fetching notes:", error);
        setData([]); // Prevent .map() errors
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
          {data.length > 0 ? (
            data.map((item, index) => (
              <Cards
                key={index}
                title={`Chapter ${item.chapterNo}`}
                image={"/src/assets/images/note.png"}
                link= {item.notesPdf}
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
          {data.length > 0 ? (
            data.map((item, index) => (
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
