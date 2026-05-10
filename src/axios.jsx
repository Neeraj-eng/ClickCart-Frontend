import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_URL,
  // baseURL: "http://localhost:3000/api",

  withCredentials : true
});

delete API.defaults.headers.common["Authorization"];

export default API;
   