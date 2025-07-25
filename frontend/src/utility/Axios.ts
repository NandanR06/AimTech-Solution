import axios from "axios";

const url =
  import.meta.env.VITE_BASE_URL === "Development"
    ? "http://localhost:3000"
    : "https://aimtech-zro3.onrender.com";
const AxiosInstance = axios.create({
  baseURL: url,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});



export default AxiosInstance;
