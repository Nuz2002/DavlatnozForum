import React from "react";

const RejectedPage = ({ onReapply }) => {
  return (
    <div className="text-center p-6 md:p-8 bg-blue-50 rounded-xl space-y-4">
      <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-teal-100 rounded-full">
        {/* Rejected icon (X mark) */}
        <svg
          className="w-8 h-8 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>

      <h3 className="text-lg md:text-xl font-semibold text-blue-900">Application Rejected</h3>
      <p className="text-sm md:text-base text-blue-700">
        Unfortunately your application didn't meet our requirements. Please review our guidelines and try again.
      </p>

      {/* <button
        onClick={onReapply}
        className="mt-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-6 rounded-xl"
      >
        Re-apply
      </button> */}
    </div>
  );
};

export default RejectedPage;
