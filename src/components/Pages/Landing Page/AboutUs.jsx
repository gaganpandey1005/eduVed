import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
const AboutUs = () =>
{
  const [active, setactive] = useState(false);
  const [active1, setactive1] = useState(false);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.8 });
  const { ref1, inView2 } = useInView({ triggerOnce: true, threshold: 1 });
  const lines = [
    "EduVed is a learning platform offering high-quality study materials",
    "Chapter-wise quizzes, previous year questions (PYQs), and premium notes",
    "We make learning accessible, interactive, and effective.",
    "Providing structured content to enhance conceptual understanding.",
    "With topic-wise notes, diagrams, and expert-curated question banks,",
    "EduVed helps students excel in academics and exams.",
  ];

  const words = lines.flatMap((line) => line.split(" "));

  return (
    <>
      <div ref={ref} className="w-full  px-5 py-10 flex justify-center">
        <div className="w-full max-w-2xl">
          <h1
            ref={ref1}
            className="text-center text-2xl md:text-3xl font-bold mb-6"
          >
            About Us
          </h1>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="inline-block mx-1 text-lg md:text-xl font-semibold tracking-wide"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      <div className="my-28  lg:ml-20 text-[#323233]  ">
        <motion.span
          animate={{ color: active ? "#ffff" : "#323233" }}
          transition={{ duration: 0.3 }}
          whileHover={{ color: "#ffff" }}
          className="text-3xl mx-10 cursor-none lg:text-9xl hover:scale-3d  font-[woff1]  md:text-8xl sm:text-8xl "
          onClick={() =>
          {
            setactive(!active);

          }}
        >

          Boundless learning
        </motion.span>{" "}
        <br />
        <motion.span
          animate={{ color: active1 ? "blue" : "#323233" }}
          transition={{ duration: 0.3 }}
          whileHover={{ color: "blue" }}
          onClick={() =>
          {
            setactive1(!active1);
          }}
          className=" text-3xl  ml-27 cursor-none lg:ml-40 lg:font-[woff1] hover:scale-3d lg:text-9xl  md:text-8xl sm:text-8xl font-[woff1]"
        >
          driven to empower
        </motion.span>
      </div>
    </>
  );
};

export default AboutUs;
