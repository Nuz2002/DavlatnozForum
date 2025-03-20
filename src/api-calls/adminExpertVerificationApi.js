// adminExpertVerificationApi.js
import axios from 'axios';

// Base URL for the Admin Expert Verifications API
const API_BASE_URL = 'http://localhost:8080/api/admin/expert-verifications';

/**
 * Retrieves all pending expert verification applications.
 * @returns {Promise<Array>} A promise that resolves to an array of pending applications.
 */
export const getPendingApplications = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pending`);
    return response.data;
  } catch (error) {
    // Optionally handle the error here or propagate it for centralized error handling
    throw error;
  }
};

/**
 * Retrieves details for a specific expert verification application.
 * @param {number|string} applicationId - The ID of the application.
 * @returns {Promise<Object>} A promise that resolves to the application details.
 */
export const getApplicationDetails = async (applicationId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${applicationId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Reviews an expert verification application by approving or rejecting it.
 * @param {number|string} applicationId - The ID of the application.
 * @param {boolean} approved - A flag indicating whether the application is approved.
 * @returns {Promise<Object>} A promise that resolves to the updated application review details.
 */
export const reviewApplication = async (applicationId, approved) => {
  try {
    // The approved parameter is sent as a query parameter.
    const response = await axios.post(`${API_BASE_URL}/${applicationId}/review`, null, {
      params: { approved }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
