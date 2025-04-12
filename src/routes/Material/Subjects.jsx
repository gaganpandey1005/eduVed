/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import apirequest from "../../utils/lib/apiRequest";
import Cards from "../../components/Cards";

const Subjects = ({ department: propDepartment, semester: propSemester }) => {
  const params = useParams();
  
  // ✅ Fallback: Pehle props check karo, nahi toh useParams()
  const department = propDepartment || params.department;
  const semester = propSemester || params.semester;

  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!department || !semester) return; // ✅ Agar koi value missing hai toh fetch na karo

    const fetchSubjects = async () => {
      try {
        const response = await apirequest.get(
          `/subjects/getNotes?department=${department}&semester=${semester}`
        );
        setSubjects(response.data);
      } catch (error) {
        console.error("Error fetching subjects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubjects();
  }, [department, semester]);

  return (
    <div className="flex flex-col items-center mt-12 mb-28">
      <h1 className="text-blue-400 text-2xl font-bold mb-6">
        Subjects for {department?.toUpperCase()} - Semester {semester}
      </h1>
      <div className="sm:grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3">
        {loading ? (
          <p className="text-white">Loading subjects...</p>
        ) : subjects.length > 0 ? (
          subjects.map((subject, index) => (
            <Cards
              key={index}
              title={subject.name}
              image={subject.imageUrl}
              link={`/chapter/${department}/${semester}/${subject.name}`}
            />
          ))
        ) : (
          <p className="text-white">No subjects found.</p>
        )}
      </div>
    </div>
  );
};

export default Subjects;
