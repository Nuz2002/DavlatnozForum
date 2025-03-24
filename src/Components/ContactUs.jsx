import { FaPhone, FaEnvelope, FaMapMarker, FaClock, FaLifeRing } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <main className="bg-white text-blue-900">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-[40vh] bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto text-center px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Reach Out to <span className="text-teal-600">DavlatnozForum</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-700 max-w-2xl mx-auto">
            We're here to listen, help, and connect you with the right resources
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-teal-100 w-fit p-4 rounded-full mb-4">
                <FaPhone className="text-teal-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
              <p className="text-blue-700 mb-2">General Inquiries</p>
              <a href="tel:+1234567890" className="text-teal-600 hover:text-teal-700">
                +1 (234) 567-890
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-teal-100 w-fit p-4 rounded-full mb-4">
                <FaEnvelope className="text-teal-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-blue-700 mb-2">Direct Communication</p>
              <a href="mailto:support@davlatnozforum.com" className="text-teal-600 hover:text-teal-700">
                support@davlatnozforum.com
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-teal-100 w-fit p-4 rounded-full mb-4">
                <FaMapMarker className="text-teal-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-blue-700">123 Wellness Street<br/>Mental Health City, MH 54321</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Send Us a Message</h2>
            <form className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-blue-900 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-blue-900 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    required
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-blue-900 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  required
                />
              </div>

              <div className="mt-6">
                <label className="block text-blue-900 mb-2">Message</label>
                <textarea
                  rows="5"
                  className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-8 w-full bg-teal-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-teal-700 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FaClock className="text-teal-600" /> Office Hours
              </h3>
              <ul className="space-y-3 text-blue-700">
                <li>Monday-Friday: 8 AM - 8 PM (GMT)</li>
                <li>Saturday: 9 AM - 5 PM</li>
                <li>Sunday: Emergency Support Only</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FaLifeRing className="text-teal-600" /> Emergency Support
              </h3>
              <p className="text-blue-700 mb-4">
                If you're in crisis, please contact your local emergency services or:
              </p>
              <ul className="space-y-2">
                <li>
                  <a href="tel:+911" className="text-teal-600 hover:text-teal-700">
                    Emergency Services: 911 (US)
                  </a>
                </li>
                <li>
                  <a href="https://suicidepreventionlifeline.org" className="text-teal-600 hover:text-teal-700">
                    Suicide Prevention Lifeline
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789101112!2d-0.12345678901234567!3d51.501364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzA5LjgiTiAwwrAwNyczNC4yIlc!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="filter grayscale(20%) contrast(110%)"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;