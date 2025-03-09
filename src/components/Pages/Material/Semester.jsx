import {  useParams } from "react-router-dom";
import Cards from "../ui/Cards"; // Import Cards component

const Semester = () => {
  const { department } = useParams(); // Get department from URL


  const semesters = [1,2,3,4,5,6,7,8];

  return (
    <div className="flex flex-col items-center mt-12 mb-28">
      <h1 className="text-blue-400 text-2xl font-bold mb-6">
        Select Semester for {department.toUpperCase()}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {semesters.map((sem) => (
          <Cards
            key={sem}
            title={`Semester ${sem}`}
            image={`/src/assets/images/sem.png`} // Use appropriate images
            link={`/subjects/${department}/${sem}`} // Navigate on click
          />
        ))}
      </div>
    </div>
  );
};

export default Semester;
