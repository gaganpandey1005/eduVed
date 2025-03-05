
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex flex-col items-center space-y-8 p-4">
      {/* Animated Heading */}
      <motion.div
        animate={{ y: -61, opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="p-4 font-bold rounded-xl w-full max-w-[80%] md:max-w-[80%] h-auto flex justify-center flex-wrap"
      >
        {["E", "D", "U", "V", "E", "D"].map((letter, index) => (
          <motion.h1
            key={index}
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 50, opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.1 }}
            className={`tracking-normal mr-2 text-5xl sm:text-6xl md:text-8xl lg:text-9xl ${
              index > 2 ? "text-blue-600" : ""
            }`}
          >
            {letter}
          </motion.h1>
        ))}
      </motion.div>

      {/* Tagline Section */}
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2, ease: "easeInOut" }}
          className="bg-[rgb(20,21,21)] text-white text-xl sm:text-2xl md:text-3xl text-center p-4 md:p-6 rounded-lg w-full max-w-[90%] md:max-w-[80%] shadow-lg"
        >
          <h1>Unlock your potential with high-quality learning materials!</h1>
        </motion.div>
      </div>

      {/* Scrolling Marquee Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 3 }}
        className="overflow-hidden bg-[#141515] w-full max-w-[90%] md:max-w-[80%] rounded-xl p-4 font-semibold text-center text-sm sm:text-lg"
      >
        <div className="overflow-x-hidden">
          <motion.div
            className="flex gap-6 whitespace-nowrap w-screen"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 10, // Adjust speed
              ease: "linear",
            }}
          >
            {Array(10)
              .fill("Notes, PYQs, Shivani and Many More")
              .map((text, index) => (
                <h1 key={index}>{text}</h1>
              ))}
          </motion.div>
        </div>
      </motion.div>
              
    </div>
  );
};

export default Hero;
