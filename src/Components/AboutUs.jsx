import { Link } from 'react-router-dom';
import { FaHandsHelping, FaHeartbeat, FaUsers } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <main className="bg-white text-blue-900">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-[40vh] bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto text-center px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-teal-600">DavlatnozForum</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-700 max-w-2xl mx-auto">
            Building bridges of understanding in mental health through compassion and technology
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="/images/team-discussion.png"
                alt="Team working together"
                className="rounded-xl shadow-lg border-4 border-white"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-blue-900">Our Story</h2>
              <p className="text-lg text-blue-700 mb-4">
                Founded in 2023, DavlatnozForum emerged from a simple yet powerful idea: 
                mental health support should be accessible, stigma-free, and community-driven. 
                What started as a university project has grown into a thriving platform connecting 
                thousands worldwide.
              </p>
              <p className="text-lg text-blue-700">
                Our team of psychologists, developers, and mental health advocates work tirelessly 
                to maintain a safe space where vulnerability meets support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Our Core Values</h2>
            <p className="text-lg text-teal-600 mt-2">The pillars that guide our community</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-blue-50 rounded-xl">
              <FaHeartbeat className="text-teal-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-center">Empathy First</h3>
              <p className="text-blue-700 text-center">
                Every interaction is rooted in compassion and understanding
              </p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl">
              <FaUsers className="text-teal-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-center">Community Power</h3>
              <p className="text-blue-700 text-center">
                Collective wisdom drives personal growth and healing
              </p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl">
              <FaHandsHelping className="text-teal-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-center">Safe Space</h3>
              <p className="text-blue-700 text-center">
                Rigorous moderation ensures a judgment-free environment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Meet Our Guardians</h2>
            <p className="text-lg text-teal-600 mt-2">The team keeping our community safe</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div key={member} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={`https://picsum.photos/seed/team${member}/400/300`}
                  alt="Team member"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-blue-900">Dr. Sarah Johnson</h3>
                <p className="text-teal-600 mb-2">Clinical Psychologist</p>
                <p className="text-blue-700">
                  Specializing in cognitive behavioral therapy with 12 years of experience
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-teal-600 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Movement</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're seeking support or looking to help others, your voice matters here
          </p>
          <Link
            to="/register"
            className="bg-white text-teal-600 py-3 px-8 rounded-full shadow-lg hover:bg-blue-50 transition-colors duration-200"
          >
            Become a Member
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;