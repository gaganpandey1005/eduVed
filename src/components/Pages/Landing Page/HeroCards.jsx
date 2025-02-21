import React from "react";
import { delay, motion } from "framer-motion";
import ED from "../../../assets/images/ED.png"
import BCE from "../../../assets/images/BCE.png"
import OOP from "../../../assets/images/OOP.webp"
const HeroCards = () =>
{
  const cards = [
    { id: 1, title: "PYQ", description: "It contains all pyqs with answer", img: null },
    { id: 2, title: "Notes", description: "It contains all the Notes", img: null },
    { id: 3, title: "Books", description: "It contains all the books", img: null},
    {
      id: 4, title: "DSA", description: "Data Strucuture"
    },

  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3.6 }}
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
        {[...cards, ...cards].map((card, index) => (
          <motion.div

            key={index}
            className="min-w-[200px] text-white md:min-w-[300px] lg:min-w-[418px] bg-gray-900 shadow-lg rounded-xl p-6 text-center border border-gray-200"
            whileHover={{ scale: 1.05 }}
          >
            <img src={card.img} alt="" />
            <h2 className="text-xl  font-semibold ">{card.title}</h2>


            <span className="inline-block text-wrap">{card.description}</span>

          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HeroCards;
