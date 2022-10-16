import axios from 'axios';

const client = axios.create({
  baseURL: import.meta.env.VITE_SPOTIFY_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
  // withCredentials: true,
});

const http = client;
export default http;
