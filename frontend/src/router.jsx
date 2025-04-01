import { Routes, Route, Navigate } from "react-router-dom";
import IntroPage from './pages/Auth/IntroPage';
import Login from "./pages/Auth/LoginPage";
import Register from "./pages/Auth/Register";
import ForgotPassword from "./pages/Auth/ForgotPasswordPage";
import ResetPassword from './pages/Auth/ResetPasswordPage';

import EmployeeDashboard from "./pages/EmployeeDashboard/EmployeeDashboard";
import CreateExpense from "./pages/EmployeeDashboard/createexpenses";
import MyExpense from "./pages/EmployeeDashboard/MyExpense";
import Approvals from "./pages/EmployeeDashboard/Approvals";
import Settings from "./pages/EmployeeDashboard/Settings";
import Profile from "./pages/EmployeeDashboard/Profile";


import ManagerDashboard from "./pages/ManagerDashboard/ManagerDashboard";
import ExpenseRequestsPage from "./pages/ManagerDashboard/ExpenseRequestsPage";
import TeamMembersPage from "./pages/ManagerDashboard/TeamMembersPage";
import AnalyticsPage from "./pages/ManagerDashboard/AnalyticsPage";
import ManagerSettings from "./pages/ManagerDashboard/ManagerSettings";
import ManagerProfile from "./pages/ManagerDashboard/ManagerProfile";

function AppRouter() {
  return (
    <Routes>
      {/* Default route redirects to /login */}
      <Route path="/" element={<IntroPage/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />


      <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
      <Route path="/create-expense" element={<CreateExpense />} />
      <Route path="/myexpense" element={<MyExpense />} />
      <Route path="/approvals" element={<Approvals/>} />
      <Route path="/settings" element={<Settings/>} />
      <Route path="/profile" element={<Profile/>} />

      <Route path="/manager-dashboard" element={<ManagerDashboard />} />
      <Route path="/expense-requests" element={<ExpenseRequestsPage />} />
      <Route path="/team" element={<TeamMembersPage />} />
      <Route path="/analytics" element={<AnalyticsPage />} />
      <Route path="/manager-settings" element={<ManagerSettings/>} />
      <Route path="/manager-profile" element={<ManagerProfile />} />

    </Routes>
  );
}

export default AppRouter;
