import { useState } from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic
  };

  return (
    <div className="font-[sans-serif] bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen flex items-start justify-center p-10 pt-16">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border-2 border-blue-100">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">Reset Password</h2>
          <p className="text-base text-blue-600">Create your new password</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-base font-medium text-blue-900 mb-2">
              New Password
            </label>
            <input
              type="password"
              required
              className="w-full px-4 py-3 text-base border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-teal-100 focus:border-teal-500 outline-none transition-all"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-base font-medium text-blue-900 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              required
              className="w-full px-4 py-3 text-base border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-teal-100 focus:border-teal-500 outline-none transition-all"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-6 text-base font-semibold rounded-lg transition-all 
                      bg-teal-600 hover:bg-teal-700 text-white 
                      shadow-md hover:shadow-lg
                      disabled:bg-gray-300 disabled:shadow-none"
          >
            Reset Password
          </button>
        </form>

        <p className="text-center text-blue-700 mt-6 text-base">
          Remembered your password?{" "}
          <Link 
            to="/login" 
            className="text-teal-600 font-semibold hover:text-teal-700 underline hover:no-underline transition-colors"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;