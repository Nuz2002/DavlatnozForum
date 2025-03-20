// profileApi.js
import axios from 'axios';

// Base URL for the profile endpoints.
const API_BASE_URL = 'http://localhost:8080/api/profile';

/**
 * Retrieves the current user's profile.
 * @returns {Promise<Object>} A promise that resolves to the ProfileDTO.
 */
export const getUserProfile = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Updates the current user's profile.
 * @param {Object} profileData - The profile data to update.
 * @returns {Promise<Object>} A promise that resolves to the updated ProfileDTO.
 */
export const updateUserProfile = async (profileData) => {
  try {
    const response = await axios.put(API_BASE_URL, profileData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Uploads or changes the user's profile picture.
 * @param {File} file - The image file to upload.
 * @returns {Promise<string>} A promise that resolves to a message containing the image URL.
 */
export const uploadProfilePicture = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post(`${API_BASE_URL}/picture`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Deletes the user's profile picture.
 * @returns {Promise<string>} A promise that resolves to a confirmation message.
 */
export const deleteProfilePicture = async () => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/picture`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
