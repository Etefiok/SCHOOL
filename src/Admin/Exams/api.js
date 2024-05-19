import axios from 'axios';

const API_URL = 'http://localhost:5000/auth/Economics-exam';

export const saveQuestions = async (questions) => {
  try {
    const response = await axios.post(API_URL, { questions });
    return response.data;
  } catch (error) {
    console.error('Error saving questions:', error);
    throw error;
  }
};

export const getQuestions = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error retrieving questions:', error);
    throw error;
  }
};
