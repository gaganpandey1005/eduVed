
import gif from "../assets/images/dribbble-1-unscreen.gif";


const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black font-serif">
      <div className="text-center max-w-lg p-4">
          <h1 className="text-7xl font-extrabold text-white z-10">404</h1>
        <div className="relative h-96 flex items-center justify-center rounded-2xl shadow-lg overflow-hidden">
          {/* GIF Background */}
          <img
            src={gif}
            alt="404 Animation"
            className="absolute z-100 inset-0 w-full h-full object-cover opacity-100"
          />
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="mt-[-50px] text-white">
          <h2 className="text-3xl font-bold">Oops! You seem lost.</h2>
          <p className="text-lg mt-2">
            The page you are looking for doesnt exist or has been moved.
          </p>
          <a
            href="/"
            className="inline-block mt-6 px-8 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out"
          >
            Go to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
