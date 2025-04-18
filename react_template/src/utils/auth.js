// src/utils/auth.js
let currentUser = null;

export const login = async (email, password) => {
  // TODO: Implement actual authentication
  currentUser = {
    id: '1',
    name: 'John Doe',
    email
  };
  return currentUser;
};

export const register = async (userData) => {
  // TODO: Implement actual registration
  currentUser = {
    id: '1',
    ...userData
  };
  return currentUser;
};

export const logout = () => {
  currentUser = null;
};

export const getCurrentUser = () => {
  return currentUser;
};