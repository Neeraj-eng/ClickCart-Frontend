import axios from "axios";

const API = axios.create({
  baseURL:import.meta.env.VITE_API_URL,

  withCredentials : true
  // baseURL : "http://skillful-dream-production.up.railway.app/api"
});

delete API.defaults.headers.common["Authorization"];

export default API;
   