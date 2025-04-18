// src/utils/api.js
const API_URL = 'http://localhost:3000/api';

export const fetchPosts = async () => {
  // TODO: Implement actual API call
  return [];
};

export const createPost = async (postData) => {
  // TODO: Implement actual API call
  return { id: '1', ...postData };
};

export const getLocations = async () => {
  // TODO: Implement actual API call
  return [];
};

export const sendMessage = async (roomId, message) => {
  // TODO: Implement actual API call
  return { id: '1', content: message, timestamp: new Date() };
};