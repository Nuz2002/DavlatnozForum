// /src/api-calls/messageApi.js
import apiClient from './apiClient';

/**
 * Sends a message to an existing conversation.
 *
 * @param {number|string} conversationId - The ID of the conversation.
 * @param {string} text - The text of the message to send.
 * @returns {Promise<Object>} - A promise that resolves to the MessageDTO returned by the backend.
 */
export const sendMessage = async (conversationId, text) => {
  try {
    const response = await apiClient.post(`/messages/${conversationId}/send`, text, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
