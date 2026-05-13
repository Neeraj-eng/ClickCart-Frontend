import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_URL,

  withCredentials : true
});

delete API.defaults.headers.common["Authorization"];

export default API;
   