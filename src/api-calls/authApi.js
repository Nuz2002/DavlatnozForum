// authApi.js
import axios from 'axios';

// You can change this to your actual API base URL.
const API_BASE_URL = 'http://localhost:8080/api/auth';

/**
 * Registers a new user.
 * @param {Object} registrationData - The registration request payload.
 * @returns {Promise<Object>} - The response data containing registration details.
 */
export const register = async (registrationData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, registrationData);
    return response.data;
  } catch (error) {
    // You may want to handle or log error in a more sophisticated way.
    throw error;
  }
};

/**
 * Logs in a user.
 * @param {Object} loginData - The login request payload.
 * @returns {Promise<Object>} - The response data containing the login details.
 */
export const login = async (loginData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, loginData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Refreshes the authentication token.
 * @param {string} refreshToken - The refresh token.
 * @returns {Promise<Object>} - The response data containing new token details.
 */
export const refreshToken = async (refreshToken) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/refresh`, { refreshToken });
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Logs out the user by revoking the refresh token.
 * @param {string} refreshToken - The refresh token.
 * @returns {Promise<string>} - A message indicating the logout status.
 */
export const logout = async (refreshToken) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/logout`, { refreshToken });
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Verifies the user's email.
 * @param {string} token - The email verification token.
 * @returns {Promise<string>} - A message indicating the verification result.
 */
export const verifyEmail = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/verify-email`, {
      params: { token },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Sends a forgot password request.
 * @param {Object} forgotPasswordData - The forgot password request payload.
 * @returns {Promise<string>} - A message indicating the status of the request.
 */
export const forgotPassword = async (forgotPasswordData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/forgot-password`, forgotPasswordData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Resets the user's password.
 * @param {Object} resetPasswordData - The reset password request payload.
 * @returns {Promise<string>} - A message indicating the reset status.
 */

export const resetPassword = async (resetPasswordData) => {
  try {
    console.log("Sending reset password request:", resetPasswordData);
    const response = await axios.post(`${API_BASE_URL}/reset-password`, resetPasswordData);
    console.log("Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Reset password error:", error.response?.data || error.message);
    throw error;
  }
};

