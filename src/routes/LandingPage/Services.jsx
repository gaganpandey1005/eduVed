import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  
  const data = [
    {
      title: "Notes",
      description: "Get Rgpv Btech Topper's Notes",
      icon: "https://topperworld.in/media/elementor/thumbs/Topperworld-notes-qjm1nqvfjjnan9o9wrly83e1sn8ogmaj2sdn49jf44.png",
      click: "/study-material"
    },
    {
      title: "PYQs",
      description: "Get Chapter Wise Previous Year Questions",
      icon: "https://topperworld.in/media/elementor/thumbs/paper-qjm1nwigojv0kxg2zu1pn1ytcygvqswx3kajzxb22s.png",
      click: "/study-material"
    },
    {
      title: "Book store",
      description: "Get books from the best authors",
      icon: "https://topperworld.in/media/elementor/thumbs/Topperworld-ebooks-qjm1o17nmq1g6z998e2uhis4bvtptafks7jzeb437o.png",
      click: "/books",
    },
    {
      title: "Syllabus",
      description: "Get Rgpv syllabus",
      icon: "https://topperworld.in/media/elementor/thumbs/checklist-1-qjm1nye527xl85dcouuys1hqjq7m674drtliyh89qc.png",
      click: "/syllabus"
    },
  ];

  const premiumData = [
    {
      title: "Quiz",
      description: "Get Rgpv Btech Chapter Wise Quiz",
      icon: "../src/assets/images/Quiz.png",
      click: "/quiz"
    },
    {
      title: "Pyq-Answer",
      description: "Get Chapter Wise Previous Year Questions Answer",
      icon: "../src/assets/images/pyq.png",
      click: "/study-material"
    },
  ];

  return (
    <div className="px-4 py-16 max-w-7xl mx-auto">
      {/* Free Services Section */}
      <div className="mb-24">
        <h1 className="text-4xl font-bold text-center mb-12 g-text shine">Our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-[rgb(20,21,21)] rounded-2xl shadow-md hover:shadow-blue-600 transition-all duration-300 flex flex-col items-center text-center p-6 border border-gray-800 h-full"
            >
              <div className="bg-black bg-opacity-50 p-4 rounded-full mb-6">
                <img
                  className="h-20 w-20 hover:-translate-y-2 transform transition-transform duration-300"
                  src={item.icon}
                  alt={item.title}
                />
              </div>
              <h2 className="text-blue-500 text-2xl font-bold mb-3">{item.title}</h2>
              <p className="text-gray-300 mb-6 flex-grow">{item.description}</p>
              <button 
                className="mt-auto bg-gradient-to-r from-blue-600 to-blue-800 text-white px-5 py-2 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-blue-600/50 w-full"
                onClick={() => item.click && navigate(item.click)}
              >
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Features Section */}
      <div className="mb-20">
        <h1 className="text-4xl font-bold text-center mb-12 " style={{ color: 'gold' }}>
          Premium Features
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {premiumData.map((item, index) => (
            <div
              key={index}
              className="bg-[rgb(20,21,21)] rounded-2xl shadow-md hover:shadow-yellow-400 transition-all duration-300 flex flex-col items-center text-center p-6 border border-gray-800 h-full"
            >
              <div className="bg-black bg-opacity-50 p-4 rounded-full mb-6">
                <img
                  className="h-20 w-20 hover:-translate-y-2 transform transition-transform duration-300"
                  src={item.icon}
                  alt={item.title}
                />
              </div>
              <h2 className="text-yellow-400 text-2xl font-bold mb-3">{item.title}</h2>
              <p className="text-gray-300 mb-6 flex-grow">{item.description}</p>
              <button 
                className="mt-auto bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-medium px-5 py-2 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-yellow-400/50 w-full"
                onClick={() => item.click && navigate(item.click)}
              >
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

      
    </div>
  );
};

export default Services;