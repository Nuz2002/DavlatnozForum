import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    role: 'user',
    password: '',
    acceptedTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.acceptedTerms) {
      alert('You must accept the Terms and Conditions to register.');
      return;
    }
    console.log(formData);
  };

  return (
    <div className="font-[sans-serif] bg-gradient-to-br from-blue-50 to-blue-100 md:h-screen">
      <div className="grid md:grid-cols-2 items-center gap-8 h-full">
        <div className="max-md:order-1 p-4">
          <img
            src="/images/forum-icon.png"
            className="lg:max-w-[85%] w-full h-full aspect-square object-contain block mx-auto"
            alt="login-image"
          />
        </div>

        <div className="flex items-center md:p-8 p-6 bg-white h-full lg:w-11/12 lg:ml-auto shadow-xl rounded-l-2xl">
          <form onSubmit={handleSubmit} className="max-w-lg w-full mx-auto">
            <div className="mb-12 text-center">
              <h3 className="text-3xl font-bold text-blue-900 mb-2">Create Account</h3>
              <FaUserAlt className="text-blue-600 text-4xl mx-auto mt-4" />
              <p className="text-gray-600 mt-4">Create your account to get started</p>
            </div>

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
            </div>

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

            <div className="mt-8">
              <label className="text-blue-900 text-sm font-medium block mb-2">Role</label>
              <select
                name="role"
                required
                className="w-full text-sm text-blue-900 border-b-2 border-blue-100 focus:border-blue-500 pl-2 pr-8 py-3 outline-none transition-colors bg-white"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="user">Regular User</option>
                <option value="specialist">Specialist</option>
              </select>
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

            <div className="flex items-center mt-8">
              <input
                id="terms"
                name="acceptedTerms"
                type="checkbox"
                className="h-4 w-4 shrink-0 text-blue-600 border-2 border-blue-200 rounded focus:ring-blue-500 transition-colors"
                checked={formData.acceptedTerms}
                onChange={handleChange}
              />
              <label htmlFor="terms" className="text-blue-900 ml-3 block text-sm">
                I accept the{' '}
                <a href="#" className="text-teal-600 font-semibold hover:text-teal-700 transition-colors">
                  Terms and Conditions
                </a>
              </label>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                disabled={!formData.acceptedTerms}
                className={`w-full py-3 px-6 text-sm font-semibold rounded-lg focus:outline-none transition-colors shadow-md ${
                  formData.acceptedTerms
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-blue-200 text-blue-400 cursor-not-allowed'
                }`}
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