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
    <div className="container mx-auto px-6 py-12 text-[--color-text]">
      {/* Hero Section */}
      <motion.section
        className="flex flex-col md:flex-row items-center gap-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Side Image */}
        <motion.div
          className="md:w-1/2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src="/src/assets/images/books.png"
            alt="Edu Ved Learning Platform"
            className="w-11/12 rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Right Side Text */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="shine text-4xl font-bold">Our Mission</h1>
          <p className="text-lg mt-4 leading-relaxed">
            Edu Ved is committed to making education{" "}
            <strong>accessible, structured, and efficient</strong>. Our platform
            provides a seamless way for students to access study materials,
            collaborate, and enhance their learning experience.
          </p>
        </motion.div>
      </motion.section>

      {/* Founding Story */}
      <motion.section
        className="flex flex-col md:flex-row items-center gap-10 mt-12"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Side Text */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold shine">Founding Story</h2>
          <p className="text-lg mt-4 leading-relaxed">
            Edu Ved was created with the vision to{" "}
            <strong>simplify academic learning</strong> by eliminating the
            hassle of searching for study materials. By leveraging technology,
            we ensure that students have direct access to structured resources,
            making their academic journey smoother and more efficient.
          </p>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          className="md:w-1/2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src="/src/assets/images/bookImg.png"
            alt="Edu Ved Learning Platform"
            className="w-11/12 rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.section>

      {/* What We Offer */}
      <section className="mb-20 mt-12">
        <h2 className="text-4xl font-bold shine text-center">What We Offer</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              className="bg-[#141515] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold">{offering.title}</h3>
              <p className="text-lg mt-2">{offering.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Meet Our Team */}
      <section>
        <h2 className="shine text-4xl font-bold text-center mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-[#141515] shadow-md rounded-lg p-4 text-center hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={member.image}
                alt={`${member.name} - ${member.role}`}
                className="w-20 h-20 mx-auto rounded-full object-cover border-2 border-gray-200"
              />
              <h3 className="mt-3 font-semibold text-lg">{member.name}</h3>
              <p>{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
