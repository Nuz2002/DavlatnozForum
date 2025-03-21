// /src/api-calls/conversationApi.js
import apiClient from './apiClient';

/**
 * Starts or fetches a conversation with the target user.
 * @param {string} targetEmail - The email of the target user.
 * @returns {Promise<Object>} A promise that resolves to the ConversationDTO.
 */
export const startConversation = async (targetEmail) => {
  try {
    const response = await apiClient.post('/messages/start', null, {
      params: { targetEmail },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Retrieves conversation metadata, optionally including messages.
 * @param {number|string} conversationId - The ID of the conversation.
 * @param {boolean} [includeMessages=false] - Whether to include messages.
 * @returns {Promise<Object>} A promise that resolves to the ConversationDTO.
 */
export const getConversation = async (conversationId, includeMessages = false) => {
  try {
    const response = await apiClient.get(`/messages/${conversationId}`, {
      params: { includeMessages },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Retrieves a page of messages for the given conversation.
 * @param {number|string} conversationId - The ID of the conversation.
 * @param {number} [page=0] - The page number (0-indexed).
 * @param {number} [size=20] - The number of messages per page.
 * @returns {Promise<Array>} A promise that resolves to a list of MessageDTO.
 */
export const getMessagesPage = async (conversationId, page = 0, size = 20) => {
  try {
    const response = await apiClient.get(`/messages/${conversationId}/messages`, {
      params: { page, size },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
