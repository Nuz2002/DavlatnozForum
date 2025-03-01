const ExpertCard = ({ expert }) => {
  return (
    <div className="max-w-sm bg-white rounded-xl overflow-hidden shadow-lg p-6 flex flex-col h-full border-2 border-blue-50 hover:border-teal-100 transition-all duration-200">
      <div className="flex-1">
        <div className="text-center">
          <div className="relative inline-block">
            <img
              className="h-24 w-24 rounded-full border-4 border-white shadow-md"
              src={expert.photo}
              alt={expert.name}
            />
            <span className="absolute bottom-0 right-0 transform translate-x-1/4 -translate-y-1/4 bg-teal-500 rounded-full p-1 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
          <h3 className="mt-4 text-xl font-bold text-blue-900">
            {expert.name}
          </h3>
          <p className="text-blue-600">@{expert.username}</p>
        </div>
        <p className="mt-3 text-center text-sm text-blue-700 h-20 line-clamp-4">
          {expert.bio}
        </p>
        <div className="mt-4 text-center">
          <span
            className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${
              expert.status === "Open for consultations"
                ? "bg-green-100 text-green-700"
                : expert.status === "Available soon"
                ? "bg-orange-100 text-orange-700"
                : expert.status === "Currently unavailable"
                ? "bg-red-100 text-red-700"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            {expert.status}
          </span>
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <a
          href="/messages"
          className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-6 rounded-xl transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          Message
        </a>
      </div>
    </div>
  );
};

const Experts = () => {
  const experts = [
    {
      name: "Dr. Olivia Carter",
      username: "oliviac",
      photo: "https://randomuser.me/api/portraits/women/45.jpg",
      bio: "With 10+ years of experience in mental health, I've helped countless individuals overcome anxiety and depression.",
      status: "Open for consultations",
    },
    {
      name: "Dr. James Anderson",
      username: "janderson",
      photo: "https://randomuser.me/api/portraits/men/34.jpg",
      bio: "Specialized in stress management and mindfulness therapy, guiding people to a healthier mindset.",
      status: "Currently unavailable",
    },
    {
      name: "Dr. Emily Chen",
      username: "emilyc",
      photo: "https://randomuser.me/api/portraits/women/12.jpg",
      bio: "Child psychology expert focusing on developmental disorders and family counseling.",
      status: "Open for consultations",
    },
    {
      name: "Dr. Michael Torres",
      username: "michaelt",
      photo: "https://randomuser.me/api/portraits/men/76.jpg",
      bio: "Trauma specialist with extensive experience in PTSD treatment and cognitive therapy.",
      status: "Available soon",
    },
    {
      name: "Dr. Sarah Johnson",
      username: "sarahj",
      photo: "https://randomuser.me/api/portraits/women/67.jpg",
      bio: "Relationship counselor and communication strategies expert.",
      status: "Open for consultations",
    },
    {
      name: "Dr. David Kim",
      username: "davidk",
      photo: "https://randomuser.me/api/portraits/men/89.jpg",
      bio: "Addiction recovery specialist with holistic treatment approach.",
      status: "Currently unavailable",
    },
    {
      name: "Dr. Sophia Martinez",
      username: "sophiam",
      photo: "https://randomuser.me/api/portraits/women/90.jpg",
      bio: "Eating disorder specialist and body positivity advocate.",
      status: "Open for consultations",
    },
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {experts.map((expert, index) => (
        <ExpertCard key={index} expert={expert} />
      ))}
    </div>
  );
};

export default Experts;


// Maybe change the website theme from yellow to blue?? think about it