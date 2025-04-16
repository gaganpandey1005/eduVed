/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Cards from "../../components/Cards";
import apirequest from "../../utils/lib/apiRequest";

const Chapter = () => {
  const { department, semester, subject } = useParams();
  const [notesData, setNotesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("notes");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await apirequest.get(
          `/chapter/getNotes?department=${department}&semester=${semester}&subjectName=${subject}`
        );
        
        if (response.data && Array.isArray(response.data.notes)) {
          setNotesData(response.data.notes);
        } else {
          setNotesData([]);
        }
        setError(null);
      } catch (error) {
        console.error("Error fetching notes:", error);
        setError("Failed to load data. Please try again later.");
        setNotesData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [department, semester, subject]);

  // Skeleton loader for loading state
  const SkeletonLoader = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div key={item} className="bg-gray-800 rounded-xl p-4 animate-pulse">
          <div className="w-full h-40 bg-gray-700 rounded-lg mb-4"></div>
          <div className="h-6 bg-gray-700 rounded w-2/3 mb-2"></div>
          <div className="h-4 bg-gray-700 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );

  // Empty state component
  const EmptyState = ({ type }) => (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="bg-gray-800 rounded-full p-6 mb-4">
        <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      </div>
      <h3 className="text-xl font-medium text-gray-300">No {type} Available</h3>
      <p className="text-gray-500 mt-2 max-w-md">
        We do not have any {type} for this subject yet. Check back later or select a different subject.
      </p>
    </div>
  );

  // Error state component
  const ErrorState = () => (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="bg-red-900/30 rounded-full p-6 mb-4">
        <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </div>
      <h3 className="text-xl font-medium text-red-400">Something Went Wrong</h3>
      <p className="text-gray-400 mt-2 max-w-md">{error}</p>
      <button 
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        onClick={() => window.location.reload()}
      >
        Try Again
      </button>
    </div>
  );

  return (
    <div className="min-h-screen  py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="/departments" className="text-gray-400 hover:text-blue-400">
                  Departments
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <Link to={`/select-sem/${department}`} className="text-gray-400 hover:text-blue-400 ml-1 md:ml-2">
                    {department}
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <Link to={`/subjects/${department}/${semester}`} className="text-gray-400 hover:text-blue-400 ml-1 md:ml-2">
                    Semester {semester}
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-blue-400 ml-1 md:ml-2 font-medium">
                    {subject.toUpperCase()}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* Subject Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-3">
            {subject.toUpperCase()}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full text-sm">
              {department.toUpperCase()}
            </span>
            <span className="bg-purple-900/30 text-purple-400 px-3 py-1 rounded-full text-sm">
              Semester {semester}
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="bg-gray-800 rounded-full p-1 shadow-lg">
            <div className="flex space-x-1">
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === "notes"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveTab("notes")}
              >
                Notes
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === "pyq"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveTab("pyq")}
              >
                Previous Year Questions
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="mb-20">
          {error ? (
            <ErrorState />
          ) : loading ? (
            <SkeletonLoader />
          ) : (
            <>
              {activeTab === "notes" && (
                <>
                  {notesData.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      {notesData.map((item, index) => (
                        <div 
                          key={index}
                          className="transform transition-all duration-300 hover:scale-105"
                        >
                          <Cards
                            title={`Chapter ${item.chapterNo}`}
                            image={"/src/assets/images/note.png"}
                            link={item.notesPdf}
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <EmptyState type="notes" />
                  )}
                </>
              )}

              {activeTab === "pyq" && (
                <>
                  {notesData.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      {notesData.map((item, index) => (
                        <div 
                          key={index}
                          className="transform transition-all duration-300 hover:scale-105"
                        >
                          <Cards
                            title={`Chapter ${item.chapterNo} PYQ`}
                            image={"/src/assets/images/note.png"}
                            link={item.notesPdf}
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <EmptyState type="previous year questions" />
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chapter;