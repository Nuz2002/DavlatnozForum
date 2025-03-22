import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { 
  getUserProfile, 
  updateUserProfile, 
  uploadProfilePicture, 
  deleteProfilePicture 
} from '../api-calls/profileApi';
import defaultProfilePic from '../assets/default-profile.png';

const ProfileSettings = () => {
  const [fileInput, setFileInput] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [profileData, setProfileData] = useState({
    username: '',
    profession: '',
    accountType: '',
    bio: '',
    photo: ''
  });
  const [previewImage, setPreviewImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const userType = localStorage.getItem('userType');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setIsLoading(true);
        const data = await getUserProfile();
        setProfileData({
          username: data.username,
          profession: data.profession,
          accountType: data.accountType ? 'public' : 'private',
          bio: data.bio,
          photo: data.photo
        });
      } catch (err) {
        setError('Failed to load profile data');
      } finally {
        setIsLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handlePictureChange = () => {
    fileInput.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setIsLoading(true);
      // Show preview
      const reader = new FileReader();
      reader.onload = (e) => setPreviewImage(e.target.result);
      reader.readAsDataURL(file);

      // Upload to backend
      const { photoUrl } = await uploadProfilePicture(file);
      setProfileData(prev => ({ ...prev, photo: photoUrl }));
    } catch (err) {
      setError('Failed to upload profile picture');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeletePicture = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete your profile picture?');
    if (!confirmDelete) return;
  
    try {
      setIsLoading(true);
      await deleteProfilePicture();
      setProfileData(prev => ({ ...prev, photo: '' }));
      setPreviewImage('');
    } catch (err) {
      setError('Failed to delete profile picture');
    } finally {
      setIsLoading(false);
    }
  };
  

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setProfileData(prev => ({ ...prev, [id]: value }));
  };

// In handleSubmit function
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    setIsLoading(true);
    const updatedProfile = await updateUserProfile({
      ...profileData,
      accountType: profileData.accountType === 'public' // Convert to boolean
    });
    
    setProfileData({
      ...updatedProfile,
      accountType: updatedProfile.accountType ? 'public' : 'private' // Convert back to string
    });
  } catch (err) {
    setError('Failed to update profile');
  } finally {
    setIsLoading(false);
  }
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
          {userType === 'SPECIALIST' && (
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
    )}
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
                    src={previewImage || profileData.photo || defaultProfilePic}
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
                    onChange={handleFileChange}
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
                    onClick={handleDeletePicture}
                    className="px-4 sm:px-6 py-2 text-sm font-medium text-red-600 bg-white rounded-lg border border-red-200 hover:bg-red-50 transition-colors"
                  >
                    Delete Picture
                  </button>
                </div>
              </div>

              <div className="items-center mt-6 sm:mt-10">

                <div className="mb-6">
                  <label htmlFor="username" className="block mb-2 text-sm font-medium text-blue-900">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={profileData.username}
                    onChange={handleInputChange}
                    className="bg-white border border-blue-200 text-blue-900 text-sm rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none block w-full p-2.5 sm:p-3"
                    // placeholder="Your username"
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
                    className="bg-white border border-blue-200 text-blue-900 text-sm rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none block w-full p-2.5 sm:p-3"
                    // placeholder="Your profession"
                    // required
                    value={profileData.profession}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="accountType" className="block mb-2 text-sm font-medium text-blue-900">
                    Account Privacy
                  </label>
                  <select
                    id="accountType"
                    className="bg-white border border-blue-200 text-blue-900 text-sm rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none block w-full p-2.5 sm:p-3"
                    value={profileData.accountType}
                    onChange={handleInputChange}
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
                    // placeholder="Write something about yourself..."
                    value={profileData.bio}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                {/* Loading and Error States */}
                {isLoading && <p>Saving changes...</p>}
                {error && <p className="text-red-500">{error}</p>}

                <div className="flex justify-end border-t-2 border-blue-100 pt-6">
                  {/* <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="w-full sm:w-auto px-6 py-2.5 sm:py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg shadow-md transition-colors"
                  >
                    Save Changes
                  </button> */}

                <button
                  ype="submit"
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className={`w-full sm:w-auto px-6 py-2.5 sm:py-3 ${
                        isLoading ? 'bg-gray-400' : 'bg-teal-600 hover:bg-teal-700'
                      } text-white font-medium rounded-lg shadow-md transition-colors`}
                    >
                      {isLoading ? 'Saving...' : 'Save Changes'}
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