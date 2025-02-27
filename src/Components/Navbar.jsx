import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaNewspaper, FaEnvelope, FaUserTie, FaCaretDown } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-[#0C172C] shadow-md p-4 relative z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="text-yellow-400 text-2xl font-bold">
          <Link to="/">DavlatnozForum</Link>
        </div>

        <div className="flex space-x-8">
          <Link
            to="/home"
            className="flex items-center text-white text-lg hover:text-yellow-400 transition duration-300"
          >
            <FaHome className="mr-2" />
            Home
          </Link>

          <Link
            to="/publications"
            className="flex items-center text-white text-lg hover:text-yellow-400 transition duration-300"
          >
            <FaNewspaper className="mr-2" />
            Publications
          </Link>

          <Link
            to="/messages"
            className="flex items-center text-white text-lg hover:text-yellow-400 transition duration-300"
          >
            <FaEnvelope className="mr-2" />
            Messages
          </Link>

          <Link
            to="/experts"
            className="flex items-center text-white text-lg hover:text-yellow-400 transition duration-300"
          >
            <FaUserTie className="mr-2" />
            Experts
          </Link>
        </div>

        <div className="flex items-center space-x-6 relative" ref={dropdownRef}>
          {!isAuthenticated ? (
            <>
              <Link
                to="/login"
                className="text-white text-sm font-semibold hover:text-yellow-400 transition duration-300"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-white text-sm font-semibold hover:text-yellow-400 transition duration-300"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="relative">
              <button
                onClick={handleDropdownToggle}
                className="flex items-center text-white hover:text-yellow-400 transition duration-300"
              >
                <span className="mr-2">Account</span>
                <FaCaretDown />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg  py-1 z-50">
                  <Link
                    to="/profile-settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Profile Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;