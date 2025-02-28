import { Link } from 'react-router-dom';
import { FaRegSmile, FaComments, FaUserMd } from 'react-icons/fa';

const Home = () => {
  return (
    <main className="bg-white text-blue-900">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative flex items-center justify-center min-h-[70vh] bg-gradient-to-br from-blue-50 to-blue-100"
      >
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to <span className="text-teal-600">DavlatnozForum</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-700">
            A safe space to engage, share, and learn about mental health.
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <Link
              to="/publications"
              className="bg-teal-600 text-white py-3 px-8 rounded-full shadow-lg hover:bg-teal-700 transition-colors duration-200"
            >
              Explore Discussions
            </Link>
            <Link
              to="/experts"
              className="border-2 border-teal-600 text-teal-600 py-3 px-8 rounded-full shadow-lg hover:bg-teal-600 hover:text-white transition-colors duration-200"
            >
              Contact Experts
            </Link>
          </div>
        </div>
      </section>

      {/* About / Mission Section */}
      <section id="about" className="py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-blue-900">Our Mission</h2>
              <p className="text-lg leading-relaxed mb-4 text-blue-700">
                At DavlatnozForum, we strive to build a community where people can openly discuss mental health,
                share personal experiences, and offer support. We encourage respectful, helpful, and genuine interactions
                to empower every member.
              </p>
              <p className="text-lg leading-relaxed text-blue-700">
                Whether you're here to learn from others, share your journey, or connect with specialists, you're in
                the right place.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/images/healthy-discussions.png"
                alt="Mental Health"
                className="w-full h-auto rounded-xl shadow-lg border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community Guidelines Section */}
      <section id="guidelines" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Community Guidelines</h2>
            <p className="text-lg text-blue-600 mt-2">
              Our forum thrives on supportive and respectful conversations. Here’s how you can contribute:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 border-2 border-blue-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
              <FaRegSmile className="text-teal-600 text-5xl mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Be Respectful</h3>
              <p className="text-blue-600">
                Treat everyone with kindness and understanding, regardless of their experiences.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border-2 border-blue-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
              <FaComments className="text-teal-600 text-5xl mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Engage Meaningfully</h3>
              <p className="text-blue-600">
                Share your insights and support others with genuine, constructive conversations.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border-2 border-blue-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
              <FaUserMd className="text-teal-600 text-5xl mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Consult Specialists</h3>
              <p className="text-blue-600">
                Connect with professionals when needed. Your well-being is our priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section id="safety" className="py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="/images/privacy.png" 
                alt="Privacy protected" 
                className="w-full h-auto rounded-xl shadow-lg border-4 border-white"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-blue-900">Your Safety Matters</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-blue-900">Anonymous Posting</h3>
                    <p className="text-blue-600">Share experiences without revealing your identity</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-blue-900">24/7 Moderation</h3>
                    <p className="text-blue-600">Trained moderators ensure community safety</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-blue-900">Emergency Resources</h3>
                    <p className="text-blue-600">Immediate help contacts always visible</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Discussions Section */}
<section id="testimonials" className="py-24 bg-blue-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-blue-900">Community Voices</h2>
      <p className="text-lg text-teal-600 mt-2">
        Real stories from our supportive network
      </p>
    </div>
    <div className="relative overflow-hidden">
      <div className="flex gap-8 animate-scroll-carousel">
        {[1, 2, 3, 4, 5, 6].map((item) => {
          const randomImage = Math.floor(Math.random() * 1000);
          const gradientDirection = item % 2 === 0 ? 'bg-gradient-to-br' : 'bg-gradient-to-bl';
          
          return (
            <div
              key={item}
              className={`flex-shrink-0 w-80 p-6 ${gradientDirection} from-blue-50 to-teal-50 border-2 border-blue-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden`}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-teal-100/30 rounded-bl-2xl transform rotate-45 translate-x-8 -translate-y-8" />
              
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <img
                    src={`https://picsum.photos/seed/${randomImage}/200`}
                    alt="User Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 group-hover:text-teal-700 transition-colors">
                    Community Member
                  </h3>
                  <p className="text-sm text-teal-600">Joined {Math.floor(Math.random() * 12) + 1} months ago</p>
                </div>
              </div>
              <p className="text-blue-800 italic relative z-10">
                {[
                  "This forum has been a beacon of hope for me. The support I received here made all the difference in my journey.",
                  "I found comfort in knowing I'm not alone. This community fosters kindness and real connections.",
                  "Sharing my struggles here has given me strength. The encouragement from others keeps me going.",
                  "An incredible place where people truly listen and support each other. I'm grateful to be part of it.",
                  "The stories here inspire me every day. This is more than a forum—it's a family.",
                  "I was hesitant to open up, but the warmth of this community made me feel safe and understood."
                ][item % 6]}
              </p>
              
              {/* Interaction hint */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6 text-teal-500 animate-bounce-horizontal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          )
        })}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-blue-50 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-blue-50 to-transparent" />
      
     
    </div>
  </div>
</section>
    </main>
  );
};

export default Home;