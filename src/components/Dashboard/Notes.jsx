import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import notes from "../../assets/images/notes.jpg";


const Notes = ({ subject }) => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <div className="justify-center items-center flex">
          <h1 className="font-[woff] text-3xl">Notes</h1>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="m-4 mx-auto rounded-lg bg-gray-700 p-5 w-full max-w-sm flex flex-col items-center shadow-xl text-white"
        >
          

          {/* Notes Image */}
          <motion.img
            src={notes}
            alt="Notes"
            className="rounded-lg w-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
            <h1 className="mt-1 text-xl font-bold ">Software Enginnering</h1>
          {/* View Notes Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="mt-4 border-2 border-red-600 px-5 py-2 rounded-lg bg-gray-800 text-white font-semibold transition duration-300 hover:bg-red-700"
            onClick={() => navigate("/view-notes")}
          >
            View Notes
          </motion.button>
        </motion.div>
      </div>
    </>
  );
};

export default Notes;
