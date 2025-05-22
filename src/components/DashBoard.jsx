/* eslint-disable react/prop-types */
import { useEffect, useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import apirequest from "../utils/lib/apiRequest";
import Cards from "./Cards";
import { AuthContext } from "../context/AuthContext";
import { FiSearch, FiBook } from "react-icons/fi";

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const userDepartment = currentUser?.department;
  const userSemester = currentUser?.semester;

  const toggleSearch = () => setShowSearch((prev) => !prev);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await apirequest.get(
          `/subjects/getNotes?department=${userDepartment}&semester=${userSemester}`
        );
        setDepartments(response.data);
        console.log(response.data);
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

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="flex flex-col items-center min-h-screen  text-white p-4 mt-12 mb-28">
      {/* Header section */}
      <div className="w-full max-w-6xl mx-auto mb-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 bg-gray-800 p-6 rounded-xl shadow-lg"
        >
          <div className="flex items-center gap-3">
            <FiBook className="text-3xl text-blue-400" />
            <div>
              <h1 className="text-2xl font-bold text-blue-400">Study Resources</h1>
              <p className="text-gray-400">
                {userDepartment} • Semester {userSemester}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={toggleSearch}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg"
            >
              <FiSearch className="text-xl" />
              <span className="hidden md:inline">Search</span>
            </button>
           
          </div>
        </motion.div>
      </div>

      {/* Search bar */}
      <AnimatePresence>
        {showSearch && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-8 w-full max-w-lg mx-auto overflow-hidden"
          >
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="text"
                placeholder="Search departments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 bg-gray-800 text-white text-lg"
                autoFocus
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Departments grid */}
      <div className="w-full max-w-6xl mx-auto">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
            />
          </div>
        ) : filteredDepartments.length > 0 ? (
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate="show"
            className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 w-full"
          >
            {filteredDepartments.map((department) => (
              <motion.div
                key={department.name}
                variants={cardVariants}
                className="transform hover:scale-105 transition duration-300"
              >
                <Cards
                  title={department.name}
                  image={department.imageUrl}
                  link={`/chapter/${department.name}/${userSemester}/${encodeURIComponent(department.name)}`}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center h-64 bg-gray-800 rounded-xl p-8"
          >
            <FiSearch className="text-5xl text-gray-500 mb-4" />
            <p className="text-xl text-gray-400 text-center">
              No matching departments found.
            </p>
            <button 
              onClick={() => setSearchTerm("")}
              className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 transition rounded-lg"
            >
              Clear search
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;