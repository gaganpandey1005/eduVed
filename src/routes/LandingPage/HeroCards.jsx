import { motion } from "framer-motion";

const HeroCards = () => {
  const cards = [
    { 
      id: 1, 
      title: "PYQ", 
      description: "Access all previous year questions with detailed answers", 
      img: "/api/placeholder/80/80",
      color: "from-blue-600 to-indigo-600" 
    },
    { 
      id: 2, 
      title: "Notes", 
      description: "Comprehensive study notes organized by chapter", 
      img: "/api/placeholder/80/80",
      color: "from-green-600 to-teal-600" 
    },
    { 
      id: 3, 
      title: "Books", 
      description: "Reference books and study materials from top authors", 
      img: "/api/placeholder/80/80",
      color: "from-purple-600 to-pink-600" 
    },
    { 
      id: 4, 
      title: "DSA", 
      description: "Data Structure and Algorithm practice problems and solutions",
      img: "/api/placeholder/80/80",
      color: "from-yellow-500 to-orange-600" 
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="overflow-hidden w-full py-10"
    >
      <div className="container mx-auto px-4 mb-8 mt-20">
        <h2 className="text-3xl font-bold text-center mb-2">
          <span className="text-white">Learning </span>
          <span className="text-blue-600">Resources</span>
        </h2>
        <p className="text-gray-300 text-center mb-8">Explore our comprehensive collection of study materials</p>
      </div>
      
      <motion.div
        className="flex gap-6 whitespace-nowrap w-full"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        }}
      >
        {[...cards, ...cards].map((card, index) => (
          <motion.div
            key={index}
            className="min-w-[250px] md:min-w-[300px] lg:min-w-[350px] bg-gray-800 shadow-lg rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className={`h-3 w-full bg-gradient-to-r ${card.color}`}></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-gray-700 rounded-lg p-2 mr-4">
                  <img src={card.img} alt={card.title} className="w-10 h-10 object-contain" />
                </div>
                <h2 className="text-2xl font-bold text-white">{card.title}</h2>
              </div>
              <p className="text-gray-300 whitespace-normal">{card.description}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300">
                Explore
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HeroCards;