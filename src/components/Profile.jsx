import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import MyBooks from "../routes/books/myBooks";
import Chat from "../routes/books/chat"; // Importing the Chat component
import axios from "axios";
import apirequest from "../utils/lib/apiRequest";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    semester: "",
    department: "",
    email: "",
    joinDate: "",
    booksListed: 0,
    booksSold: 0,
    booksPurchased: 0,
  });
  
  const [activeTab, setActiveTab] = useState("profile");
  const [showEditModal, setShowEditModal] = useState(false);
  
  const navigate = useNavigate();
  const { updateUser, currentUser } = useContext(AuthContext);
  console.log("currentUser", currentUser);
  
  // Fetch user data from AuthContext
  useEffect(() => {
    const fetchUserData=async ()=>{
      const {data}=await apirequest.get(`/user/monthlySell/${currentUser._id}`)
      console.log(data);
      
    }
    if (currentUser) {
      const month = new Date(currentUser.createdAt).toLocaleString('default',{month: 'long'});
      setUser({
        name: currentUser.fullName,
        semester: currentUser.semester,
        department: currentUser.department,
        email: currentUser.email,
        joinDate:
          month ,
        booksListed: currentUser.soldBooks.length || 0 ,
        booksSold: currentUser.bookSolded.length || 0,
        booksPurchased: currentUser.buyBooks.length || 0
      });
    }
    fetchUserData();
  }, [currentUser]);

  const handleLogout = () => {
    updateUser(null);
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    navigate("/");
  };

  const statsItems = [
    { label: "Books Listed", value: user.booksListed, icon: "📚", color: "bg-cyan-600" },
    { label: "Books Sold", value: user.booksSold, icon: "💰", color: "bg-emerald-600" },
    { label: "Books Purchased", value: user.booksPurchased, icon: "🛒", color: "bg-fuchsia-600" },
  ];

  return (
    <div className="min-h-screen bg-black px-4 py-6 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header with profile summary */}
        <div className="bg-gradient-to-r from-zinc-900 to-gray-800 rounded-xl p-6 shadow-xl mb-6 border border-zinc-700">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-28 h-28 rounded-full flex items-center justify-center bg-gradient-to-br from-violet-600 to-indigo-800 text-white font-bold text-4xl shadow-lg">
                {user.name ? user.name[0].toUpperCase() : "?"}
              </div>
            </div>

            {/* User info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-2">
                {user.name || "Unknown User"}
              </h1>
              
              <p className="text-gray-300 mb-3">
                {user.email}
              </p>
              
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="px-3 py-1 bg-zinc-800 rounded-full text-cyan-400 text-sm font-medium border border-cyan-700">
                  {user.semester || "N/A"} Semester
                </span>
                <span className="px-3 py-1 bg-zinc-800 rounded-full text-fuchsia-400 text-sm font-medium border border-fuchsia-700">
                  {user.department || "N/A"} Department
                </span>
                <span className="px-3 py-1 bg-zinc-800 rounded-full text-amber-400 text-sm font-medium border border-amber-700">
                  Member since {user.joinDate}
                </span>
              </div>
            </div>
            
            {/* Quick stats */}
            <div className="flex flex-wrap justify-center gap-3">
              {statsItems.map((stat) => (
                <div
                  key={stat.label}
                  className={`${stat.color} p-3 rounded-xl shadow-md min-w-28 text-center text-white border border-gray-600`}
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="font-bold text-xl">{stat.value}</div>
                  <div className="text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs navigation */}
        <div className="bg-gradient-to-r from-zinc-900 to-gray-800 p-1.5 rounded-xl shadow-md flex flex-wrap gap-2 mb-6 border border-zinc-700">
          {["profile", "my books", "messages"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab 
                  ? "bg-gradient-to-r from-violet-700 to-indigo-700 text-white shadow-md" 
                  : "text-gray-300 hover:text-white hover:bg-zinc-700"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content area */}
        <div className="bg-gradient-to-r from-zinc-900 to-gray-800 rounded-xl shadow-lg p-6 border border-zinc-700">
          {activeTab === "profile" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Personal Information Card */}
              <div className="bg-gradient-to-r from-gray-900 to-indigo-900 rounded-xl p-5 shadow-md border border-indigo-800">
                <h2 className="text-lg font-bold text-cyan-300 mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Personal Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-cyan-900 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Email</p>
                      <p className="text-gray-200">{user.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-fuchsia-900 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-fuchsia-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10v4m6-4v4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Semester</p>
                      <p className="text-gray-200">{user.semester || "N/A"}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-emerald-900 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Department</p>
                      <p className="text-gray-200">{user.department || "N/A"}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Book Exchange Stats Card */}
              <div className="bg-gradient-to-r from-gray-900 to-violet-900 rounded-xl p-5 shadow-md border border-violet-800">
                <h2 className="text-lg font-bold text-violet-300 mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Book Exchange Stats
                </h2>
                <div className="space-y-3">
                  <div className="bg-zinc-800 rounded-lg p-3 shadow-sm border border-violet-700">
                    <p className="text-sm text-violet-300 font-medium">Book Categories Listed</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="px-2 py-1 bg-violet-900 rounded-md text-violet-200 text-xs font-medium border border-violet-600">Textbooks</span>
                      <span className="px-2 py-1 bg-fuchsia-900 rounded-md text-fuchsia-200 text-xs font-medium border border-fuchsia-600">Reference</span>
                      <span className="px-2 py-1 bg-cyan-900 rounded-md text-cyan-200 text-xs font-medium border border-cyan-600">Engineering</span>
                    </div>
                  </div>
                  <div className="bg-zinc-800 rounded-lg p-3 shadow-sm border border-violet-700">
                    <p className="text-sm text-violet-300 font-medium">Monthly Exchange</p>
                    <div className="mt-2">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-300">5 of 10 books target</span>
                        <span className="text-violet-400">50%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full" style={{ width: "50%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Learning Resources Card */}
              <div className="bg-gradient-to-r from-gray-900 to-cyan-900 rounded-xl p-5 shadow-md border border-cyan-800">
                <h2 className="text-lg font-bold text-cyan-300 mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Learning Resources
                </h2>
                <div className="space-y-3">
                  <div 
                    className="flex items-center bg-zinc-800 rounded-lg p-3 shadow-sm cursor-pointer hover:bg-zinc-700 border border-cyan-700"
                    onClick={() => navigate('/notes')}
                  >
                    <div className="w-10 h-10 bg-cyan-900 rounded-md flex items-center justify-center text-cyan-300 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-cyan-300 text-sm font-medium">Notes Library</p>
                      <p className="text-gray-400 text-xs">Access study materials</p>
                    </div>
                  </div>
                  
                  <div 
                    className="flex items-center bg-zinc-800 rounded-lg p-3 shadow-sm cursor-pointer hover:bg-zinc-700 border border-cyan-700"
                    onClick={() => navigate('/pyqs')}
                  >
                    <div className="w-10 h-10 bg-fuchsia-900 rounded-md flex items-center justify-center text-fuchsia-300 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-cyan-300 text-sm font-medium">Previous Year Questions</p>
                      <p className="text-gray-400 text-xs">Practice with solutions</p>
                    </div>
                  </div>
                  
                  <div 
                    className="flex items-center bg-zinc-800 rounded-lg p-3 shadow-sm cursor-pointer hover:bg-zinc-700 border border-cyan-700"
                    onClick={() => navigate('/quizzes')}
                  >
                    <div className="w-10 h-10 bg-emerald-900 rounded-md flex items-center justify-center text-emerald-300 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-cyan-300 text-sm font-medium">Chapter-wise Quizzes</p>
                      <p className="text-gray-400 text-xs">Test your knowledge</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "my books" && (
            <div>
              <div className="flex justify-between items-center mb-6">
      
                <button 
                  onClick={() => navigate('/add-book')}
                  className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add New Book
                </button>
              </div>
              <MyBooks />
            </div>
          )}
          {activeTab === "messages" && (
            <div>
              <h2 className="text-xl font-bold text-cyan-300 mb-6">Messages</h2>
              <Chat /> {/* Using the Chat component */}
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <button 
            onClick={() => setShowEditModal(true)}
            className="px-5 py-2.5 text-base font-medium bg-violet-600 hover:bg-violet-700 text-white rounded-lg shadow flex items-center justify-center border border-violet-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Edit Profile
          </button>

          <button
            onClick={handleLogout}
            className="px-5 py-2.5 text-base font-medium bg-rose-600 hover:bg-rose-700 text-white rounded-lg shadow flex items-center justify-center border border-rose-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </button>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {showEditModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4"
          onClick={() => setShowEditModal(false)}
        >
          <div
            className="bg-zinc-900 rounded-2xl p-6 shadow-2xl max-w-md w-full border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-cyan-300 mb-6">Edit Profile</h2>
            
            <div className="space-y-4">
              <div>
                <label className="text-gray-300 text-sm mb-1 block">Full Name</label>
                <input 
                  type="text" 
                  value={user.name} 
                  onChange={(e) => setUser({...user, name: e.target.value})}
                  className="w-full bg-zinc-800 border border-gray-600 rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>
              
              <div>
                <label className="text-gray-300 text-sm mb-1 block">Email</label>
                <input 
                  type="email" 
                  value={user.email} 
                  onChange={(e) => setUser({...user, email: e.target.value})}
                  className="w-full bg-zinc-800 border border-gray-600 rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>
              
              <div>
                <label className="text-gray-300 text-sm mb-1 block">Semester</label>
                <select 
                  value={user.semester} 
                  onChange={(e) => setUser({...user, semester: e.target.value})}
                  className="w-full bg-zinc-800 border border-gray-600 rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
                >
                  <option value="">Select Semester</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="text-gray-300 text-sm mb-1 block">Department</label>
                <select 
                  value={user.department} 
                  onChange={(e) => setUser({...user, department: e.target.value})}
                  className="w-full bg-zinc-800 border border-gray-600 rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
                >
                  <option value="">Select Department</option>
                  {["Computer Science", "Electrical Engineering", "Mechanical Engineering", "Civil Engineering", "Business Administration"].map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="flex gap-3 mt-6">
              <button
                className="flex-1 bg-violet-600 hover:bg-violet-700 text-white py-2.5 rounded-lg font-medium border border-violet-500"
              >
                Save Changes
              </button>
              
              <button
                onClick={() => setShowEditModal(false)}
                className="flex-1 bg-zinc-700 hover:bg-zinc-600 text-gray-200 py-2.5 rounded-lg font-medium border border-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;