import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

// Assuming we're keeping the same department data structure but rendering differently
const Department = () => {
  const departments = [
    { name: "Computer Science", code: "CS", color: "#3498db" },
    { name: "Electrical Engineering", code: "EE", color: "#f39c12" },
    { name: "Mechanical Engineering", code: "ME", color: "#2ecc71" },
    { name: "Civil Engineering", code: "CE", color: "#e74c3c" },
    { name: "Electronics & Communication", code: "ECE", color: "#9b59b6" },
    { name: "Information Technology", code: "IT", color: "#1abc9c" },
  ];

  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeDept, setActiveDept] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Handle mouse movement for parallax effect
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5
    });
  };

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
    if (showSearch) setSearchTerm("");
  };

  // Filter departments based on search term
  const filteredDepartments = departments.filter((dept) =>
    dept.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Generate particles for background effect
  const particles = Array.from({ length: 80 }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 40 + 10
  }));

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen w-full overflow-hidden bg-black relative"
    >
      {/* Cosmic animated background */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>
        
        {/* Dynamic stars */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white"
            style={{ 
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: 0.1 + Math.random() * 0.5
            }}
            animate={{ 
              opacity: [0.1 + Math.random() * 0.5, 0.8, 0.1 + Math.random() * 0.5],
              scale: [1, 1.5, 1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: particle.duration,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Nebula effects */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-blue-500/5 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 rounded-full bg-purple-500/10 blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 py-16 px-4 max-w-7xl mx-auto">
        {/* Dynamic header with 3D effect */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            style={{
              perspective: "1000px",
              transformStyle: "preserve-3d",
              rotateX: mousePosition.y * 20,
              rotateY: mousePosition.x * -20,
            }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <h1 className="relative text-5xl md:text-7xl font-bold mb-2 p-2">
              <span className="absolute inset-0 blur-xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-30"></span>
              <motion.span 
                className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500"
                animate={{ 
                  backgroundPosition: ['0% center', '100% center', '0% center'] 
                }}
                transition={{ 
                  duration: 15, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                style={{
                  backgroundSize: "200% auto"
                }}
              >
                Departments
              </motion.span>
            </h1>
            
            {/* Animated decoration elements */}
            <div className="flex justify-center mt-6 mb-4">
              <motion.div 
                className="h-0.5 w-32 rounded-full bg-gradient-to-r from-blue-400 to-transparent"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "8rem", opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
              />
              <motion.div 
                className="h-0.5 w-32 rounded-full bg-gradient-to-l from-purple-500 to-transparent"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "8rem", opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
              />
            </div>
            
            <motion.p 
              className="text-cyan-100/80 text-lg max-w-xl mx-auto font-light tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              Explore the universe of knowledge
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Search Section */}
        <motion.div 
          className="w-full max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="relative">
            <div className="flex justify-center">
              <button
                onClick={toggleSearch}
                className="flex items-center gap-2 bg-gray-800/60 hover:bg-gray-700/80 text-gray-300 px-6 py-3 rounded-full transition-all duration-300 shadow-lg border border-gray-700/50 backdrop-blur-sm group"
              >
                <FiSearch className="text-blue-400 group-hover:text-cyan-300 transition-colors" />
                <span className="hidden md:inline group-hover:text-cyan-100 transition-colors">Search Department</span>
              </button>
            </div>

            {/* Animated search input */}
            <AnimatePresence>
              {showSearch && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-6"
                >
                  <div className="relative mx-auto max-w-xl">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full opacity-70 blur-sm"></div>
                    <input
                      type="text"
                      placeholder="Search by department name..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-gray-900/90 text-white px-6 py-3 rounded-full focus:outline-none border border-gray-700/50 relative z-10"
                      autoFocus
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Department Orbital Display */}
        {filteredDepartments.length > 0 ? (
          <div className="relative h-[600px] w-full max-w-6xl mx-auto">
            {/* Center orbital point */}
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-blue-500/30"
              animate={{
                boxShadow: ["0 0 20px 5px rgba(59, 130, 246, 0.3)", "0 0 40px 10px rgba(59, 130, 246, 0.5)", "0 0 20px 5px rgba(59, 130, 246, 0.3)"]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="absolute inset-0 rounded-full bg-blue-500/50 animate-ping"></div>
            </motion.div>
            
            {/* Orbital rings */}
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-blue-500/20"
              style={{ borderWidth: "1px" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
            />
            
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-purple-500/30"
              style={{ borderWidth: "1px" }}
              animate={{ rotate: -360 }}
              transition={{ duration: 160, repeat: Infinity, ease: "linear" }}
            />
            
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-cyan-500/30"
              style={{ borderWidth: "1px" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Departments as planets on the orbital path */}
            {filteredDepartments.map((dept, index) => {
              const angle = (index * (360 / filteredDepartments.length) * Math.PI) / 180;
             // Base orbital radius
              const offsetRadius = index % 3 === 0 ? 250 : index % 3 === 1 ? 180 : 220;
              const x = Math.cos(angle) * offsetRadius;
              const y = Math.sin(angle) * offsetRadius;
              
              return (
                <motion.div
                  key={dept.code}
                  className="absolute top-1/2 left-1/2 cursor-pointer"
                  style={{
                    x,
                    y,
                    translateX: "-50%",
                    translateY: "-50%",
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: [0.215, 0.61, 0.355, 1]
                  }}
                  onMouseEnter={() => setActiveDept(dept.code)}
                  onMouseLeave={() => setActiveDept(null)}
                  whileHover={{ 
                    scale: 1.1,
                    zIndex: 10,
                  }}
                >
                  <Link to={`/select-sem/${dept.code}`}>
                    <div className="relative group">
                      {/* Planet glow effect */}
                      <motion.div 
                        className="absolute inset-0 rounded-full"
                        animate={{
                          boxShadow: [
                            `0 0 20px 5px ${dept.color}50`,
                            `0 0 30px 10px ${dept.color}70`,
                            `0 0 20px 5px ${dept.color}50`
                          ]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      
                      {/* Planet body */}
                      <div 
                        className="w-20 h-20 rounded-full flex items-center justify-center bg-gray-900 border-2 text-white overflow-hidden relative"
                        style={{ borderColor: dept.color }}
                      >
                        {/* Surface texture */}
                        <div className="absolute inset-0 opacity-30">
                          {Array.from({ length: 10 }).map((_, i) => (
                            <div 
                              key={i}
                              className="absolute rounded-full bg-white/20"
                              style={{
                                width: `${Math.random() * 20 + 5}px`,
                                height: `${Math.random() * 20 + 5}px`,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                              }}
                            />
                          ))}
                        </div>
                        
                        {/* Department code */}
                        <span 
                          className="font-bold tracking-wider text-lg z-10"
                          style={{ color: dept.color }}
                        >
                          {dept.code}
                        </span>
                      </div>
                      
                      {/* Orbital ring - unique for each dept */}
                      <motion.div 
                        className="absolute -inset-1 rounded-full"
                        style={{ 
                          borderWidth: "1px",
                          borderColor: dept.color,
                          opacity: 0.2
                        }}
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      />
                      
                      {/* Info popup on hover */}
                      <motion.div
                        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full w-48 bg-gray-900/90 backdrop-blur-md rounded-lg border border-gray-700/50 px-4 py-3 text-center pointer-events-none"
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ 
                          opacity: activeDept === dept.code ? 1 : 0,
                          y: activeDept === dept.code ? 0 : 10,
                          scale: activeDept === dept.code ? 1 : 0.9
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="text-white text-sm font-medium mb-1">{dept.name}</p>
                        <div className="flex items-center justify-center text-xs text-gray-300 mt-1">
                          <span>Select Semester</span>
                          <FiArrowRight className="ml-1" />
                        </div>
                      </motion.div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <motion.div 
            className="relative overflow-hidden rounded-3xl backdrop-blur-lg py-20 px-10 text-center mx-auto max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
            <motion.div 
              className="absolute h-64 w-64 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-cyan-500/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute h-32 w-32 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/40"
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative z-10">
              <motion.div 
                className="w-24 h-24 mx-auto mb-6 rounded-full backdrop-blur-md bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center"
                animate={{ 
                  boxShadow: [
                    "0 0 0 0 rgba(103, 232, 249, 0.1)", 
                    "0 0 0 20px rgba(103, 232, 249, 0)", 
                    "0 0 0 0 rgba(103, 232, 249, 0)"
                  ] 
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 mb-4">
                No Departments Found
              </h3>
              
              <p className="text-cyan-100/70 text-lg mb-8 max-w-lg mx-auto">
                We could not find any departments matching your search criteria.
              </p>
              
              <button 
                onClick={() => setSearchTerm('')} 
                className="px-8 py-3 rounded-full bg-transparent backdrop-blur-md border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 transition-all duration-300"
              >
                Clear Search
              </button>
            </div>
          </motion.div>
        )}
        
        {/* Legend - department names */}
        <motion.div 
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDepartments.map((dept) => (
              <div 
                key={`legend-${dept.code}`} 
                className="flex items-center space-x-3 px-4 py-2 rounded-lg bg-gray-900/40 backdrop-blur-sm border border-gray-800/50"
              >
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: dept.color }} 
                />
                <span className="text-gray-200">{dept.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Department;