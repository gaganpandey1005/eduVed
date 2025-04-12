import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center bg-black text-white overflow-hidden">
      {/* Left side: Content */}
      <div className="w-full lg:w-1/2 p-8 lg:p-16 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30"
        >
          <span className="text-blue-300 font-medium">Revolutionary Learning Platform</span>
        </motion.div>
        
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Learn 
          <motion.span 
            className="relative inline-block mx-3"
            animate={{ rotate: [0, 2, 0, -2, 0] }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Beyond
            </span>
            <motion.div 
              className="absolute -bottom-2 left-0 h-1 bg-blue-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 1 }}
            />
          </motion.span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Imagination
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl mb-8 text-gray-300 max-w-lg"
        >
          Experience the future of education with our AI-driven platform that adapts to your unique learning style. Unlock your potential with interactive tools designed to maximize knowledge retention.
        </motion.p>
        
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 rounded-xl font-semibold shadow-lg flex items-center gap-2"
          >
            Start Your Journey
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.button>
          
          
        </motion.div>
      </div>
      
      {/* Right side: Interactive Learning Visual */}
      <div className="w-full lg:w-1/2 relative h-96 lg:h-full p-8 lg:p-0">
        {/* Animated backdrop */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-3xl lg:rounded-l-3xl lg:rounded-r-none mx-8 lg:mx-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {/* Neural network nodes and connections */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 rounded-full bg-blue-400"
                style={{
                  left: `${15 + Math.random() * 70}%`,
                  top: `${10 + Math.random() * 80}%`,
                }}
                initial={{ opacity: 0.3 }}
                animate={{ 
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full">
              <motion.path 
                d="M80,50 Q140,30 200,80 T320,120" 
                stroke="rgba(96, 165, 250, 0.3)" 
                strokeWidth="1.5" 
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
              />
              <motion.path 
                d="M100,120 Q180,160 240,100 T300,70" 
                stroke="rgba(129, 140, 248, 0.3)" 
                strokeWidth="1.5" 
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "loop", delay: 1 }}
              />
              <motion.path 
                d="M60,180 Q120,120 220,150 T300,200" 
                stroke="rgba(165, 180, 252, 0.3)" 
                strokeWidth="1.5" 
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 3.5, repeat: Infinity, repeatType: "loop", delay: 0.5 }}
              />
            </svg>
          </div>
        </motion.div>
        
        {/* Main floating 3D notebook */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-64 md:w-80"
        >
          {/* 3D Notebook with perspective */}
          <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-2xl overflow-hidden transform perspective-1000 rotate-y-6 rotate-x-3">
            {/* Top holographic bar */}
            <motion.div 
              className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-blue-500/80 to-indigo-500/80 backdrop-blur-sm"
              animate={{ 
                background: ["linear-gradient(to right, rgba(59, 130, 246, 0.8), rgba(99, 102, 241, 0.8))", 
                            "linear-gradient(to right, rgba(236, 72, 153, 0.8), rgba(99, 102, 241, 0.8))",
                            "linear-gradient(to right, rgba(59, 130, 246, 0.8), rgba(99, 102, 241, 0.8))"]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <div className="flex justify-between items-center h-full px-4">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-red-500 opacity-80"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500 opacity-80"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500 opacity-80"></div>
                </div>
                <div className="w-20 h-2 bg-white/20 rounded-full"></div>
              </div>
            </motion.div>
            
            {/* Notebook content with holographic UI elements */}
            <div className="mt-8 p-5">
              {/* Interactive learning module */}
              <div className="mb-5">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-2 bg-blue-400/70 rounded mr-2"></div>
                  <div className="w-16 h-2 bg-gray-300 rounded"></div>
                </div>
                
                {/* Interactive brain visualization */}
                <div className="relative w-full h-32 bg-gray-800/10 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                  <motion.div
                    className="w-20 h-20 relative"
                    animate={{ rotateY: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    {/* Brain visualization */}
                    <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-br from-purple-400/40 to-blue-500/30 backdrop-blur-sm"></div>
                    
                    {/* Synapses */}
                    <motion.div 
                      className="absolute left-1/2 top-1 w-px h-3 bg-blue-400"
                      animate={{ height: [3, 5, 3], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <motion.div 
                      className="absolute left-1/4 top-1/2 w-px h-4 bg-purple-400"
                      animate={{ height: [4, 6, 4], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />
                    <motion.div 
                      className="absolute right-1/4 bottom-1/4 w-px h-3 bg-indigo-400"
                      animate={{ height: [3, 5, 3], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.8, repeat: Infinity, delay: 1 }}
                    />
                    
                    {/* Neural pathways */}
                    <svg className="absolute inset-0">
                      <motion.circle 
                        cx="50%" cy="50%" r="40%" 
                        stroke="rgba(139, 92, 246, 0.5)" 
                        strokeWidth="1" 
                        fill="none"
                        strokeDasharray="5,3"
                      />
                    </svg>
                  </motion.div>
                </div>
                
                {/* AI Learning Analytics */}
                <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden mb-3">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
                    initial={{ width: "20%" }}
                    animate={{ width: "80%" }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                  />
                </div>
                
                <div className="flex justify-between mb-5">
                  <div className="w-1/3 space-y-1">
                    <div className="w-full h-1 bg-gray-300 rounded"></div>
                    <div className="w-2/3 h-1 bg-gray-300 rounded"></div>
                  </div>
                  <div className="flex space-x-1">
                    <motion.div 
                      className="w-2 h-2 rounded-full bg-green-500"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div 
                      className="w-2 h-2 rounded-full bg-blue-500"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    />
                    <motion.div 
                      className="w-2 h-2 rounded-full bg-purple-500"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    />
                  </div>
                </div>
              </div>
              
              {/* Learning modules visualization */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                <motion.div 
                  className="col-span-1 h-8 rounded bg-blue-100 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-4 h-4 rounded-sm bg-blue-400"></div>
                </motion.div>
                <motion.div 
                  className="col-span-2 h-8 rounded bg-purple-100 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-10 h-1 bg-purple-400 rounded-full"></div>
                </motion.div>
                <motion.div 
                  className="col-span-2 h-8 rounded bg-indigo-100 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-10 h-1 bg-indigo-400 rounded-full"></div>
                </motion.div>
                <motion.div 
                  className="col-span-1 h-8 rounded bg-pink-100 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-4 h-4 rounded-sm bg-pink-400"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Floating Knowledge Elements */}
        {/* DNA Double Helix */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.7, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute top-1/4 left-1/4 transform -translate-x-full -translate-y-1/2 z-20"
        >
          <div className="relative w-12 h-28">
            <motion.div 
              className="absolute w-full h-full"
              animate={{ rotateX: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              {[...Array(7)].map((_, i) => (
                <div key={`helix-${i}`} className="relative" style={{ top: `${i * 4}px` }}>
                  <div 
                    className="absolute h-1 w-10 bg-blue-400 rounded-full opacity-80"
                    style={{ 
                      left: '0',
                      transform: `rotate(${i % 2 ? 20 : -20}deg)`
                    }}
                  />
                  <div 
                    className="absolute h-1 w-10 bg-purple-400 rounded-full opacity-80"
                    style={{ 
                      left: '2px',
                      transform: `rotate(${i % 2 ? -20 : 20}deg)`
                    }}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
        
        {/* 3D Atom Structure */}
        <motion.div
          initial={{ opacity: 0, rotate: -30, x: 50 }}
          animate={{ opacity: 0.8, rotate: -30, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-1/3 right-1/4 transform translate-x-1/2 translate-y-1/2 z-20"
        >
          <motion.div 
            className="relative h-16 w-16"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-400"></div>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 border border-cyan-300 rounded-full opacity-70"></div>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 border border-cyan-400 rounded-full opacity-50" style={{ transform: 'translateX(-50%) translateY(-50%) rotateX(60deg)' }}></div>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 border border-cyan-500 rounded-full opacity-30" style={{ transform: 'translateX(-50%) translateY(-50%) rotateY(60deg)' }}></div>
            <motion.div 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400"
              animate={{ 
                x: [0, 16, 0],
                y: [0, 8, 0],
              }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
          </motion.div>
        </motion.div>
        
        {/* Math Formula Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="absolute bottom-1/4 left-1/3 transform -translate-x-1/2 translate-y-1/2 z-0"
        >
          <div className="text-blue-300 font-mono text-sm">
            <div>[ x² + y² = r² ]</div>
            <div>∫ f(x) dx</div>
            <div>λ = h/p</div>
          </div>
        </motion.div>
        
        {/* Quantum Computing Qubits */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="absolute top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2 z-0"
        >
          <motion.div
            className="relative w-16 h-16 flex items-center justify-center"
            animate={{ rotateZ: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute w-full h-full border-2 border-dashed border-green-400/50 rounded-full" />
            <div className="absolute w-4 h-4 rounded-full bg-gradient-to-br from-green-400 to-cyan-400 shadow-lg shadow-cyan-500/30" />
            <motion.div 
              className="absolute w-2 h-2 rounded-full bg-green-300"
              animate={{ 
                x: [0, 8, 0, -8, 0],
                y: [8, 0, -8, 0, 8],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
        
        {/* 3D Holographic Book */}
        <motion.div
          initial={{ opacity: 0, rotate: 15, y: 50 }}
          animate={{ opacity: 1, rotate: 15, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute bottom-1/4 right-1/3 transform translate-x-1/2 translate-y-1/2 z-0"
        >
          <div className="relative w-24 h-32">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 rounded-r-md shadow-lg transform perspective-1000 rotateY-15">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-900"></div>
              <div className="absolute top-4 right-3 w-16 h-2 bg-white/20 rounded"></div>
              <div className="absolute top-8 right-5 w-12 h-2 bg-white/20 rounded"></div>
              <div className="absolute top-12 right-4 w-14 h-2 bg-white/20 rounded"></div>
              <div className="absolute top-20 right-3 left-3 h-8 bg-white/10 rounded flex items-center justify-center">
                <motion.div 
                  className="w-full h-1 bg-indigo-300/50 rounded"
                  animate={{ 
                    width: ["60%", "90%", "60%"]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </div>
            
            {/* Holographic glow */}
            <div className="absolute -inset-2 bg-purple-500/10 rounded-full filter blur-md"></div>
          </div>
        </motion.div>
        
        {/* Interactive particle system */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 rounded-full bg-blue-300"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 50 - 25],
                y: [0, Math.random() * 50 - 25],
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        {/* Background glow effect */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        
        {/* Interactive wave effect at bottom */}
        <svg 
          className="absolute bottom-0 left-0 w-full" 
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none"
        >
          <motion.path 
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z" 
            fill="rgba(59, 130, 246, 0.2)"
            animate={{
              d: [
                "M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z",
                "M0,40 C240,100 480,20 720,80 C960,100 1200,20 1440,40 L1440,120 L0,120 Z",
                "M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;