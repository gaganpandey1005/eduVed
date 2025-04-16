/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const About = () => {
  const teamMembers = [
    { name: "Student Name", role: "Role", image: "/path-to-team-image1.jpg" },
    { name: "Student Name", role: "Role", image: "/path-to-team-image2.jpg" },
    { name: "Student Name", role: "Role", image: "/path-to-team-image3.jpg" },
    { name: "Student Name", role: "Role", image: "/path-to-team-image4.jpg" },
  ];

  const offerings = [
    {
      title: "📚 Study Materials",
      description:
        "Well-organized class notes and reference materials for students.",
    },
    {
      title: "📖 Previous Year Papers",
      description: "Access past exam papers to enhance your preparation.",
    },
    {
      title: "🔄 Book Exchange",
      description:
        "A platform to exchange academic books within the student community.",
    },
    {
      title: "📂 Clear and Simple Learning",
      description: "Simple notes with diagrams make tough topics easy to understand.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 text-[--color-text] bg-gradient-to-b from-transparent to-[#0c0c0c]">
      {/* Hero Section - Updated with gradient background */}
      <motion.section
        className="flex flex-col md:flex-row items-center gap-12 mb-24"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Side Image - Added card effect */}
        <motion.div
          className="md:w-1/2"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="bg-[#141515] p-3 rounded-2xl shadow-xl overflow-hidden">
            <img
              src="/src/assets/images/books.png"
              alt="Edu Ved Learning Platform"
              className="w-full rounded-xl object-cover"
            />
          </div>
        </motion.div>

        {/* Right Side Text - Updated with decorative elements */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-300">
              Our Mission
            </h1>
            <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-indigo-400 opacity-60"></div>
          </div>
          <p className="text-xl mt-4 leading-relaxed">
            Edu Ved is committed to making education{" "}
            <span className="font-semibold text-cyan-300">accessible, structured, and efficient</span>. Our platform
            provides a seamless way for students to access study materials,
            collaborate, and enhance their learning experience.
          </p>
        </motion.div>
      </motion.section>

      {/* Founding Story - Reversed layout with curved design */}
      <motion.section
        className="flex flex-col md:flex-row items-center gap-12 mb-24 relative"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Decorative background element */}
        <div className="absolute -z-10 right-0 top-1/2 transform -translate-y-1/2 w-3/4 h-80 bg-gradient-to-r from-transparent to-indigo-900/10 blur-3xl rounded-full"></div>

        {/* Left Side Text */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-indigo-400">
              Founding Story
            </h2>
            <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-cyan-300 opacity-60"></div>
          </div>
          <p className="text-xl mt-4 leading-relaxed">
            Edu Ved was created with the vision to{" "}
            <span className="font-semibold text-indigo-400">simplify academic learning</span> by eliminating the
            hassle of searching for study materials. By leveraging technology,
            we ensure that students have direct access to structured resources,
            making their academic journey smoother and more efficient.
          </p>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          className="md:w-1/2"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="bg-[#141515] p-3 rounded-2xl shadow-xl overflow-hidden">
            <img
              src="/src/assets/images/bookImg.png"
              alt="Edu Ved Learning Platform"
              className="w-full rounded-xl object-cover"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* What We Offer - Modernized cards with gradients */}
      <section className="mb-24 mt-12">
        <div className="relative text-center mb-12">
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-indigo-400">
            What We Offer
          </h2>
          <div className="mx-auto mt-2 w-24 h-1 bg-gradient-to-r from-cyan-300 to-indigo-400"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#141515] to-[#1c1c1e] p-6 rounded-xl shadow-lg border border-gray-800 hover:border-indigo-500/30 transition-all duration-300"
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 10px 25px -5px rgba(66, 153, 225, 0.1)"
              }}
            >
              <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                {offering.title}
              </h3>
              <p className="text-lg mt-3 text-gray-300">{offering.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Meet Our Team - Circular frames with gradient borders */}
      <section>
        <div className="relative text-center mb-12">
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-300">
            Meet Our Team
          </h2>
          <div className="mx-auto mt-2 w-24 h-1 bg-gradient-to-r from-indigo-400 to-cyan-300"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#141515] to-[#1c1c1e] p-6 rounded-xl shadow-lg flex flex-col items-center"
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-1 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-24 h-24 rounded-full object-cover bg-[#141515]"
                />
              </div>
              <h3 className="mt-4 font-semibold text-xl">{member.name}</h3>
              <p className="text-gray-300">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;