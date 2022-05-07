import axios from 'axios';


const BASE_DOMAIN = process.env.NEXT_PUBLIC_DOMAIN_MOCK;

const api = axios.create({
  baseURL: BASE_DOMAIN,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});
export default api;
