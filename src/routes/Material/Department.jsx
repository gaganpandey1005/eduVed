import Cards from "../../components/Cards";
import { useState } from "react";

// Importing images
import cseImage from "../../assets/images/cse.png";
import eeImage from "../../assets/images/ee.png";
import meImage from "../../assets/images/me.png";
import ceImage from "../../assets/images/ce.png";
import eceImage from "../../assets/images/ece.png";
import itImage from "../../assets/images/it.png";
import { FiSearch } from "react-icons/fi";

const Department = () => {
  const departments = [
    { name: "Computer Science", img: cseImage, link: "/select-sem/CS" },
    { name: "Electrical Engineering", img: eeImage, link: "/select-sem/EE" },
    { name: "Mechanical Engineering", img: meImage, link: "/select-sem/ME" },
    { name: "Civil Engineering", img: ceImage, link: "/select-sem/CE" },
    {
      name: "Electronics & Communication",
      img: eceImage,
      link: "/select-sem/ECE",
    },
    { name: "Information Technology", img: itImage, link: "/select-sem/IT" },
  ];

  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleSearch = () => setShowSearch((prev) => !prev);

  // Filter departments based on search term
  const filteredDepartments = departments.filter((dept) =>
    dept.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen py-12 px-4 flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-5xl flex items-center justify-between mb-6">
        <h1 className="text-blue-400 text-xl sm:text-2xl font-bold">
          Please Select Your Department
        </h1>

        <FiSearch
          onClick={toggleSearch}
          className="text-3xl text-gray-500 active:text-blue-600 cursor-pointer"
        />
      </div>

      {/* Search Bar */}
      {showSearch && (
        <div className="mb-6 w-full max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search by department..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none text-black bg-white"
          />
        </div>
      )}

      {/* Department Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {filteredDepartments.length > 0 ? (
          filteredDepartments.map((dept, index) => (
            <Cards
              key={index}
              title={dept.name}
              image={dept.img}
              link={dept.link}
            />
          ))
        ) : (
          <p className="text-white text-lg text-center col-span-full">
            No departments found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Department;
