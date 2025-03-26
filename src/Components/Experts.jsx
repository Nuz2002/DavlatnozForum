import { useEffect, useState } from "react";
import { getApprovedExperts } from "../api-calls/expertVerificationApi";
import ExpertCard from "./ExpertCard";
import { jwtDecode } from "jwt-decode";
import { getUserProfile } from "../api-calls/profileApi";

const Experts = () => {
  const [experts, setExperts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profile = await getUserProfile();

        setCurrentUser({
          email: profile.email,
          username: profile.username,
          photo: profile.photo, 
        });
      } catch (err) {
        console.error("Failed to load current user profile", err);
      }
    };
  
    fetchProfile();
  }, []);
  

  const mapExpertData = (expert) => {

  return {
    name: `${expert.firstName} ${expert.lastName}`,
    username: expert.user.username,
    email: expert.user.email,
    photo: expert.user.photo,
    bio: expert.professionalBio,
    status: "Open for consultations",
  };
  };

  useEffect(() => {
    const fetchExperts = async () => {
      try {
        const data = await getApprovedExperts();
        console.log("✅ Raw approved experts:", data);

        const mappedExperts = data.map(mapExpertData);
        console.log("✅ Mapped experts:", mappedExperts);

        setExperts(mappedExperts);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch experts.");
      } finally {
        setLoading(false);
      }
    };

    fetchExperts();
  }, []);

  if (loading || !currentUser) return <div>Loading experts...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-6">
      {experts.length === 0 ? (
        <div className="text-center text-blue-700 text-sm italic">
          No experts have been approved as of now.
        </div>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experts.map((expert, index) => (
            <ExpertCard key={index} expert={expert} currentUser={currentUser} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Experts;
