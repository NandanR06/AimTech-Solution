import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://aimtech-zro3.onrender.com",
  withCredentials: true, 
  headers: {
    "Content-Type": "application/json",
  },
});

export default AxiosInstance;
