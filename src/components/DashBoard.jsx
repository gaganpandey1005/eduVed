/* eslint-disable react/prop-types */
import { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import apirequest from "../utils/lib/apiRequest"
import Cards from "./Cards";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);

  const userDepartment = currentUser?.department;
  const userSemester = currentUser?.semester;

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await
          apirequest.get(`/subjects/getNotes?department=${userDepartment}&semester=${userSemester}`)
        ;
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

  return (
    <div className="flex flex-col items-center p-4 mt-12 mb-28">
      <motion.h1
        className="text-blue-500 text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Dashboard
      </motion.h1>
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
        ) : departments.length > 0 ? (
          departments.map((department, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Cards
                title={department.name}
                image={department.imageUrl}
                link={`/subjects/${encodeURIComponent(department.name)}`}
              />
            </motion.div>
          ))
        ) : (
          <motion.p
            className="text-white text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            No departments found.
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
