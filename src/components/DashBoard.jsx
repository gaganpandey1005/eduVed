/* eslint-disable react/prop-types */
import { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import apirequest from "../utils/lib/apiRequest";
import Cards from "./Cards";
import { AuthContext } from "../context/AuthContext";
import { FiSearch } from "react-icons/fi";

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);

  const userDepartment = currentUser?.department;
  const userSemester = currentUser?.semester;
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleSearch = () => setShowSearch((prev) => !prev);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await apirequest.get(
          `/subjects/getNotes?department=${userDepartment}&semester=${userSemester}`
        );
        setDepartments(response.data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userDepartment && userSemester) {
      fetchDepartments();
    }
  }, [userDepartment, userSemester]);

  // Filter departments based on search term
  const filteredDepartments = departments.filter((department) =>
    department.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center p-4 mt-12 mb-28">
      <div className="w-full max-w-5xl mx-auto mb-6 flex justify-between items-center">
        <motion.h1
          className="text-blue-500 text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Dashboard
        </motion.h1>

        <FiSearch
          onClick={toggleSearch}
          className="text-3xl text-gray-500 active:text-blue-600 cursor-pointer hover:text-gray-300 transition"
        />
      </div>

      {showSearch && (
        <div className="mb-6 w-full max-w-md mx-auto">
          <div className="relative">
            <FiSearch className="absolute left-3 top-3 text-gray-500" />
            <input
              type="text"
              placeholder="Search department"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600 text-black bg-white"
            />
          </div>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 w-full">
        {loading ? (
          <motion.p
            className="text-white text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Loading departments...
          </motion.p>
        ) : filteredDepartments.length > 0 ? (
          filteredDepartments.map((department) => (
            <motion.div
              key={department.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Cards
                title={department.name}
                image={department.imageUrl}
                link={`/chapter/${
                  department.name
                }/${userSemester}/${encodeURIComponent(department.name)}`}
              />
            </motion.div>
          ))
        ) : (
          <motion.p
            className="text-white text-lg col-span-full text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            No matching departments found.
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
