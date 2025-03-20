import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaNewspaper, FaEnvelope, FaUserTie, FaCaretDown, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
      setIsMobileMenuOpen(false);
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
        {/* Logo and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <button
            onClick={handleMobileMenuToggle}
            className="md:hidden text-white hover:text-teal-400 transition-colors duration-200"
          >
            {isMobileMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
          <Link to="/" className="text-white text-xl md:text-2xl font-bold tracking-wide hover:text-teal-400 transition-colors duration-200">
            DavlatnozForum
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          <Link
            to="/home"
            className="flex items-center text-white text-base lg:text-lg hover:text-teal-400 transition-colors duration-200"
          >
            <FaHome className="mr-2" />
            Home
          </Link>

          <Link
            to="/publications"
            className="flex items-center text-white text-base lg:text-lg hover:text-teal-400 transition-colors duration-200"
          >
            <FaNewspaper className="mr-2" />
            Publications
          </Link>

          <Link
            to="/messages"
            className="flex items-center text-white text-base lg:text-lg hover:text-teal-400 transition-colors duration-200"
          >
            <FaEnvelope className="mr-2" />
            Messages
          </Link>

          <Link
            to="/experts"
            className="flex items-center text-white text-base lg:text-lg hover:text-teal-400 transition-colors duration-200"
          >
            <FaUserTie className="mr-2" />
            Experts
          </Link>
        </div>

        {/* Desktop Auth Section */}
        <div className="hidden md:flex items-center space-x-6 relative" ref={dropdownRef}>
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div ref={mobileMenuRef} className="md:hidden absolute top-full left-0 right-0 bg-blue-900 shadow-lg py-4 px-6 space-y-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/home"
                className="flex items-center text-white hover:text-teal-400 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaHome className="mr-3" />
                Home
              </Link>

              <Link
                to="/publications"
                className="flex items-center text-white hover:text-teal-400 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaNewspaper className="mr-3" />
                Publications
              </Link>

              <Link
                to="/messages"
                className="flex items-center text-white hover:text-teal-400 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaEnvelope className="mr-3" />
                Messages
              </Link>

              <Link
                to="/experts"
                className="flex items-center text-white hover:text-teal-400 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaUserTie className="mr-3" />
                Experts
              </Link>
            </div>

            <div className="pt-4 border-t border-blue-700">
              {!isAuthenticated ? (
                <div className="flex flex-col space-y-3">
                  <Link
                    to="/login"
                    className="text-white text-center py-2 hover:text-teal-400 transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="bg-teal-600 text-white rounded-lg py-2 px-4 hover:bg-teal-700 transition-colors duration-200 text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Register
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col space-y-3">
                  <Link
                    to="/profile-settings"
                    className="text-white hover:text-teal-400 transition-colors duration-200 text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Profile Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-white hover:text-teal-400 transition-colors duration-200"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;