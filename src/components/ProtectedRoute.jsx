import React, { useContext, useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { GlobalContext } from '../context/GlobalContext';
import { jwtDecode } from 'jwt-decode';

const ProtectedRoute = ({ allowedRoles }) => {
  const { auth, setAuth } = useContext(AuthContext);
  const { token } = useContext(GlobalContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);

        if (decodedToken.exp * 1000 > Date.now()) {
          setAuth({ token, role: decodedToken.role });
        } else {
          console.log('Token expired, removing token from storage');
          localStorage.removeItem('token');
        }
      } catch (error) {
        console.error('Invalid token', error);
        localStorage.removeItem('token'); // Clear invalid token from storage
      }
    }
    setIsLoading(false);
  }, [token, setAuth]);
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!auth) {
    console.log('User not authenticated, redirecting to login');
    return <Navigate to="/login" />;
  }

  if (allowedRoles && !allowedRoles.includes(auth.role)) {
    console.log('User role not allowed, redirecting to 404');
    return <Navigate to="/404" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
