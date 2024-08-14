import React from 'react';
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';


const TopnavComponent = ({ onSidebarToggle }) => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleLogout = (e) => {
    e.preventDefault();
    logout(); // Call the logout function from context
    navigate('/login'); // Redirect to login page
  };
  return (
    <nav className="w-100 d-flex px-4 py-2 mb-4 shadow-sm">
      <button className="btn py-0 d-lg-none" id="open-sidebar" onClick={onSidebarToggle}>
        <span className="bi bi-list text-primary h3"></span>
      </button>
      <div className="dropdown ml-auto">
        <button className="btn py-0 d-flex align-items-center" id="logout-dropdown" data-toggle="dropdown" aria-expanded="false">
          <span className="bi bi-person text-primary h4"></span>
          <span className="bi bi-chevron-down ml-1 mb-2 small"></span>
        </button>
        <div className="dropdown-menu dropdown-menu-right border-0 shadow-sm" aria-labelledby="logout-dropdown">
        <a className="dropdown-item" href="#" onClick={handleLogout}>Logout</a>
        </div>
      </div>
    </nav>
  );
};

export default TopnavComponent;
