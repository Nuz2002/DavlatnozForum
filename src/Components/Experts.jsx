import { useEffect, useState } from "react";
import { getApprovedExperts } from "../api-calls/expertVerificationApi";
import ExpertCard from "./ExpertCard";

const Experts = () => {
  const [experts, setExperts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Maps the backend expert verification data to the structure expected by ExpertCard
  const mapExpertData = (expert) => {
    return {
      name: `${expert.firstName} ${expert.lastName}`,
      username: expert.user.username,
      photo: expert.profilePhotoUrl, // Adjust if you need to prepend a domain for relative paths
      bio: expert.professionalBio,
      // Since the backend status is "APPROVED", you can define a friendly display status
      status: "Open for consultations",
    };
  };

  useEffect(() => {
    const fetchExperts = async () => {
      try {
        const data = await getApprovedExperts();
        const mappedExperts = data.map(mapExpertData);
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

  if (loading) return <div>Loading experts...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {experts.map((expert, index) => (
        <ExpertCard key={index} expert={expert} />
      ))}
    </div>
  );
};

export default Experts;
