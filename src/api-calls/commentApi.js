// commentApi.js
import axios from 'axios';

// Base URL for posts API endpoints.
// Adjust the base URL according to your configuration.
const API_BASE_URL = 'http://localhost:8080/api/posts';

/**
 * Creates a new comment or reply for a given post.
 * @param {number|string} postId - The ID of the post to add a comment to.
 * @param {Object} commentData - The comment request payload (should match CreateCommentRequest structure).
 * @returns {Promise<Object>} A promise that resolves with the updated post data (PostResponse).
 */
export const createComment = async (postId, commentData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/${postId}/comments`, commentData);
    return response.data;
  } catch (error) {
    // Optionally, implement more robust error handling here.
    throw error;
  }
};
