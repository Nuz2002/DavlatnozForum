import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ProfileSettings = () => {
  const [fileInput, setFileInput] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handlePictureChange = () => {
    fileInput.click();
  };

  return (
    <div className="bg-blue-50 w-full flex flex-col md:flex-row gap-5 px-3 md:px-8 lg:px-16 xl:px-28 text-blue-900 min-h-screen">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        className="md:hidden p-3 bg-teal-600 text-white rounded-lg self-start mt-4"
      >
        {showMobileMenu ? 'Close Menu' : 'Settings Menu'}
      </button>

      {/* Sidebar Navigation */}
      <aside className={`${showMobileMenu ? 'block' : 'hidden'} md:block py-4 w-full md:w-1/3 lg:w-1/4`}>
        <div className="sticky flex flex-col gap-2 p-4 text-sm border-b md:border-r border-blue-100 top-12">
          <h2 className="pl-3 mb-4 text-xl md:text-2xl font-bold text-blue-900">Settings</h2>
          <NavLink
            to="/profile-settings"
            className={({ isActive }) => 
              `flex items-center px-4 py-3 font-medium rounded-xl transition-colors shadow-sm ${
                isActive 
                  ? 'bg-teal-600 text-white'
                  : 'text-blue-700 hover:bg-blue-50'
              }`
            }
            onClick={() => setShowMobileMenu(false)}
          >
            Public Profile
          </NavLink>
          <NavLink
            to="/become-expert"
            className={({ isActive }) => 
              `flex items-center px-4 py-3 font-medium rounded-xl transition-colors shadow-sm ${
                isActive 
                  ? 'bg-teal-600 text-white'
                  : 'text-blue-700 hover:bg-blue-50'
              }`
            }
            onClick={() => setShowMobileMenu(false)}
          >
            Get Verified
          </NavLink>
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <div className="p-2 md:p-4">
          <div className="w-full px-2 md:px-6 pb-8 mt-4 sm:max-w-xl sm:rounded-lg">
            <h2 className="text-xl md:text-2xl font-bold mb-6 border-b-2 border-blue-100 pb-3">
              Public Profile
            </h2>

            <div className="max-w-2xl mx-auto mt-4 md:mt-8">
              <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                <div className="relative">
                  <img
                    className="object-cover w-32 h-32 sm:w-40 sm:h-40 p-1 rounded-full ring-2 ring-teal-500 shadow-md"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Profile"
                  />
                  <div 
                    className="absolute bottom-0 right-0 bg-teal-500 p-1 sm:p-2 rounded-full shadow-lg cursor-pointer"
                    onClick={handlePictureChange}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                    </svg>
                  </div>
                  <input 
                    type="file" 
                    className="hidden" 
                    accept="image/*"
                    ref={input => setFileInput(input)}
                  />
                </div>
                <div className="flex flex-col space-y-3 sm:ml-8 mt-2 sm:mt-0 w-full sm:w-auto">
                  <button
                    type="button"
                    className="px-4 sm:px-6 py-2 text-sm font-medium text-white bg-teal-600 rounded-lg border border-teal-700 hover:bg-teal-700 transition-colors shadow-sm"
                    onClick={handlePictureChange}
                  >
                    Change Picture
                  </button>
                  <button
                    type="button"
                    className="px-4 sm:px-6 py-2 text-sm font-medium text-red-600 bg-white rounded-lg border border-red-200 hover:bg-red-50 transition-colors"
                  >
                    Delete Picture
                  </button>
                </div>
              </div>

              <div className="items-center mt-6 sm:mt-10">
                {/* <div className="grid gap-4 sm:gap-6 mb-6 grid-cols-1 md:grid-cols-2">
                  <div>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-blue-900">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-white border border-blue-200 text-blue-900 text-sm rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none block w-full p-2.5 sm:p-3"
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
                      className="bg-white border border-blue-200 text-blue-900 text-sm rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none block w-full p-2.5 sm:p-3"
                      placeholder="Last name"
                      defaultValue="Ferguson"
                      required
                    />
                  </div>
                </div> */}

                <div className="mb-6">
                  <label htmlFor="username" className="block mb-2 text-sm font-medium text-blue-900">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="bg-white border border-blue-200 text-blue-900 text-sm rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none block w-full p-2.5 sm:p-3"
                    placeholder="Your username"
                    defaultValue="jane_ferguson"
                    required
                  />
                </div>

                {/* <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-blue-900">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-white border border-blue-200 text-blue-900 text-sm rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none block w-full p-2.5 sm:p-3"
                    placeholder="your.email@mail.com"
                    required
                  />
                </div> */}

                <div className="mb-6">
                  <label htmlFor="profession" className="block mb-2 text-sm font-medium text-blue-900">
                    Profession
                  </label>
                  <input
                    type="text"
                    id="profession"
                    className="bg-white border border-blue-200 text-blue-900 text-sm rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none block w-full p-2.5 sm:p-3"
                    placeholder="Your profession"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="account-type" className="block mb-2 text-sm font-medium text-blue-900">
                    Account Privacy
                  </label>
                  <select
                    id="account-type"
                    className="bg-white border border-blue-200 text-blue-900 text-sm rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none block w-full p-2.5 sm:p-3"
                    defaultValue="public"
                  >
                    <option value="public">Public Account</option>
                    <option value="private">Private Account</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="bio" className="block mb-2 text-sm font-medium text-blue-900">
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    rows="3"
                    className="block p-2.5 sm:p-3 w-full text-sm text-blue-900 bg-white rounded-lg border border-blue-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                    placeholder="Write something about yourself..."
                  ></textarea>
                </div>

                <div className="flex justify-end border-t-2 border-blue-100 pt-6">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-2.5 sm:py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg shadow-md transition-colors"
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