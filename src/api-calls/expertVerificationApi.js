// expertVerificationApi.js
import axios from 'axios';

// Base URL for the expert verification endpoint
const API_BASE_URL = 'http://localhost:8080/api/expert-verification';

/**
 * Submits an expert verification application.
 *
 * @param {Object} applicationData - The application data.
 * @param {string} applicationData.firstName - The user's first name.
 * @param {string} applicationData.lastName - The user's last name.
 * @param {string} applicationData.dateOfBirth - The user's date of birth (YYYY-MM-DD).
 * @param {string} applicationData.professionalBio - A short professional bio.
 * @param {File} [applicationData.profilePhoto] - An optional profile photo file.
 * @param {File} [applicationData.governmentId] - An optional government ID file.
 * @param {File} [applicationData.qualifications] - An optional qualifications file.
 * @returns {Promise<Object>} - The response data from the backend.
 */
export const submitApplication = async (applicationData) => {
  try {
    const formData = new FormData();
    formData.append('firstName', applicationData.firstName);
    formData.append('lastName', applicationData.lastName);
    formData.append('dateOfBirth', applicationData.dateOfBirth);
    formData.append('professionalBio', applicationData.professionalBio);
    
    // Append optional files if provided
    if (applicationData.profilePhoto) {
      formData.append('profilePhoto', applicationData.profilePhoto);
    }
    if (applicationData.governmentId) {
      formData.append('governmentId', applicationData.governmentId);
    }
    if (applicationData.qualifications) {
      formData.append('qualifications', applicationData.qualifications);
    }

    // Post the form data to the expert verification endpoint.
    const response = await axios.post(API_BASE_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    // Consider handling error responses or logging them appropriately.
    throw error;
  }
};
