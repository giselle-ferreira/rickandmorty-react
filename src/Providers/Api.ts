import axios from 'axios';

export const Api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
})

