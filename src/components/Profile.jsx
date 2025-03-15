import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    semester: "",
    department: "",
  });

  const navigate = useNavigate();

  // Use useEffect to fetch user data from local storage
  useEffect(() => {
    const userData = localStorage.getItem("user");
    
    
    if (userData) {
      const parsedData = JSON.parse(userData); // Parse the JSON string
      setUser({
        name: parsedData.fullName,
        semester: parsedData.semester,
        department: parsedData.department,
      });
      
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from storage
    localStorage.removeItem("user"); // Remove user data from storage
    navigate("/"); // Redirect to Sign In page
    window.location.reload();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black px-6">
      <div className="bg-gray-900 bg-opacity-80 shadow-2xl rounded-3xl p-10 w-full max-w-2xl text-center border border-gray-700 backdrop-blur-md">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <Avatar
            sx={{ bgcolor: "orangered", width: 100, height: 100, fontSize: 40 }}
          >
            {user.name ? user.name.split(" ")[0][0].toUpperCase() : "?"}
          </Avatar>
        </div>

        {/* Name */}
        <h1 className="text-4xl font-extrabold text-white">
          {user.name || "Unknown User"}
        </h1>

        {/* Semester */}
        <p className="text-gray-400 text-lg mt-3">
          <span className="font-semibold text-blue-500">Semester:</span>{" "}
          {user.semester || "N/A"}
        </p>

        {/* Department */}
        <p className="text-gray-400 text-lg mt-1">
          <span className="font-semibold text-blue-500">Department:</span>{" "}
          {user.department || "N/A"}
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          {/* Edit Profile Button */}
          <button className="px-6 py-3 text-lg font-semibold bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-transform transform hover:scale-105">
            Edit Profile
          </button>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="px-6 py-3 text-lg font-semibold bg-red-600 text-white rounded-xl hover:bg-red-500 transition-transform transform hover:scale-105"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
