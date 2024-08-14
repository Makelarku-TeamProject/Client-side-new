import { useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from '../../../context/AuthContext';

const SectionNavbar = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  console.log('a')
  const handleLogout = (e) => {
    e.preventDefault();
    logout(); // Call the logout function from context
    navigate('/login'); // Redirect to login page
  };
  return (
    <section id="navbar">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand">
          <img
            src="https://grbhouse.cdn.prismic.io/grbhouse/4acba811-be93-4e0c-ba3f-46e2fd7d6c20_logo-house.svg"
            width="80"
            height="40"
            alt="House Logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleLogout}>
                <i className="bi bi-box-arrow-right"> Logout</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default SectionNavbar;
