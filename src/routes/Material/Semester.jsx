import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Department-specific themes with vibrant gradients
const departmentThemes = {
  CS: {
    primary: "from-cyan-500 to-blue-600",
    secondary: "from-indigo-600 to-purple-700",
    accent: "text-cyan-400",
    icon: "💻"
  },
  EE: {
    primary: "from-amber-500 to-orange-600",
    secondary: "from-red-600 to-rose-700",
    accent: "text-amber-400",
    icon: "⚡"
  },
  ME: {
    primary: "from-emerald-500 to-teal-600",
    secondary: "from-teal-600 to-cyan-700",
    accent: "text-emerald-400",
    icon: "⚙️"
  },
  CE: {
    primary: "from-blue-500 to-indigo-600",
    secondary: "from-indigo-600 to-violet-700",
    accent: "text-blue-400",
    icon: "🏗️"
  },
  ECE: {
    primary: "from-violet-500 to-purple-600",
    secondary: "from-purple-600 to-fuchsia-700",
    accent: "text-violet-400",
    icon: "📡"
  },
  IT: {
    primary: "from-blue-500 to-indigo-600",
    secondary: "from-sky-600 to-blue-700",
    accent: "text-blue-400",
    icon: "🌐"
  }
};

// Unique visual identifier for each semester
const semesterIdentifiers = {
  1: {
    name: "Foundation",
    icon: "🏛️",
    shape: "clip-path-circle"
  },
  2: {
    name: "Exploration",
    icon: "🧭",
    shape: "clip-path-hexagon"
  },
  3: {
    name: "Development",
    icon: "🌱",

    shape: "clip-path-diamond"
  },
  4: {
    name: "Synthesis",
    icon: "🔄",

    shape: "clip-path-pentagon"
  },
  5: {
    name: "Analysis",
    icon: "🔍",
    shape: "clip-path-octagon"
  },
  6: {
    name: "Mastery",
    icon: "⭐",
    shape: "clip-path-square-rotated"
  },
  7: {
    name: "Innovation",
    icon: "💡",
    shape: "clip-path-triangle"
  },
  8: {
    name: "Culmination",
    icon: "🎯",
    shape: "clip-path-squircle"
  }
};

