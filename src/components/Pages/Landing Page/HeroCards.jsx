import React from "react";
import { delay, motion } from "framer-motion";
import ED from "../../../assets/images/ED.png"
const HeroCards = () => {
  const cards = [
    { id: 1, title: "ED", description: "Engineering Drawing",img:ED },
    { id: 2, title: "BCE", description: "Basic Civil Engineering" },
    { id: 3, title: "OOP", description: "Object Oriented Programming" },
    { id: 4, title: "DSA", description: "Data Strucuture" },
    
  ];

  return (
    <motion.div
      initial={{ opacity:0 }}
      animate={{opacity:1}}
      transition={{delay:3.6}}
      className="overflow-hidden w-full py-10"
    >
      <motion.div
        className="flex gap-6 whitespace-nowrap w-full"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 10, // Adjust speed
          ease: "linear",
        }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="min-w-[250px] text-white md:min-w-[300px] lg:min-w-[350px] bg-gray-900 shadow-lg rounded-xl p-6 text-center border border-gray-200"
            whileHover={{ scale: 1.05 }}
          >
            <img src={card.img} alt="" />
            <h2 className="text-xl  font-semibold ">{card.title}</h2>
            <p className="">{card.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HeroCards;
