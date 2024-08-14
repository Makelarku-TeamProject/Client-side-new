import React, { useState } from 'react';
import Sidebar from './SidebarComponent';
import TopNav from './TopnavComponent';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../Admin/app.css'

const Layout = ({ children }) => {
  const [sidebarActive, setSidebarActive] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarActive(!sidebarActive);
  };

  const handleOverlayClick = () => {
    setSidebarActive(false);
  };

  return (
    <div className="d-flex">
      <div className={`overlay w-100 vh-100 position-fixed ${sidebarActive ? '' : 'd-none'}`} id="sidebar-overlay" onClick={handleOverlayClick}></div>
      <Sidebar active={sidebarActive} />
      <div className="col-md-9 col-lg-10 ml-md-auto px-0 ms-md-auto">
        <TopNav onSidebarToggle={handleSidebarToggle} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
