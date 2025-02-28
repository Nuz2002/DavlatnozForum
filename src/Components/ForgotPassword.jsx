import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    console.log("Password reset link sent to", email);
  };

  return (
    <div className="font-[sans-serif] bg-white md:h-screen flex items-center justify-center p-6">
      <div className="bg-[#0C172C] text-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-yellow-400 text-center">Forgot Password?</h2>
        <p className="text-sm text-gray-300 mt-2 text-center">
          Enter your email to receive a password reset link.
        </p>
        <form onSubmit={handleSubmit} className="mt-6">
          <label className="block mb-2 text-xs">Email</label>
          <input
            type="email"
            required
            className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 pl-2 pr-8 py-3 outline-none"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="mt-6 w-full shadow-xl py-3 px-6 text-sm font-semibold rounded focus:outline-none bg-yellow-400 hover:bg-yellow-500 text-gray-800 disabled:opacity-50"
            disabled={!email.trim()}
          >
            Reset Password
          </button>
        </form>
        <p className="text-sm text-white mt-6 text-center">
          Remembered your password? 
          <Link to="/login" className="text-yellow-400 font-semibold hover:underline ml-1">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
