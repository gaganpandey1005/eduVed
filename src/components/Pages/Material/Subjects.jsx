import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../ui/Cards";

const Subjects = () => {
  const { department, semester } = useParams();
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/subjects/getNotes?department=${department}&semester=${semester}`
        ); // ✅ await added

        setSubjects(response.data); // ✅ Correct data access
      } catch (error) {
        console.error("Error fetching subjects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubjects();
  }, [department, semester]);

  return (<>
    <div className="flex flex-col items-center mt-12 mb-28">
      <h1 className="text-blue-400 text-2xl font-bold mb-6">
        Subjects for {department.toUpperCase()} - Semester {semester}
      </h1>
      <div className=" sm:grid grid-cols-1   md:grid-cols-2 gap-8 lg:grid-cols-3">
        {loading ? (
          <p className="text-white">Loading subjects...</p>
        ) : subjects.length > 0 ? (
          subjects.map((subject, index) => (
            <Cards
              key={index}
              title={subject.name}
              image={`${subject.imageUrl}`} // Adjust images dynamically
              link={`/chapter/${department}/${semester}/${subject.name}`} // Example link
            />
          ))
        ) : (
          <p className="text-white">No subjects found.</p>
        )}
      </div>
    </div>

    

    



    </>
  );
};

export default Subjects;
