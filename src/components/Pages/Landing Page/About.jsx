

const About = () => {
  const teamMembers = [
    { name: "Student Name", role: "Role", image: "/path-to-team-image1.jpg" },
    { name: "Student Name", role: "Role", image: "/path-to-team-image2.jpg" },
    { name: "Student Name", role: "Role", image: "/path-to-team-image3.jpg" },
    { name: "Student Name", role: "Role", image: "/path-to-team-image4.jpg" },
  ];

  const offerings = [
    { title: "📚 Study Materials", description: "Well-organized class notes and reference materials for students." },
    { title: "📖 Previous Year Papers", description: "Access past exam papers to enhance your preparation." },
    { title: "🔄 Book Exchange", description: "A platform to exchange academic books within the student community." },
    { title: "📂 Project Repository", description: "A secure and categorized collection of academic projects." },
  ];

  return (
    <div className="container mx-auto px-16 py-12 text[--color-text]">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-10 ">
        {/* Left Side Image */}
        <div className="md:w-1/2">
          <img
            src="/src/assets/images/books.png"
            alt="Edu Ved Learning Platform"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side Text */}
        <div className="md:w-1/2">
          <h1 className="shine" >Our Mission</h1>
          <p className="text-lg mt-4 leading-relaxed">
            Edu Ved is committed to making education <strong>accessible, structured, and efficient</strong>. 
            Our platform provides a seamless way for students to access study materials, collaborate, 
            and enhance their learning experience.
          </p>
        </div>
      </section>

      {/* Founding Story */}
      <section className="flex flex-col md:flex-row items-center gap-10 ">
        {/* Left Side Text */}
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold shine">Founding Story</h2>
        <p className="text-lg mt-4">
          Edu Ved was created with the vision to <strong className=" leading-relaxedstrong">simplify academic learning</strong> by eliminating the hassle of searching 
          for study materials. By leveraging technology, we ensure that students have direct access to structured resources, 
          making their academic journey smoother and more efficient.
        </p>
      </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 ">
          <img
            src="/src/assets/images/bookImg.png"
            alt="Edu Ved Learning Platform"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* What We Offer */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold shine">What We Offer</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {offerings.map((offering, index) => (
            <div key={index} className="bg-[#141515] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold ">{offering.title}</h3>
              <p className="text-lg mt-2 ">{offering.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet Our Team */}
      <section>
        <h2 className="shine text-center mb-16">Meet Our Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-[#141515]  shadow-md rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
              <img 
                src={member.image} 
                alt={`${member.name} - ${member.role}`} 
                className="w-24 h-24 mx-auto rounded-full object-cover border-2 border-gray-200" 
              />
              <h3 className="mt-3 font-semibold text-lg ">{member.name}</h3>
              <p className="">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;