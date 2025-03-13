import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/common/Login";

// import Register from "./pages/common/Register";
// import ForgotPassword from "./pages/common/ForgotPassword";
// import Dashboard from "./pages/common/Dashboard";
// import NotFound from "./pages/common/NotFound";

// function AppRouter() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         {/* <Route path="/register" element={<Register />} /> */}
//         {/* <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="*" element={<NotFound />} /> */}
//       </Routes>
//     </Router>
//   );
// }

function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Default route redirects to /login */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
