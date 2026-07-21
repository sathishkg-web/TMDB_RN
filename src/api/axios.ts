import axios from 'axios';
export const api = axios.create({
  baseURL: process.env.TMDB_BASE_URL,
  timeout: 30000,
  headers: {
    Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    Accept: 'application/json',
  },
});