const Semester = () => {
  const { department } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSemester, setActiveSemester] = useState(null);
  const semesters = [1, 2, 3, 4, 5, 6, 7, 8];
  
  // Theme based on department
  const theme = departmentThemes[department] || {
    primary: "from-blue-500 to-indigo-600",
    secondary: "from-indigo-600 to-violet-700",
    accent: "text-blue-400",
    icon: "📚"
  };

  // Map department codes to full names
  const departmentNames = {
    CS: "Computer Science",
    EE: "Electrical Engineering",
    ME: "Mechanical Engineering",
    CE: "Civil Engineering",
    ECE: "Electronics & Communication",
    IT: "Information Technology",
  };

  const fullDepartmentName = departmentNames[department] || department;

  useEffect(() => {
    // Staggered animation timing
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Custom clip paths for unique card shapes
  const clipPaths = {
    "clip-path-hexagon": { clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" },
    "clip-path-circle": { clipPath: "circle(50% at 50% 50%)" },
    "clip-path-diamond": { clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" },
    "clip-path-pentagon": { clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)" },
    "clip-path-octagon": { clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)" },
    "clip-path-square-rotated": { clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" },
    "clip-path-triangle": { clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" },
    "clip-path-squircle": { clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)" }
  };

  return (
    <div className="min-h-screen  py-6 px-4 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="fixed inset-0 opacity-50 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-800 to-transparent rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-800 to-transparent rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-pink-800 to-transparent rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Department header with animated accents */}
        <div className={`transition-all duration-1000 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col items-center mb-10 relative">
            {/* Decorative elements */}
            <div className="absolute -left-4 -top-4 h-20 w-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full filter blur-lg opacity-25 animate-pulse"></div>
            <div className="absolute -right-4 -bottom-4 h-20 w-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full filter blur-lg opacity-25 animate-pulse" style={{ animationDelay: "1.5s" }}></div>
            
            {/* Department icon */}
            <div className="relative mb-6 group">
              <div className={`absolute -inset-1 bg-gradient-to-r ${theme.primary} rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500`}></div>
              <div className="relative bg-gray-800 rounded-2xl p-5 flex items-center justify-center">
                <span className="text-5xl">{theme.icon}</span>
              </div>
            </div>
            
            {/* Department title */}
            <div className="text-center relative">
              <h1 className="text-4xl md:text-6xl font-black mb-2 tracking-tight">
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.primary}`}>
                  {department?.toUpperCase()}
                </span>
                <span className="text-white"> Department</span>
              </h1>
              
              {/* Animated accent line */}
              <div className="relative h-1 mx-auto my-4 overflow-hidden">
                <div className="absolute h-1 w-full bg-gray-700 rounded-full"></div>
                <div className={`absolute h-1 w-32 bg-gradient-to-r ${theme.primary} rounded-full transform transition-transform duration-700 ease-out ${isLoaded ? 'translate-x-0' : '-translate-x-full'}`}></div>
              </div>
              
              <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-1">{fullDepartmentName}</h2>
              <p className={`${theme.accent} text-lg font-medium`}>Select your semester journey</p>
            </div>
          </div>
        </div>

        {/* Innovative semester selection grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
          {semesters.map((sem, index) => {
            const semInfo = semesterIdentifiers[sem];
            const isActive = activeSemester === sem;
            
            return (
              <div
                key={sem}
                className={`transition-all duration-700 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveSemester(sem)}
                onMouseLeave={() => setActiveSemester(null)}
              >
                <Link to={`/subjects/${department}/${sem}`} className="block h-full">
                  <div className="relative h-full perspective">
                    {/* Card with 3D effect and unique shape */}
                    <div 
                      className={`relative h-full bg-gray-800 rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 ${isActive ? 'shadow-lg shadow-blue-500/25' : ''} hover:scale-105 group`}
                      style={{ 
                        transform: isActive ? 'rotateY(10deg)' : 'rotateY(0)',
                        transformStyle: 'preserve-3d'
                      }}
                    >
                      {/* Unique shape overlay with animated border */}
                      <div className="absolute top-4 right-4 w-16 h-16" style={clipPaths[semInfo.shape]}>
                        <div className="absolute inset-0 animate-spin-slow">
                          <div className={`absolute inset-0 bg-gradient-to-r ${theme.primary} opacity-75`}></div>
                        </div>
                        <div className="absolute inset-0.5 bg-gray-800 flex items-center justify-center" style={clipPaths[semInfo.shape]}>
                          <span className="text-xl">{semInfo.icon}</span>
                        </div>
                      </div>
                      
                      {/* Glowing gradient background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${theme.secondary} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 group-hover:opacity-30 transition-opacity duration-500"></div>
                      
                      {/* Content with depth effect */}
                      <div className="relative z-10 p-6 flex flex-col h-full">
                        <div className="mb-auto pb-4">
                          <div className="flex items-baseline mb-1">
                            <h3 className="text-white text-xl font-bold mr-2">Semester {sem}</h3>
                            <div className={`h-px w-8 ${theme.accent} opacity-70`}></div>
                          </div>
                          <h4 className={`${theme.accent} font-semibold text-lg mb-2`}>{semInfo.name}</h4>
                          <p className="text-gray-400 text-sm">{semInfo.description}</p>
                        </div>
                        
                        {/* Interactive bottom action */}
                        <div className="mt-auto">
                          <div className={`flex items-center transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                            <span className="text-white font-medium mr-2">View Subjects</span>
                            <div className={`h-px flex-grow ${theme.accent}`}></div>
                            <span className={`ml-2 ${theme.accent} transform transition-transform duration-300 group-hover:translate-x-1`}>→</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Interactive highlight corner */}
                      <div className="absolute bottom-0 right-0 w-0 h-0 border-solid border-b-24 border-r-24 border-transparent group-hover:border-blue-500 transition-all duration-500"></div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Animated back button with hover effect */}
        <div className={`mt-16 text-center transition-all duration-700 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '800ms' }}>
          <Link
            to="/departments"
            className="inline-flex items-center gap-3 relative group"
          >
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 group-hover:from-blue-900 group-hover:to-indigo-900 transition-all duration-300 transform group-hover:scale-105"></div>
            <span className="py-3 pl-5 pr-6 flex items-center text-gray-300 group-hover:text-white transition-colors">
              <span className="text-xl transform transition-transform duration-300 group-hover:-translate-x-1">←</span>
              <span className="ml-2 font-medium">Departments</span>
            </span>
          </Link>
        </div>
      </div>

      {/* Style additions */}
      <style >{`
        .perspective {
          perspective: 1000px;
        }
        
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .border-b-24 {
          border-bottom-width: 24px;
        }
        
        .border-r-24 {
          border-right-width: 24px;
        }
      `}</style>
    </div>
  );
};

export default Semester;