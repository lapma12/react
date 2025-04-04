import { Link } from "react-router-dom";
import "../Styles/NotFound.css";

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6 not-found-container">
            <h1 className="text-6xl font-bold text-red-500 mb-4 error-code">404</h1>
            <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
            <p className="text-gray-400 mb-6 text-center error-message">
                Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg home-button">
                    Go Back Home
                </button>
            </Link>
        </div>
    );
};

export default NotFound;
