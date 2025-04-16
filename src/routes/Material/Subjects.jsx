/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import apirequest from "../../utils/lib/apiRequest";
import Cards from "../../components/Cards";
import { motion } from "framer-motion";

const Subjects = ({ department: propDepartment, semester: propSemester }) => {
  const params = useParams();
  const department = propDepartment || params.department;
  const semester = propSemester || params.semester;

  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const containerRef = useRef(null);

  // For parallax effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2
    });
  };

  useEffect(() => {
    if (!department || !semester) return;

    const fetchSubjects = async () => {
      try {
        setLoading(true);
        const response = await apirequest.get(
          `/subjects/getNotes?department=${department}&semester=${semester}`
        );
        setSubjects(response.data);
        setError(null);
      } catch (error) {
        console.error("Error fetching subjects:", error);
        setError("Failed to load subjects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchSubjects();
  }, [department, semester]);

  // Effects for cosmic background
  const particlesCount = 100;
  const particles = Array.from({ length: particlesCount }).map((_, i) => ({
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
      className="min-h-screen w-full overflow-hidden bg-black"
    >
      {/* Cosmic animated background */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white"
            initial={{ 
              opacity: 0.1 + Math.random() * 0.5,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%` 
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

      <div className="relative z-10 flex flex-col items-center py-16 px-4 max-w-7xl mx-auto">
        {/* Dynamic header with 3D effect */}
        <motion.div 
          className="w-full text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d"
          }}
        >
          <motion.div
            style={{
              rotateX: mousePosition.y * 0.01,
              rotateY: mousePosition.x * -0.01,
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
                {department?.toUpperCase()}
              </motion.span>
              <span className="mx-4 text-cyan-300">•</span>
              <motion.span 
                className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-400 to-blue-400"
                animate={{ 
                  backgroundPosition: ['0% center', '100% center', '0% center'] 
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                style={{
                  backgroundSize: "200% auto"
                }}
              >
                SEM {semester}
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

        {/* Main content area */}
        <div className="w-full relative">
          {loading ? (
            <div className="flex flex-col items-center py-20">
              {/* Cosmic loading animation */}
              <motion.div 
                className="relative h-32 w-32"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              >
                <motion.div 
                  className="absolute h-full w-full rounded-full border-t-2 border-b-2 border-cyan-500"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute h-full w-full rounded-full border-l-2 border-r-2 border-purple-500"
                  initial={{ rotate: 45 }}
                  animate={{ rotate: [45, 405] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute h-1/2 w-1/2 left-1/4 top-1/4 rounded-full bg-blue-500/20 blur-md"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <motion.p 
                className="mt-8 text-cyan-200 font-medium text-xl"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Discovering Subjects
              </motion.p>
            </div>
          ) : error ? (
            <motion.div 
              className="flex flex-col items-center py-16 text-center relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="absolute inset-0 bg-red-900/10 rounded-3xl backdrop-blur-xl"></div>
              <div className="relative z-10 p-8">
                <motion.div 
                  className="relative h-24 w-24 mx-auto mb-6"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute inset-0 rounded-full border-2 border-red-400 opacity-50"></div>
                  <motion.div 
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 h-4 w-4 bg-red-500 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                <h3 className="text-2xl font-semibold text-red-300 mb-4">Cosmic Interference Detected</h3>
                <p className="text-gray-300 mb-8">{error}</p>
                <button 
                  onClick={() => window.location.reload()}
                  className="relative px-8 py-3 overflow-hidden group rounded-full bg-transparent backdrop-blur-sm border border-red-400/30"
                >
                  <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500/20 to-red-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative text-red-300 group-hover:text-white transition-colors duration-300">Recalibrate Connection</span>
                </button>
              </div>
            </motion.div>
          ) : subjects.length > 0 ? (
            // Hexagonal grid layout
            <motion.div
              className="grid gap-12"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gridAutoRows: "minmax(300px, auto)",
                justifyContent: "center"
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {subjects.map((subject, index) => (
                <motion.div
                  key={index}
                  className="flex justify-center"
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: [0.215, 0.61, 0.355, 1]
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="relative w-full max-w-sm group perspective">
                    {/* Glowing border effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-75 blur-md transition-all duration-500"></div>
                    
                    {/* Card background with holographic effect */}
                    <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-black/90 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-700/30">
                      {/* Holographic overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10">
                        <Cards
                          title={subject.name}
                          image={subject.imageUrl}
                          link={`/chapter/${department}/${semester}/${subject.name}`}
                        />
                      </div>
                      
                      {/* Animated bottom border */}
                      <motion.div 
                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.4 }}
                      />
                      
                      {/* Floating particles on hover */}
                      <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        {Array.from({ length: 10 }).map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute h-1 w-1 rounded-full bg-cyan-300/70"
                            initial={{ 
                              x: Math.random() * 100 + "%", 
                              y: "100%", 
                              opacity: 0.7 
                            }}
                            animate={{ 
                              y: "0%", 
                              opacity: 0 
                            }}
                            transition={{ 
                              duration: 1.5 + Math.random() * 2,
                              repeat: Infinity,
                              delay: Math.random() * 2
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            // Empty state with futuristic design
            <motion.div 
              className="relative overflow-hidden rounded-3xl backdrop-blur-lg py-20 px-10 text-center"
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
                  Uncharted Territory
                </h3>
                
                <p className="text-cyan-100/70 text-lg mb-10 max-w-lg mx-auto">
                  No subjects have been discovered for this semester and department yet. The knowledge universe is still expanding.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <button 
                    onClick={() => window.history.back()} 
                    className="px-8 py-3 rounded-full bg-transparent backdrop-blur-md border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    Return to Previous Dimension
                  </button>
                  <button 
                    onClick={() => window.location.reload()} 
                    className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md border border-cyan-500/30 text-cyan-300 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300"
                  >
                    Recalibrate Scanner
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Subjects;