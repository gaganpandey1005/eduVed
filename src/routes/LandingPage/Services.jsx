
const Services = () => {
  const data = [
    {
      title: "Notes",
      description: "Get Rgpv Btech Topper's Notes",
      icon: "https://topperworld.in/media/elementor/thumbs/Topperworld-notes-qjm1nqvfjjnan9o9wrly83e1sn8ogmaj2sdn49jf44.png",
    },
    {
      title: "PYQs",
      description: "Get Chapter Wise Previous Year Questions",
      icon: "https://topperworld.in/media/elementor/thumbs/paper-qjm1nwigojv0kxg2zu1pn1ytcygvqswx3kajzxb22s.png",
    },
    {
      title: "Book Exchanger",
      description: "Get books from the best authors",
      icon: "https://topperworld.in/media/elementor/thumbs/Topperworld-ebooks-qjm1o17nmq1g6z998e2uhis4bvtptafks7jzeb437o.png",
    },
    {
      title: "Syllabus",
      description: "Get Rgpv syllabus",
      icon: "https://topperworld.in/media/elementor/thumbs/checklist-1-qjm1nye527xl85dcouuys1hqjq7m674drtliyh89qc.png",
    },
  ];

  const premiumData = [
    {
      title: "Quiz",
      description: "Get Rgpv Btech Chapter Wise Quiz",
      icon: "../src/assets/images/Quiz.png",
    },
    {
      title: "Pyq-Answer",
      description: "Get Chapter Wise Previous Year Questions Answer",
      icon: "../src/assets/images/pyq.png",
    },
  ];

  return (
    <div className="px-4 py-8 ">
      <h1 className="text-3xl font-bold text-center mb-20 g-text ">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[rgb(20,21,21)] rounded-2xl shadow-sm hover:shadow-blue-600 transition-shadow duration-300 flex flex-col items-center text-center p-6"
          >
            <img
              className="h-20 w-20 hover:-translate-y-2 transform transition-transform duration-300 mb-4"
              src={item.icon}
              alt={item.title}
            />
            <h2 className="text-blue-600 text-2xl font-bold mb-2">{item.title}</h2>
            <p className="text-gray-300 mb-4">{item.description}</p>
            <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Explore
            </button>
          </div>
        ))}
      </div>

      

      <h1 className="text-3xl font-bold text-center mt-20 mb-20" style={{ color: 'gold' }}>
        Premium Features
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {premiumData.map((item, index) => (
          <div
            key={index}
            className="bg-[rgb(20,21,21)] rounded-2xl shadow-sm hover:shadow-yellow-400 transition-shadow duration-300 flex flex-col items-center text-center p-6"
          >
            <img
              className="h-20 w-20 hover:-translate-y-2 transform transition-transform duration-300 mb-4"
              src={item.icon}
              alt={item.title}
            />
            <h2 className="text-yellow-400 text-2xl font-bold mb-2">{item.title}</h2>
            <p className="text-gray-300 mb-4">{item.description}</p>
            <button className="mt-auto bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors duration-200">
              Explore
            </button>
          </div>
        ))}
           <div className="mt-16 text-center">
        <h1 className="text-3xl font-bold mb-4" style={{ color: 'gold' }}>
          Upgrade to Premium Today
        </h1>
        <p className="text-lg mb-6 text-gray-200">
          Get access to all premium features and unlock your full potential
        </p>
        <button className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-600 transition-colors duration-200">
          Get Premium Access
        </button>
      </div>
      </div>

   
    </div>
    
  );
};

export default Services;
