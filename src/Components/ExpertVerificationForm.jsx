import React from "react";

const ExpertVerificationForm = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-blue-100">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-900 border-b-2 border-blue-100 pb-4">
          Expert Verification Application
        </h2>

        {submitted ? (
          <div className="text-center p-8 bg-blue-50 rounded-xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-blue-900">
              Application Submitted!
            </h3>
            <p className="mt-2 text-blue-700">
              Our team will review your documents and get back to you within 3-5 business days.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-blue-900 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-blue-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-900 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-blue-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-900 mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  required
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-blue-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-900 mb-2">
                  Profile Photo
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col w-full cursor-pointer group">
                    <div className="px-4 py-6 border-2 border-dashed border-blue-200 rounded-xl hover:border-teal-500 transition-colors text-center bg-blue-50 group-hover:bg-white">
                      <svg className="mx-auto w-8 h-8 text-teal-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-teal-600 font-medium">Upload Photo</span>
                      <span className="block text-xs text-blue-600 mt-1">JPEG or PNG, max 2MB</span>
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
                rows={4}
                maxLength={100}
                required
                className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-blue-50"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-blue-900 mb-2">
                  Government ID
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col w-full cursor-pointer group">
                    <div className="px-4 py-6 border-2 border-dashed border-blue-200 rounded-xl hover:border-teal-500 transition-colors text-center bg-blue-50 group-hover:bg-white">
                      <svg className="mx-auto w-8 h-8 text-teal-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="text-teal-600 font-medium">Upload Document</span>
                      <span className="block text-xs text-blue-600 mt-1">PDF, JPG or PNG, max 5MB</span>
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
                    <div className="px-4 py-6 border-2 border-dashed border-blue-200 rounded-xl hover:border-teal-500 transition-colors text-center bg-blue-50 group-hover:bg-white">
                      <svg className="mx-auto w-8 h-8 text-teal-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="text-teal-600 font-medium">Upload Certifications</span>
                      <span className="block text-xs text-blue-600 mt-1">PDF, JPG or PNG, max 5MB</span>
                      <input type="file" accept=".pdf,.jpg,.png" className="hidden" required />
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors shadow-md"
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