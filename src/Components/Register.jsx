import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    role: 'REGULAR',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // We'll track a separate passwordLengthError to show immediate feedback
  const [passwordLengthError, setPasswordLengthError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If the user is typing in the password field, check the length
    if (name === 'password') {
      if (value.trim().length > 0 && value.trim().length < 6) {
        setPasswordLengthError('Password must be at least 6 characters');
      } else {
        setPasswordLengthError('');
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    // Front-end validation: ensure password is >= 6 chars
    if (formData.password.trim().length < 6) {
      setErrorMessage('Password must be at least 6 characters.');
      return; // Don't attempt the request
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/auth/register`,
        {
          username: formData.username.trim(),
          email: formData.email.trim(),
          role: formData.role,
          password: formData.password.trim(),
        }
      );

      // The backend response might look like:
      // { message: "Email already in use" }
      // or { message: "Registration successful! Please verify your email..." }
      const { message } = response.data || {};

      if (!message) {
        setErrorMessage('No message received from server. Please try again.');
        return;
      }

      // If the message includes "successful", treat it as a success
      if (message.toLowerCase().includes('successful')) {
        setSuccessMessage(message);
        // Optionally redirect to login after a delay:
        // setTimeout(() => navigate('/login'), 2000);
      } else {
        // Show the exact message returned by the backend (e.g. "Username already taken", "Email already in use", etc.)
        setErrorMessage(message);
      }

    } catch (error) {
      // If there's an HTTP error (4xx, 5xx), we can often read a server-sent message
      if (error.response && error.response.data) {
        // e.g. { message: "Email already in use" }
        setErrorMessage(error.response.data.message || 'Registration failed.');
      } else {
        // A network error or server unreachable
        setErrorMessage('Network error or server is unavailable.');
      }
    }
  };

  return (
    <div className="font-[sans-serif] bg-gradient-to-br from-blue-50 to-blue-100 md:h-screen">
      <div className="grid md:grid-cols-2 items-center gap-8 h-full">
        <div className="max-md:order-1 p-4">
          <img
            src="/images/forum-icon.png"
            className="lg:max-w-[85%] w-full h-full aspect-square object-contain block mx-auto"
            alt="register-image"
          />
        </div>

        <div className="flex items-center md:p-8 p-6 bg-white h-full lg:w-11/12 lg:ml-auto shadow-xl rounded-l-2xl">
          <form onSubmit={handleSubmit} className="max-w-lg w-full mx-auto">
            <div className="mb-12 text-center">
              <h3 className="text-3xl font-bold text-blue-900 mb-2">Create Account</h3>
              <FaUserAlt className="text-blue-600 text-4xl mx-auto mt-4" />
              <p className="text-gray-600 mt-4">Create your account to get started</p>
            </div>

            {/* Error or Success Messages */}
            {errorMessage && (
              <div className="text-red-500 mb-4">
                {errorMessage}
              </div>
            )}
            {successMessage && (
              <div className="text-green-600 mb-4">
                {successMessage}
              </div>
            )}

            {/* USERNAME */}
            <div>
              <label className="text-blue-900 text-sm font-medium block mb-2">Username</label>
              <input
                name="username"
                type="text"
                required
                className="w-full text-sm text-blue-900 border-b-2 border-blue-100 focus:border-blue-500 pl-2 pr-8 py-3 outline-none transition-colors"
                placeholder="Enter username"
                value={formData.username}
                onChange={handleChange}
              />
              {formData.username && (
                <p className="text-sm text-gray-500 mt-2">
                  This username will be publicly visible to others
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div className="mt-8">
              <label className="text-blue-900 text-sm font-medium block mb-2">Email</label>
              <input
                name="email"
                type="email"
                required
                className="w-full text-sm text-blue-900 border-b-2 border-blue-100 focus:border-blue-500 pl-2 pr-8 py-3 outline-none transition-colors"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* ROLE */}
            <div className="mt-8">
              <label className="text-blue-900 text-sm font-medium block mb-2">Role</label>
              <select
                name="role"
                required
                className="w-full text-sm text-blue-900 border-b-2 border-blue-100 focus:border-blue-500 pl-2 pr-8 py-3 outline-none transition-colors bg-white"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="REGULAR">Regular User</option>
                <option value="SPECIALIST">Expert</option>
              </select>
            </div>

            {/* PASSWORD */}
            <div className="mt-8">
              <label className="text-blue-900 text-sm font-medium block mb-2">Password</label>
              <input
                name="password"
                type="password"
                required
                className="w-full text-sm text-blue-900 border-b-2 border-blue-100 focus:border-blue-500 pl-2 pr-8 py-3 outline-none transition-colors"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
              />
              {/* Real-time error if password < 6 */}
              {passwordLengthError && (
                <p className="text-red-500 text-sm mt-2">{passwordLengthError}</p>
              )}
            </div>

            {/* SUBMIT */}
            <div className="mt-8">
              <button
                type="submit"
                // Disable the button if the password is too short
                disabled={formData.password.trim().length < 6}
                className="w-full py-3 px-6 text-sm font-semibold rounded-lg focus:outline-none transition-colors shadow-md bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white"
              >
                Register
              </button>
              <p className="text-center text-blue-900 mt-8">
                Already have an account?{' '}
                <Link to="/login" className="text-teal-600 font-semibold hover:text-teal-700 transition-colors">
                  Login here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
