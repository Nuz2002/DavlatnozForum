import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0C172C] text-white py-6">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="text-yellow-400 text-lg font-bold mb-4 md:mb-0">
          DavlatnozForum
        </div>

        <div className="flex flex-wrap justify-center space-x-6 text-sm mb-4 md:mb-0">
          <Link to="/about" className="hover:text-yellow-400 transition duration-300">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-yellow-400 transition duration-300">
            Contact Us
          </Link>
          <Link to="/terms" className="hover:text-yellow-400 transition duration-300">
            Terms of Service
          </Link>
          <Link to="/privacy" className="hover:text-yellow-400 transition duration-300">
            Privacy Policy
          </Link>
        </div>

        <div className="flex flex-col items-center md:items-end space-y-2 text-sm">
          <div className="flex items-center">
            <FaEnvelope className="text-yellow-400 mr-2" />
            <span>support@davlatnozforum.com</span>
          </div>
          <div className="flex items-center">
            <FaPhone className="text-yellow-400 mr-2" />
            <span>+123 456 7890</span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-yellow-400 mr-2" />
            <span>123 Forum St, Community City</span>
          </div>
        </div>
      </div>

      <div className="text-center text-xs mt-6 border-t border-gray-600 pt-4">
        &copy; {new Date().getFullYear()} DavlatnozForum. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
