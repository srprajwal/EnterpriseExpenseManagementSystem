import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Auth/LoginPage";
import Register from "./pages/Auth/Register";
import ForgotPassword from "./pages/Auth/ForgotPasswordPage";
import ResetPassword from './pages/Auth/ResetPasswordPage';

import EmployeeDashboard from "./pages/EmployeeDashboard/EmployeeDashboard";
import ManagerDashboard from "./pages/ManagerDashboard/ManagerDashboard";

function AppRouter() {
  return (
    <Routes>
      {/* Default route redirects to /login */}
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />


      <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
      <Route path="/manager-dashboard" element={<ManagerDashboard />} />

    </Routes>
  );
}

export default AppRouter;
