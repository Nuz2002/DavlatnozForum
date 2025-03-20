import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const ExpertVerificationForm = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-blue-50 w-full flex flex-col md:flex-row gap-5 px-3 md:px-8 lg:px-16 xl:px-28 text-blue-900 min-h-screen">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        className="md:hidden p-3 bg-teal-600 text-white rounded-lg self-start mt-4"
      >
        {showMobileMenu ? 'Close Menu' : 'Settings Menu'}
      </button>

      {/* Sidebar Navigation */}
      <aside className={`${showMobileMenu ? 'block' : 'hidden'} md:block py-4 w-full md:w-1/3 lg:w-1/4`}>
        <div className="sticky flex flex-col gap-2 p-4 text-sm border-b md:border-r border-blue-100 top-12">
          <h2 className="pl-3 mb-4 text-xl md:text-2xl font-bold text-blue-900">Settings</h2>
          <NavLink
            to="/profile-settings"
            className={({ isActive }) => 
              `flex items-center px-4 py-3 font-medium rounded-xl transition-colors shadow-sm ${
                isActive 
                  ? 'bg-teal-600 text-white'
                  : 'text-blue-700 hover:bg-blue-50'
              }`
            }
            onClick={() => setShowMobileMenu(false)}
          >
            Public Profile
          </NavLink>
          <NavLink
            to="/become-expert"
            className={({ isActive }) => 
              `flex items-center px-4 py-3 font-medium rounded-xl transition-colors shadow-sm ${
                isActive 
                  ? 'bg-teal-600 text-white'
                  : 'text-blue-700 hover:bg-blue-50'
              }`
            }
            onClick={() => setShowMobileMenu(false)}
          >
            Get Verified
          </NavLink>
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <div className="p-2 md:p-4">
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-4 md:p-8 border border-blue-100">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-blue-900 border-b-2 border-blue-100 pb-3 md:pb-4">
              Expert Verification Application
            </h2>

            {submitted ? (
              <div className="text-center p-6 md:p-8 bg-blue-50 rounded-xl">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-teal-100 rounded-full mb-3 md:mb-4">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8 text-teal-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="mt-3 md:mt-4 text-lg md:text-xl font-semibold text-blue-900">
                  Application Submitted!
                </h3>
                <p className="mt-2 text-sm md:text-base text-blue-700">
                  Our team will review your documents and get back to you within 3-5 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-blue-900 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 md:px-4 md:py-3 border border-blue-200 rounded-lg bg-blue-50 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-blue-900 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 md:px-4 md:py-3 border border-blue-200 rounded-lg bg-blue-50 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-blue-900 mb-2">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full px-3 py-2 md:px-4 md:py-3 border border-blue-200 rounded-lg bg-blue-50 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-blue-900 mb-2">
                      Profile Photo
                    </label>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col w-full cursor-pointer group">
                        <div className="px-3 py-4 md:px-4 md:py-6 border-2 border-dashed border-blue-200 rounded-xl bg-blue-50 hover:border-teal-500 transition-colors group-hover:bg-white text-center">
                          <svg
                            className="mx-auto w-6 h-6 md:w-8 md:h-8 text-teal-600 mb-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <span className="text-sm md:text-base text-teal-600 font-medium">Upload Photo</span>
                          <span className="block text-xs text-blue-600 mt-1">
                            JPEG or PNG, max 2MB
                          </span>
                          <input type="file" accept="image/*" className="hidden" required />
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-2">
                    Professional Bio (100 words max)
                  </label>
                  <textarea
                    rows={3}
                    maxLength={100}
                    required
                    className="w-full px-3 py-2 md:px-4 md:py-3 border border-blue-200 rounded-lg bg-blue-50 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-blue-900 mb-2">
                      Government ID
                    </label>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col w-full cursor-pointer group">
                        <div className="px-3 py-4 md:px-4 md:py-6 border-2 border-dashed border-blue-200 rounded-xl bg-blue-50 hover:border-teal-500 transition-colors group-hover:bg-white text-center">
                          <svg
                            className="mx-auto w-6 h-6 md:w-8 md:h-8 text-teal-600 mb-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          <span className="text-sm md:text-base text-teal-600 font-medium">
                            Upload Document
                          </span>
                          <span className="block text-xs text-blue-600 mt-1">
                            PDF, JPG or PNG, max 5MB
                          </span>
                          <input type="file" accept=".pdf,.jpg,.png" className="hidden" required />
                        </div>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-blue-900 mb-2">
                      Qualifications
                    </label>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col w-full cursor-pointer group">
                        <div className="px-3 py-4 md:px-4 md:py-6 border-2 border-dashed border-blue-200 rounded-xl bg-blue-50 hover:border-teal-500 transition-colors group-hover:bg-white text-center">
                          <svg
                            className="mx-auto w-6 h-6 md:w-8 md:h-8 text-teal-600 mb-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          <span className="text-sm md:text-base text-teal-600 font-medium">
                            Upload Certifications
                          </span>
                          <span className="block text-xs text-blue-600 mt-1">
                            PDF, JPG or PNG, max 5MB
                          </span>
                          <input type="file" accept=".pdf,.jpg,.png" className="hidden" required />
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mt-6 md:mt-8">
                  <button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2.5 md:py-3 px-6 rounded-xl transition-colors shadow-md outline-none"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExpertVerificationForm;