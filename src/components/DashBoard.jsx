import { useLocation } from "react-router-dom";
import Subjects from "../components/Pages/Material/Subjects"; // ✅ Correct import

const Dashboard = () => {
  const location = useLocation();
  const { department, semester } = location.state || {}; // Ensure fallback values

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-500 mb-4">Dashboard</h1>

      {/* 🔹 Correctly passing props */}
      <Subjects department={department} semester={semester} />
    </div>
  );
};

export default Dashboard;
