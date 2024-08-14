import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Sidebar = ({ active }) => {
  const { auth } = useContext(AuthContext);
  const userRole = auth?.role;
  const navigate = useNavigate();

  return (
    <div className={`col-md-3 col-lg-2 px-0 position-fixed h-100 bg-white shadow-sm sidebar ${active ? 'active' : ''}`} id="sidebar">
      <h5 className="bi bi-house-door text-primary d-flex my-4 justify-content-center text-sm"> Makelarku</h5>
      <div className="list-group rounded-0">
        <a href="" onClick={() => navigate("/dashboard")} className="list-group-item list-group-item-action active border-0 d-flex align-items-center">
          <span className="bi bi-border-all"></span>
          <span className="ml-2">Dashboard</span>
        </a>
        {userRole === 'admin' && (
          <a href="" onClick={() => navigate("/categories")} className="list-group-item list-group-item-action border-0 align-items-center">
            <span className="bi bi-box"></span>
            <span className="ml-2">Category</span>
          </a>
        )}
        <a href="#" onClick={() => navigate("/houses")} className="list-group-item list-group-item-action border-0 align-items-center">
          <span className="bi bi-box"></span>
          <span className="ml-2">House</span>
        </a>
        {userRole === 'admin' && (
          <a href="" onClick={() => navigate("/sliders")} className="list-group-item list-group-item-action border-0 align-items-center">
            <span className="bi bi-box"></span>
            <span className="ml-2">Slider</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
