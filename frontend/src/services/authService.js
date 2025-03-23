import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/"; // Backend API base URL for authentication

const register = (name, email, password, role) =>
  axios
    .post(API_URL + "register", { name, email, password, role })
    .then((response) => response.data);

const login = (email, password) =>
  axios
    .post(API_URL + "login", { email, password })
    .then((response) => response.data);

const forgotPassword = (email) =>
  axios
    .post(API_URL + "forgot-password", { email })
    .then((response) => response.data);

const resetPassword = (token, newPassword) =>
  axios
    .post(API_URL + "reset-password", { token, newPassword })
    .then((response) => response.data);

const authService = {
  register,
  login,
  forgotPassword,
  resetPassword,
};

export default authService;
