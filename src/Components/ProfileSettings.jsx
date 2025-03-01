import { Link } from 'react-router-dom';

const ProfileSettings = () => {
  return (
    <div className="bg-blue-50 w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-blue-900 min-h-screen">
      <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
        <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-blue-100 top-12">
          <h2 className="pl-3 mb-4 text-2xl font-bold text-blue-900">Settings</h2>
          <Link
            to="/profile-settings"
            className="flex items-center px-4 py-3 font-semibold bg-teal-600 text-white rounded-xl transition-colors shadow-sm"
          >
            Public Profile
          </Link>
          <Link
            to="/become-expert"
            className="flex items-center px-4 py-3 font-medium text-blue-700 hover:bg-blue-50 rounded-xl transition-colors"
          >
            Get Verified
          </Link>
        </div>
      </aside>

      <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <div className="p-2 md:p-4">
          <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
            <h2 className="text-2xl font-bold mb-8 border-b-2 border-blue-100 pb-4">Public Profile</h2>

            <div className="grid max-w-2xl mx-auto mt-8">
              <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                <div className="relative">
                  <img
                    className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-teal-500 shadow-md"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Profile"
                  />
                  <div className="absolute bottom-0 right-0 bg-teal-500 p-2 rounded-full shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col space-y-3 sm:ml-8 mt-4 sm:mt-0">
                  <button
                    type="button"
                    className="px-6 py-2.5 text-sm font-medium text-white bg-teal-600 rounded-lg border border-teal-700 hover:bg-teal-700 transition-colors shadow-sm"
                  >
                    Change Picture
                  </button>
                  <button
                    type="button"
                    className="px-6 py-2.5 text-sm font-medium text-red-600 bg-white rounded-lg border border-red-200 hover:bg-red-50 transition-colors"
                  >
                    Delete Picture
                  </button>
                </div>
              </div>

              <div className="items-center mt-8 sm:mt-14">
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-blue-900">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-blue-50 border border-blue-200 text-blue-900 text-sm rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 block w-full p-3"
                      placeholder="First name"
                      defaultValue="Jane"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-blue-900">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      className="bg-blue-50 border border-blue-200 text-blue-900 text-sm rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 block w-full p-3"
                      placeholder="Last name"
                      defaultValue="Ferguson"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-blue-900">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-blue-50 border border-blue-200 text-blue-900 text-sm rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 block w-full p-3"
                    placeholder="your.email@mail.com"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="profession" className="block mb-2 text-sm font-medium text-blue-900">
                    Profession
                  </label>
                  <input
                    type="text"
                    id="profession"
                    className="bg-blue-50 border border-blue-200 text-blue-900 text-sm rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 block w-full p-3"
                    placeholder="Your profession"
                    required
                  />
                </div>

                <div className="mb-8">
                  <label htmlFor="bio" className="block mb-2 text-sm font-medium text-blue-900">
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    rows="4"
                    className="block p-3 w-full text-sm text-blue-900 bg-blue-50 rounded-lg border border-blue-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    placeholder="Write something about yourself..."
                  ></textarea>
                </div>

                <div className="flex justify-end border-t-2 border-blue-100 pt-8">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg shadow-md transition-colors"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileSettings;