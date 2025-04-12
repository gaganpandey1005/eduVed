/* eslint-disable react/prop-types */
import faqimg from "../../assets/images/faqimg.png"; // Import image
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQItem = ({ faq, isActive, onClick }) => {
  return (
    <div
      className={`py-4 border-b border-white-100 ${isActive ? "bg-white-50" : ""}`}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
      role="button"
      tabIndex={0}
      aria-expanded={isActive}
      aria-controls={`answer-${faq.id}`}
    >
      <div className="flex justify-between items-center cursor-pointer">
        <h3
          className={`text-lg ${isActive ? "text-blue-600 font-medium" : "text-white-800"}`}
        >
          {faq.question}
        </h3>
        <div className="flex-shrink-0">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              isActive ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"
            }`}
          >
            <svg
              className={`h-5 w-5 transform transition-transform duration-300 ${
                isActive ? "rotate-90" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "How do I access the study materials?",
      answer:
        "After creating an account, you can access all free study materials directly from your dashboard. Premium materials will be available once you've subscribed to our premium plan.",
    },
    {
      id: 2,
      question: "Are the notes updated according to the latest syllabus?",
      answer:
        "Yes, all our study materials including notes, PYQs, and quizzes are regularly updated to match the latest RGPV syllabus and examination patterns.",
    },
    {
      id: 3,
      question: "Can I download the materials for offline use?",
      answer:
        "Yes, most of our study materials can be downloaded in PDF format for offline studying. This feature is available for both free and premium users.",
    },
    {
      id: 4,
      question: "How often are new PYQs added to the platform?",
      answer:
        "We update our PYQ database after every examination cycle. New questions are typically added within two weeks after the completion of semester exams.",
    },
    {
      id: 5,
      question: "Is there a mobile app available?",
      answer:
        "Yes, our mobile app is available for both Android and iOS devices. You can download it from the Google Play Store or Apple App Store to access all your study materials on the go.",
    },
    {
      id: 6,
      question: "What's included in the premium subscription?",
      answer:
        "Premium subscribers get access to solved PYQs with detailed explanations, chapter-wise quizzes, personalized study planners, doubt-solving sessions, and exclusive live sessions with subject experts.",
    },
    {
      id: 7,
      question: "Are the notes updated according to the latest syllabus?",
      answer:
        "Yes, all our study materials including notes, PYQs, and quizzes are regularly updated to match the latest RGPV syllabus and examination patterns.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the active question
  };

  return (
    <div className="py-12 bg-black mt-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white-900">Frequently Asked Questions</h2>
          <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
            View all
            <svg
              className="ml-1 w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        <div className="flex flex-col md:flex-row text-white-200 gap-8 w-full">
          {/* Left column - Questions */}
          <div className="bg-[rgb(20,21,21)] rounded-4xl w-full md:w-1/2 shadow-lg p-6 flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isActive={activeIndex === index}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>

          {/* Right column - Answer or Placeholder Image */}
          <div className="md:w-1/2 flex items-center justify-center">
            {activeIndex === null ? (
              <div className="flex items-center justify-center h-full">
                <img
                  src={faqimg}
                  loading="lazy"
                  alt="Select a question to view the answer"
                  className="  rounded-lg shadow-md w-3xl h-3xl"
                />
              </div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 bg-white-50 rounded-lg"
                >
                  <p className="text-white-700 leading-relaxed">
                    {faqs[activeIndex].answer}
                  </p>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
