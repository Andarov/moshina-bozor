import axios from "axios";
const API = "https://moshina-bozor-backend-rest-api.onrender.com/api/";

const axiosInstance = axios.create({
  baseURL: API, 
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
