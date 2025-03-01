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
    <div className="font-[sans-serif] bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen flex items-start pt-16 justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border-2 border-blue-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-3">Reset Password</h2>
          <p className="text-base text-blue-600">
            Enter your email to receive a secure reset link
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-base font-medium text-blue-900 mb-2">
              Email Address
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 text-base border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-teal-100 focus:border-teal-500 outline-none transition-all"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-6 text-base font-semibold rounded-lg transition-all 
                      bg-teal-600 hover:bg-teal-700 text-white 
                      shadow-md hover:shadow-lg
                      disabled:bg-gray-300 disabled:shadow-none"
            disabled={!email.trim()}
          >
            Send Reset Link
          </button>
        </form>

        <p className="text-center text-blue-700 mt-6 text-base">
          Remember your password?{" "}
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

export default ForgotPassword;