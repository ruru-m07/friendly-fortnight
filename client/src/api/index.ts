import axios from "axios";
import { LocalStorage } from "../utils";

const apiClient = axios.create({
  baseURL: "http://localhost:3005",
  withCredentials: true,
  timeout: 120000,
});

const token = localStorage.getItem("token");

// Add an interceptor to set authorization header with user token before requests
apiClient.interceptors.request.use(
  function (config) {
    // Retrieve user token from local storage
    // Set authorization header with bearer token
    // config.headers["auth-token"] = token;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);


// API functions for different actions
const loginUser = (data: { email: string; password: string, }) => {
  return apiClient.post("/user/login", data, {
    withCredentials: false,
  });
};

const whoami = () => {
  return apiClient.get("/user/whoami", {
    headers: {
      "auth-token": token,
    },
  });
};


export {
  whoami,
  loginUser
};