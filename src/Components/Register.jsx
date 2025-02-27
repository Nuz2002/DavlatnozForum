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
              <h3 className="text-2xl font-bold text-yellow-400">Create an account</h3>
              <FaUserAlt className="text-yellow-400 text-4xl mx-auto mt-4" />
            </div>

            <div>
              <label className="text-white text-xs block mb-2">Username</label>
              <input
                name="username"
                type="text"
                required
                className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 pl-2 pr-8 py-3 outline-none"
                placeholder="Enter username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>

            <div className="mt-8">
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
              <label className="text-white text-xs block mb-2">Role</label>
              <select
                name="role"
                required
                className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 pl-2 pr-8 py-3 outline-none"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="user">Regular User</option>
                <option value="specialist">Specialist</option>
              </select>
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

            <div className="flex items-center mt-8">
              <input
                id="remember-me"
                name="acceptedTerms"
                type="checkbox"
                className="h-4 w-4 shrink-0 rounded"
                checked={formData.acceptedTerms}
                onChange={handleChange}
              />
              <label htmlFor="remember-me" className="text-white ml-3 block text-sm">
                I accept the{' '}
                <a href="#" className="text-yellow-500 font-semibold hover:underline ml-1">
                  Terms and Conditions
                </a>
              </label>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                disabled={!formData.acceptedTerms}
                className={`w-max shadow-xl py-3 px-6 text-sm font-semibold rounded focus:outline-none ${
                  formData.acceptedTerms
                    ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-800'
                    : 'bg-gray-500 text-gray-300 cursor-not-allowed'
                }`}
              >
                Register
              </button>
              <p className="text-sm text-white mt-8">
                Already have an account?{' '}
                <Link to="/login" className="text-yellow-400 font-semibold hover:underline ml-1">
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
