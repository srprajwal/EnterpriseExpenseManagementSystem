import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Auth/LoginPage";
import Register from "./pages/Auth/Register";
import ForgotPassword from "./pages/Auth/ForgotPasswordPage";
import ResetPassword from './pages/Auth/ResetPasswordPage';

function AppRouter() {
  return (
    <Routes>
      {/* Default route redirects to /login */}
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

    </Routes>
  );
}

export default AppRouter;
