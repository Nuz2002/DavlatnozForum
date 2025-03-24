import { FaInfoCircle, FaTools, FaShareAlt, FaUserShield, FaLock, FaCookie, FaEdit, FaChild } from 'react-icons/fa';

const PrivacyPolicy = () => {
  return (
    <main className="bg-white text-blue-900">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-[40vh] bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto text-center px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-blue-700">Last updated: October 2023</p>
          <p className="text-lg text-blue-700 mt-4 max-w-2xl mx-auto">
            At DavlatnozForum, your privacy is paramount. This policy explains how we handle your personal information to ensure your trust and safety.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* 1. Information We Collect */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <FaInfoCircle className="text-teal-600 mr-2" aria-hidden="true" />
              <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
            </div>
            <p className="text-blue-700 mb-4">
              We collect information you provide directly, such as your name and email, and information generated through your use of our services, including forum posts and interactions.
            </p>
            <ul className="list-disc pl-6 text-blue-700">
              <li>Personal identifiers: name, email address, username</li>
              <li>Profile information: bio, profile picture</li>
              <li>Content you create: forum posts, comments, messages</li>
              <li>Usage data: IP address, browser type, pages visited</li>
              <li>Sensitive information: mental health-related data you choose to share</li>
            </ul>
          </div>
          <hr className="my-8" />

          {/* 2. How We Use Your Information */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <FaTools className="text-teal-600 mr-2" aria-hidden="true" />
              <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
            </div>
            <p className="text-blue-700 mb-4">
              We use your information to provide, maintain, and improve our services, including:
            </p>
            <ul className="list-disc pl-6 text-blue-700">
              <li>Personalizing your experience</li>
              <li>Communicating updates or issues</li>
              <li>Conducting research to better understand mental health needs</li>
              <li>Ensuring the safety and integrity of our platform</li>
            </ul>
          </div>
          <hr className="my-8" />

          {/* 3. Sharing Your Information */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <FaShareAlt className="text-teal-600 mr-2" aria-hidden="true" />
              <h2 className="text-2xl font-semibold">3. Sharing Your Information</h2>
            </div>
            <p className="text-blue-700 mb-4">
              We do not sell your personal information. We may share data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-blue-700">
              <li>With service providers who assist in operating our platform (e.g., hosting, analytics)</li>
              <li>When required by law or to protect our rights</li>
              <li>In aggregated, anonymized form for research purposes</li>
            </ul>
          </div>
          <hr className="my-8" />

          {/* 4. Your Rights */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <FaUserShield className="text-teal-600 mr-2" aria-hidden="true" />
              <h2 className="text-2xl font-semibold">4. Your Rights</h2>
            </div>
            <p className="text-blue-700 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-blue-700">
              <li>Access your personal information</li>
              <li>Correct inaccuracies in your data</li>
              <li>Request deletion of your account and data</li>
              <li>Opt out of certain data uses, where applicable</li>
            </ul>
            <p className="text-blue-700 mt-4">
              To exercise these rights, please contact us at privacy@davlatnozforum.com.
            </p>
          </div>
          <hr className="my-8" />

          {/* 5. Data Security */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <FaLock className="text-teal-600 mr-2" aria-hidden="true" />
              <h2 className="text-2xl font-semibold">5. Data Security</h2>
            </div>
            <p className="text-blue-700 mb-4">We implement robust security measures, including:</p>
            <ul className="list-disc pl-6 text-blue-700">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and authentication protocols</li>
              <li>Training for staff on data protection</li>
            </ul>
            <p className="text-blue-700 mt-4">
              While we strive to protect your data, no system is completely secure. We encourage you to use strong passwords and keep your account information confidential.
            </p>
          </div>
          <hr className="my-8" />

          {/* 6. Cookies and Tracking Technologies */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <FaCookie className="text-teal-600 mr-2" aria-hidden="true" />
              <h2 className="text-2xl font-semibold">6. Cookies and Tracking Technologies</h2>
            </div>
            <p className="text-blue-700 mb-4">We use cookies and similar technologies to:</p>
            <ul className="list-disc pl-6 text-blue-700">
              <li>Authenticate users</li>
              <li>Remember preferences</li>
              <li>Analyze site usage</li>
            </ul>
            <p className="text-blue-700 mt-4">
              You can manage cookie settings through your browser, but disabling cookies may affect site functionality.
            </p>
          </div>
          <hr className="my-8" />

          {/* 7. Changes to This Policy */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <FaEdit className="text-teal-600 mr-2" aria-hidden="true" />
              <h2 className="text-2xl font-semibold">7. Changes to This Policy</h2>
            </div>
            <p className="text-blue-700">
              We may update this privacy policy from time to time. We will notify you of significant changes via email or through a prominent notice on our website.
            </p>
          </div>
          <hr className="my-8" />

          {/* 8. Children's Privacy */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <FaChild className="text-teal-600 mr-2" aria-hidden="true" />
              <h2 className="text-2xl font-semibold">8. Children's Privacy</h2>
            </div>
            <p className="text-blue-700">
              Our services are not intended for users under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware of such data, we will take steps to delete it.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">Questions?</h2>
          <p className="text-blue-700">
            If you have any concerns about your privacy, please contact us at{' '}
            <a href="mailto:privacy@davlatnozforum.com" className="text-teal-600 hover:underline">
              privacy@davlatnozforum.com
            </a>.
          </p>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;