import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ token: null, role: null });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    const role = localStorage.getItem("userRole");

    if (token) {
      setAuth({ token, role });
    }
  }, []);

  const login = (token, role) => {
    localStorage.setItem("jwt", token);
    localStorage.setItem("userRole", role);
    setAuth({ token, role });
    navigate("/dashboard");
  };

  const logout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("userRole");
    setAuth({ token: null, role: null });
    navigate("/login");
  };

  const value = {
    auth,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
