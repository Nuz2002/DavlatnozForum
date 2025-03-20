import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear any previous error

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/auth/login`,
        {
          email: formData.email.trim(),
          password: formData.password.trim(),
        }
      );

      // Our new login response has "message", "accessToken", and "refreshToken"
      if (response.data && response.data.accessToken && response.data.refreshToken) {
        // Store tokens (for dev/demo, storing in localStorage; consider HttpOnly cookies in production)
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        
        // Mark user as logged in, or store other user info if needed
        localStorage.setItem('isLoggedIn', 'true');

        // Redirect upon success
        window.location.href = '/home';
      } else {
        // If tokens are missing, show an error
        setErrorMessage('Email or password incorrect.');
      }
    } catch (error) {
      // HTTP or validation error from the server
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message || 'Login failed. Please try again.');
      } else {
        setErrorMessage('Network error or server is unavailable.');
      }
    }
  };

  return (
    <div className="font-[sans-serif] bg-gradient-to-br from-blue-50 to-blue-100 md:h-screen">
      <div className="grid md:grid-cols-2 items-center gap-8 h-full">
        <div className="max-md:order-1 p-4 hidden sm:block">
          <img
            src="/images/forum-icon.png"
            className="lg:max-w-[85%] w-full h-full aspect-square object-contain block mx-auto"
            alt="login-image"
          />
        </div>

        <div className="flex items-center md:p-8 p-6 bg-white h-full lg:w-11/12 lg:ml-auto shadow-xl rounded-l-2xl">
          <form onSubmit={handleSubmit} className="max-w-lg w-full mx-auto">
            <div className="mb-12 text-center">
              <h3 className="text-3xl font-bold text-blue-900 mb-2">Welcome Back</h3>
              <FaSignInAlt className="text-blue-600 text-4xl mx-auto mt-4" />
              <p className="text-gray-600 mt-4">Sign in to continue to your account</p>
            </div>

            {errorMessage && (
              <div className="text-red-500 mb-4">
                {errorMessage}
              </div>
            )}

            <div>
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
            </div>

            <p className="text-sm text-blue-900 mt-4 hover:text-blue-600 transition-colors">
              <Link to="/forgot-password" className="font-medium">
                Forgot Password?
              </Link>
            </p>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full py-3 px-6 text-sm font-semibold rounded-lg focus:outline-none bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-md"
              >
                Login
              </button>
              <p className="text-center text-blue-900 mt-8">
                Don't have an account?{' '}
                <Link to="/register" className="text-teal-600 font-semibold hover:text-teal-700 transition-colors">
                  Register here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
