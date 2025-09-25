import axios from "axios";

const API = axios.create({ baseURL: " https://elmer-nonsupposed-debatably.ngrok-free.dev/api" });

// Attach token automatically if logged in
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
