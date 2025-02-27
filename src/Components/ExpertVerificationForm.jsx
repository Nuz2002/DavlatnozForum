import React from "react";

const ExpertVerificationForm = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Expert Verification Application
        </h2>

        {submitted ? (
          <div className="text-center p-8 bg-blue-50 dark:bg-gray-700 rounded-lg">
            <svg className="mx-auto h-12 w-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
              Application Submitted!
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Our team will review your documents and get back to you within 3-5 business days.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Profile Photo
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col w-full cursor-pointer">
                    <div className="px-4 py-2 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-500 transition-colors text-center">
                      <span className="text-blue-600 dark:text-blue-400">Upload Photo</span>
                      <span className="block text-xs text-gray-500 dark:text-gray-400">JPEG or PNG, max 2MB</span>
                      <input type="file" accept="image/*" className="hidden" required />
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Short Bio (100 words max)
              </label>
              <textarea
                rows={4}
                maxLength={100}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Passport/ID Document
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col w-full cursor-pointer">
                    <div className="px-4 py-2 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-500 transition-colors text-center">
                      <span className="text-blue-600 dark:text-blue-400">Upload PDF/Image</span>
                      <span className="block text-xs text-gray-500 dark:text-gray-400">Max 5MB</span>
                      <input type="file" accept=".pdf,.jpg,.png" className="hidden" required />
                    </div>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Qualification Document
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col w-full cursor-pointer">
                    <div className="px-4 py-2 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-500 transition-colors text-center">
                      <span className="text-blue-600 dark:text-blue-400">Upload PDF/Image</span>
                      <span className="block text-xs text-gray-500 dark:text-gray-400">Max 5MB</span>
                      <input type="file" accept=".pdf,.jpg,.png" className="hidden" required />
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Submit Application
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ExpertVerificationForm;