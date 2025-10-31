import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "https://ribbonswithroses-backend-production-576b.up.railway.app/api
/api",
  withCredentials: true,
});

// ✅ Automatically attach JWT token from storage
instance.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token"); // or localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
