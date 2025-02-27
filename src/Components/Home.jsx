import { Link } from 'react-router-dom';
import { FaRegSmile, FaComments, FaUserMd } from 'react-icons/fa';

const Home = () => {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative flex items-center justify-center min-h-[70vh] bg-gradient-to-r from-blue-100 to-white"
      >
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to <span className="text-yellow-500">DavlatnozForum</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            A safe space to engage, share, and learn about mental health.
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <Link
              to="/publications"
              className="bg-yellow-500 text-white py-3 px-8 rounded-full shadow hover:bg-yellow-600 transition duration-300"
            >
              Explore Discussions
            </Link>
            <Link
              to="/experts"
              className="border border-yellow-500 text-yellow-500 py-3 px-8 rounded-full shadow hover:bg-yellow-500 hover:text-white transition duration-300"
            >
              Contact Experts
            </Link>
          </div>
        </div>
      </section>

      {/* About / Mission Section */}
      <section id="about" className="py-24 bg-gray-50"> {/* Increased padding */}
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg leading-relaxed mb-4">
                At DavlatnozForum, we strive to build a community where people can openly discuss mental health,
                share personal experiences, and offer support. We encourage respectful, helpful, and genuine interactions
                to empower every member.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you're here to learn from others, share your journey, or connect with specialists, you're in
                the right place.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/images/healthy-discussions.png"
                alt="Mental Health"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community Guidelines Section */}
      <section id="guidelines" className="py-24"> {/* Increased padding */}
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Community Guidelines</h2>
            <p className="text-lg text-gray-600 mt-2">
              Our forum thrives on supportive and respectful conversations. Here’s how you can contribute:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <FaRegSmile className="text-yellow-500 text-5xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Be Respectful</h3>
              <p className="text-gray-600">
                Treat everyone with kindness and understanding, regardless of their experiences.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <FaComments className="text-yellow-500 text-5xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Engage Meaningfully</h3>
              <p className="text-gray-600">
                Share your insights and support others with genuine, constructive conversations.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <FaUserMd className="text-yellow-500 text-5xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Consult Specialists</h3>
              <p className="text-gray-600">
                Connect with professionals when needed. Your well-being is our priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section id="safety" className="py-24 bg-gray-50"> {/* Increased padding */}
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="/images/privacy.png" 
                alt="Privacy protected" 
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Your Safety Matters</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold">Anonymous Posting</h3>
                    <p className="text-gray-600">Share experiences without revealing your identity</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold">24/7 Moderation</h3>
                    <p className="text-gray-600">Trained moderators ensure community safety</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold">Emergency Resources</h3>
                    <p className="text-gray-600">Immediate help contacts always visible</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Discussions Section */}
      <section id="testimonials" className="py-24 bg-yellow-50"> {/* Increased padding */}
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-yellow-800">Shared Experiences</h2>
            <p className="text-lg text-yellow-700 mt-2">
              Hear from our community members
            </p>
          </div>
          <div className="relative overflow-hidden">
            {/* Carousel Container */}
            <div className="flex gap-8 animate-scroll-carousel">
              {/* Testimonial Cards */}
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="flex-shrink-0 w-80 p-6 bg-white border border-yellow-200 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-14 w-14 bg-yellow-100 rounded-full overflow-hidden">
                      <img
                        src={`/images/avatar-${item}.webp`}
                        alt="User Avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-yellow-900">Anonymous Member</h3>
                      <p className="text-sm text-yellow-700">Joined 3 months ago</p>
                    </div>
                  </div>
                  <p className="text-yellow-800 italic">
                    {item === 1 && "This forum has been a beacon of hope for me. The support I received here made all the difference in my journey."}
                    {item === 2 && "I found comfort in knowing I'm not alone. This community fosters kindness and real connections."}
                    {item === 3 && "Sharing my struggles here has given me strength. The encouragement from others keeps me going."}
                    {item === 4 && "An incredible place where people truly listen and support each other. I'm grateful to be part of it."}
                    {item === 5 && "The stories here inspire me every day. This is more than a forum—it's a family."}
                    {item === 6 && "I was hesitant to open up, but the warmth of this community made me feel safe and understood."}
                  </p>
                </div>
              ))}
            </div>

            {/* Gradient Overlays for Infinite Scroll Effect */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-yellow-50 to-transparent"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-yellow-50 to-transparent"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;