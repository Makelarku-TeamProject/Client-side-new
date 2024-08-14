import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProtectedRoute from "../components/ProtectedRoute";
import CustomerPage from "../pages/CustomerPage";
import NotFoundComponent from "../components/NotfoundComponent";
import CategoriesPage from "../pages/CategoriesPage";
import HousesPage from "../pages/HousesPage";
import SlidersPage from "../pages/SliderPage";
import MemberPage from "../pages/MemberPage";
import DashboardPage from "../pages/DashboardPage";

const AppRouter = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Shared page for admin */}
      <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/sliders" element={<SlidersPage />} />
      </Route>

       {/* Shared page for admin  && member */}
      <Route element={<ProtectedRoute allowedRoles={["admin","member"]} />}>
        <Route path="/houses" element={<HousesPage />} />
      </Route>

      {/* Shared page for member */}
      <Route element={<ProtectedRoute allowedRoles={["member"]} />}>
        <Route path="/member-dashboard" element={<MemberPage />} />
      </Route>

      {/* Protected route for customer only */}
      <Route element={<ProtectedRoute allowedRoles={["customer"]} />}>
        <Route path="/customer-dashboard" element={<CustomerPage />} />
      </Route>

      {/* Catch-all for 404 errors */}
      <Route path="/404" element={<NotFoundComponent />} />
      <Route path="*" element={<Navigate to="/404" />} />

      {/* Redirect to login by default */}
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRouter;
