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
    <div className="bg-white w-full flex flex-col gap-8 px-8 md:px-20 lg:px-32 md:flex-row text-[#161931] min-h-screen py-8">
      <aside className="hidden py-6 md:w-1/3 lg:w-1/4 md:block">
        <div className="sticky flex flex-col gap-4 p-6 text-lg border-r border-indigo-100 top-20">
          <h2 className="pl-3 mb-6 text-3xl font-semibold">Pending Applications</h2>
          {users.map((user) => (
            <button
              key={user.id}
              onClick={() => setSelectedUser(user)}
              className="flex items-center px-4 py-3 font-semibold hover:text-indigo-900 hover:border hover:rounded-full"
            >
              {user.firstName} {user.lastName}
            </button>
          ))}
        </div>
      </aside>

      <main className="w-full min-h-screen py-6 md:w-2/3 lg:w-3/4">
        {selectedUser ? (
          <div className="p-6 border rounded-lg shadow-lg bg-indigo-50">
            <h2 className="text-3xl font-bold text-indigo-900">Application Details</h2>
            <div className="flex items-center gap-6 mt-6">
              <img
                className="object-cover w-28 h-28 p-2 rounded-full ring-4 ring-indigo-300"
                src={selectedUser.photo}
                alt="User"
              />
              <div>
                <h3 className="text-xl font-semibold text-indigo-900">
                  {selectedUser.firstName} {selectedUser.lastName}
                </h3>
                <p className="text-indigo-700 mt-2 text-lg">Uploaded Documents:</p>
                <ul className="list-disc pl-6 text-indigo-700 text-lg">
                  {selectedUser.documents.map((doc, index) => (
                    <li key={index}>{doc}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex gap-6 mt-8">
              <button className="py-3 px-6 text-lg text-white bg-green-600 rounded-lg hover:bg-green-700">Approve</button>
              <button className="py-3 px-6 text-lg text-white bg-red-600 rounded-lg hover:bg-red-700">Reject</button>
            </div>
          </div>
        ) : (
          <p className="text-indigo-700 text-xl text-center">Select a user to review their application.</p>
        )}
      </main>
    </div>
  );
};

export default AdminExpertVerificationPanel;
