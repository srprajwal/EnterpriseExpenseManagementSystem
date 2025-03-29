import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Auth/LoginPage";
import Register from "./pages/Auth/Register";
import ForgotPassword from "./pages/Auth/ForgotPasswordPage";
import ResetPassword from './pages/Auth/ResetPasswordPage';

import EmployeeDashboard from "./pages/EmployeeDashboard/EmployeeDashboard";
import MyExpenses from "./pages/EmployeeDashboard/MyExpenses";
import CreateExpense from "./pages/EmployeeDashboard/CreateExpense";
import ExpenseHistory from "./pages/EmployeeDashboard/ExpenseHistory";
import Settings from "./pages/Layout/Settings";

import ManagerDashboard from "./pages/ManagerDashboard/ManagerDashboard";
import ExpenseRequestsPage from "./pages/ManagerDashboard/ExpenseRequestsPage";
import TeamMembersPage from "./pages/ManagerDashboard/TeamMembersPage";
import AnalyticsPage from "./pages/ManagerDashboard/AnalyticsPage";

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
      <Route path="/expenses" element={<MyExpenses />} />
      <Route path="/create-expense" element={<CreateExpense />} />
      <Route path="/expense-history" element={<ExpenseHistory />} />
      <Route path="/settings" element={<Settings />} />

      <Route path="/manager-dashboard" element={<ManagerDashboard />} />
      <Route path="/expense-requests" element={<ExpenseRequestsPage />} />
      <Route path="/team" element={<TeamMembersPage />} />
      <Route path="/analytics" element={<AnalyticsPage />} />


    </Routes>
  );
}

export default AppRouter;
