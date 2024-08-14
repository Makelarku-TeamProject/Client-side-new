import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import userService from "../api/userService";
import { GlobalContext } from "../context/GlobalContext";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { token, setToken } = useContext(GlobalContext);

  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setAuth({ token, role: decodedToken.role });
        console.log("Token found in GlobalContext:", token);
        console.log("Decoded token role:", decodedToken.role);
      } catch (error) {
        console.error("Error decoding token from GlobalContext:", error);
      }
    }
  }, [token]);

  const login = async (credentials) => {
    setLoading(true);
    setError(null);
    try {
      const response = await userService.login(
        credentials.email,
        credentials.password
      );
      const { token } = response.data;
      const decodedToken = jwtDecode(token);
      localStorage.setItem("token", token);
      setToken(token);
      setAuth({ token, role: decodedToken.role });

      console.log("Login successful:", { token, role: decodedToken.role });

      switch (decodedToken.role) {
        case "admin":
          navigate("/dashboard");
          break;
        case "member":
          navigate("/member-dashboard");
          break;
        case "customer":
          navigate("/customer-dashboard");
          break;
        default:
          console.error("Login successful, but no role found");
      }
    } catch (err) {
      console.error("Error logging in:", err);
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  const register = async (credentials) => {
    setLoading(true);
    setError(null);
    try {
      await userService.register(
        credentials.username,
        credentials.email,
        credentials.password,
        credentials.role
      );
      toast.success("Registration successful!");
    } catch (error) {
      console.error("Error registering:", error);
      setError("Registration failed");
      toast.error("Registration failed!");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setAuth(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, login, register, logout, loading, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
