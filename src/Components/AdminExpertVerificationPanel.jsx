import React, { useState } from "react";

const AdminExpertVerificationPanel = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      photo: "https://randomuser.me/api/portraits/men/1.jpg",
      documents: ["Resume.pdf", "Certificate.jpg"],
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      photo: "https://randomuser.me/api/portraits/women/2.jpg",
      documents: ["Diploma.pdf", "ID Card.png"],
    },
    {
      id: 3,
      firstName: "Emily",
      lastName: "Johnson",
      photo: "https://randomuser.me/api/portraits/women/3.jpg",
      documents: ["Portfolio.pdf", "Recommendation.pdf"],
    },
    {
      id: 4,
      firstName: "Michael",
      lastName: "Brown",
      photo: "https://randomuser.me/api/portraits/men/4.jpg",
      documents: ["Experience Letter.pdf", "Degree.jpg"],
    },
    {
      id: 5,
      firstName: "Sophia",
      lastName: "Williams",
      photo: "https://randomuser.me/api/portraits/women/5.jpg",
      documents: ["Transcript.pdf", "Certification.jpg"],
    },
  ];

  return (
    <div className="bg-blue-50 w-full flex flex-col gap-8 px-4 md:px-8 lg:px-12 md:flex-row text-blue-900 min-h-screen py-8">
      <aside className="md:w-1/3 lg:w-1/4">
        <div className="sticky flex flex-col gap-2 p-4 top-20 bg-white rounded-xl shadow-md border border-blue-100">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-100 pb-3">
            Pending Applications
          </h2>
          {users.map((user) => (
            <button
              key={user.id}
              onClick={() => setSelectedUser(user)}
              className={`flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                selectedUser?.id === user.id
                  ? "bg-teal-50 border-2 border-teal-500"
                  : "hover:bg-blue-50 hover:border-blue-200"
              }`}
            >
              <img
                src={user.photo}
                alt="User"
                className="w-10 h-10 rounded-full mr-3 border-2 border-blue-200"
              />
              <div>
                <p className="font-medium text-blue-900">{user.firstName} {user.lastName}</p>
                <p className="text-sm text-blue-600">{user.documents.length} documents</p>
              </div>
            </button>
          ))}
        </div>
      </aside>

      <main className="w-full md:w-2/3 lg:w-3/4 mt-6 md:mt-0 md:ml-6">
        {selectedUser ? (
          <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
            <div className="flex items-start gap-6 mb-8">
              <div className="relative">
                <img
                  className="w-32 h-32 rounded-xl border-4 border-teal-100 shadow-md"
                  src={selectedUser.photo}
                  alt="User"
                />
                <div className="absolute -bottom-2 -right-2 bg-teal-500 p-2 rounded-full shadow-md">
                  <svg 
                    className="w-5 h-5 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-blue-900 mb-2">
                  {selectedUser.firstName} {selectedUser.lastName}
                </h2>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Submitted Documents</h3>
                  <div className="space-y-2">
                    {selectedUser.documents.map((doc, index) => (
                      <div key={index} className="flex items-center bg-blue-50 rounded-lg p-3">
                        <svg 
                          className="w-5 h-5 text-teal-600 mr-3 shrink-0" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-blue-900 font-medium">{doc}</span>
                        <button className="ml-auto text-blue-600 hover:text-teal-600">
                          View
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 justify-end border-t-2 border-blue-100 pt-6">
              <button className="px-6 py-2.5 bg-red-100 text-red-700 hover:bg-red-200 rounded-lg font-medium flex items-center transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Reject
              </button>
              <button className="px-6 py-2.5 bg-teal-600 text-white hover:bg-teal-700 rounded-lg font-medium flex items-center transition-colors shadow-md">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Approve
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-xl shadow-md border border-blue-100 text-center">
            <div className="text-blue-600 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <p className="text-xl text-blue-900 font-medium">Select an application to review</p>
            <p className="text-blue-600 mt-2">Click on a user from the pending applications list</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminExpertVerificationPanel;
