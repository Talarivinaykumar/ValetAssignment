import axios from 'axios';
import { Platform } from 'react-native';

// Using DummyJSON for assessment requirements
const baseURL = 'https://dummyjson.com';

const apiClient = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
