import axios from "axios";

const API = axios.create({
<<<<<<< HEAD
  baseURL:import.meta.env.VITE_API_URL,

  withCredentials : true
  // baseURL : "http://skillful-dream-production.up.railway.app/api"
=======
  baseURL: import.meta.env.VITE_URL,

  withCredentials : true
>>>>>>> 90cbd852b20b11f298963ea7101ca2e0feb966e7
});

delete API.defaults.headers.common["Authorization"];

export default API;
   