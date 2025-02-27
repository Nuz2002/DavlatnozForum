import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate authentication by setting isLoggedIn in localStorage
    localStorage.setItem('isLoggedIn', 'true');
    
    // Redirect to the home page after login (or any other page)
    window.location.href = '/home'; // You can use `Navigate` from `react-router-dom` as well
  };
  
  return (
    <div className="font-[sans-serif] bg-white md:h-screen">
      <div className="grid md:grid-cols-2 items-center gap-8 h-full">
        <div className="max-md:order-1 p-4">
          <img
            src="/images/forum-icon.png"
            className="lg:max-w-[85%] w-full h-full aspect-square object-contain block mx-auto"
            alt="login-image"
          />
        </div>

        <div className="flex items-center md:p-8 p-6 bg-[#0C172C] h-full lg:w-11/12 lg:ml-auto">
          <form onSubmit={handleSubmit} className="max-w-lg w-full mx-auto">
            <div className="mb-12 text-center">
              <h3 className="text-2xl font-bold text-yellow-400">Login to your account</h3>
              <FaSignInAlt className="text-yellow-400 text-4xl mx-auto mt-4" />
            </div>

            <div>
              <label className="text-white text-xs block mb-2">Email</label>
              <input
                name="email"
                type="email"
                required
                className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 pl-2 pr-8 py-3 outline-none"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mt-8">
              <label className="text-white text-xs block mb-2">Password</label>
              <input
                name="password"
                type="password"
                required
                className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 pl-2 pr-8 py-3 outline-none"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-max shadow-xl py-3 px-6 text-sm font-semibold rounded focus:outline-none bg-yellow-400 hover:bg-yellow-500 text-gray-800"
              >
                Login
              </button>
              <p className="text-sm text-white mt-8">
                Don't have an account?{' '}
                <Link to="/register" className="text-yellow-400 font-semibold hover:underline ml-1">
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
