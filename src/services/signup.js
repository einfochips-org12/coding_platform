import axios from 'axios';

const API_URL = 'https://api.example.com/signup'; // Replace with your actual API URL
const signup = async (gid, email, password) => {
  try {
    const response = await axios.post(API_URL, {
      gid,
      email,
      password,
    });
    return response.data; // Assuming the API returns the user data
  } catch (error) {
    console.error('Error during signup:', error);
    throw error;
  }
};