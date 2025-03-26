import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { resetPassword } from "../api-calls/authApi"; // adjust path if needed

const ResetPassword = () => {
  // Grab the token from the URL query string, e.g. ?token=abc123
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // For onChange validation (length check)
  const [passwordLengthError, setPasswordLengthError] = useState("");

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (newPassword.length < 6) {
      setPasswordLengthError("Password must be at least 6 characters");
    } else {
      setPasswordLengthError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    // Final checks
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
    if (!token) {
      setErrorMessage("Invalid or missing reset token");
      return;
    }

    try {
      // The backend expects { token, newPassword: password }
      const response = await resetPassword({ token, newPassword: password });
      setSuccessMessage(response?.message || "Password has been reset successfully!");
      // Clear fields
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error(error);
      const message = error?.response?.data?.message || "Something went wrong. Please try again.";
      setErrorMessage(message);
    }
  };

  return (
    <div className="font-[sans-serif] bg-gradient-to-br from-blue-50 to-blue-100 md:h-screen">
      <div className="grid md:grid-cols-2 items-center gap-8 h-full">
        <div className="max-md:order-1 p-4 hidden sm:block">
          <img
            src="/images/password-reset-img.webp"
            className="lg:max-w-[85%] w-full h-full aspect-square object-contain block mx-auto"
            alt="reset-password"
          />
        </div>

        <div className="flex items-center md:p-8 p-6 bg-white h-full lg:w-11/12 lg:ml-auto shadow-xl rounded-l-2xl">
          <form onSubmit={handleSubmit} className="max-w-lg w-full mx-auto">
            <div className="mb-12 text-center">
              <h3 className="text-3xl font-bold text-blue-900 mb-2">Reset Password</h3>
              <FaLock className="text-blue-600 text-4xl mx-auto mt-4" />
              <p className="text-gray-600 mt-4">Create your new password</p>
            </div>

            {errorMessage && (
              <div className="text-red-500 mb-4 text-sm">
                {errorMessage}
              </div>
            )}

            {successMessage && (
              <div className="text-green-600 mb-4 text-sm">
                {successMessage}
              </div>
            )}

            <div className="mb-8">
              <label className="text-blue-900 text-sm font-medium block mb-2">New Password</label>
              <input
                type="password"
                required
                className="w-full text-sm text-blue-900 border-b-2 border-blue-100 focus:border-blue-500 pl-2 pr-8 py-3 outline-none transition-colors"
                placeholder="••••••••"
                value={password}
                onChange={handlePasswordChange}
              />
              {passwordLengthError && (
                <p className="text-red-500 text-xs mt-1">{passwordLengthError}</p>
              )}
            </div>

            <div className="mb-8">
              <label className="text-blue-900 text-sm font-medium block mb-2">Confirm Password</label>
              <input
                type="password"
                required
                className="w-full text-sm text-blue-900 border-b-2 border-blue-100 focus:border-blue-500 pl-2 pr-8 py-3 outline-none transition-colors"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 px-6 text-sm font-semibold rounded-lg focus:outline-none bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-md"
              >
                Reset Password
              </button>
              <p className="text-center text-blue-900 mt-8 text-sm">
                Remembered your password?{" "}
                <Link 
                  to="/login" 
                  className="text-teal-600 font-semibold hover:text-teal-700 transition-colors"
                >
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

export default ResetPassword;
