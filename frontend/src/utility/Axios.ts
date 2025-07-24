import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://aimtech-zro3.onrender.com",
  // baseURL : "http://localhost:3000",
    headers: {
        "Content-Type": "application/json",
    },

});

export default AxiosInstance;

