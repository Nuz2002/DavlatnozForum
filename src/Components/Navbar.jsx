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
    <nav className="bg-blue-900 shadow-lg p-4 relative z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold tracking-wide">
          <Link to="/" className="hover:text-teal-400 transition-colors duration-200">
            DavlatnozForum
          </Link>
        </div>

        <div className="flex space-x-8">
          <Link
            to="/home"
            className="flex items-center text-white text-lg hover:text-teal-400 transition-colors duration-200"
          >
            <FaHome className="mr-2 text-current" />
            Home
          </Link>

          <Link
            to="/publications"
            className="flex items-center text-white text-lg hover:text-teal-400 transition-colors duration-200"
          >
            <FaNewspaper className="mr-2" />
            Publications
          </Link>

          <Link
            to="/messages"
            className="flex items-center text-white text-lg hover:text-teal-400 transition-colors duration-200"
          >
            <FaEnvelope className="mr-2" />
            Messages
          </Link>

          <Link
            to="/experts"
            className="flex items-center text-white text-lg hover:text-teal-400 transition-colors duration-200"
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
                className="text-white text-sm font-semibold hover:text-teal-400 transition-colors duration-200"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-white text-sm font-semibold hover:text-teal-400 transition-colors duration-200"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="relative">
              <button
                onClick={handleDropdownToggle}
                className="flex items-center text-white hover:text-teal-400 transition-colors duration-200"
              >
                <span className="mr-2">Account</span>
                <FaCaretDown className={`transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50 border border-blue-100">
                  <Link
                    to="/profile-settings"
                    className="block px-4 py-2.5 text-sm text-blue-900 hover:bg-blue-50 hover:text-teal-600 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Profile Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2.5 text-sm text-blue-900 hover:bg-blue-50 hover:text-teal-600 transition-colors"
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