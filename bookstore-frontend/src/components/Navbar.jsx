import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [isCollapsed, setIsCollapsed] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/"><span className="text-success fw-bold">📚Book</span>
              <span className="text-white">Nerds</span></Link>

      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
        aria-controls="navbarNav"
        aria-expanded={!isCollapsed}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav ms-auto">
          {isLoggedIn ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={() => setIsCollapsed(true)}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/buy" onClick={() => setIsCollapsed(true)}>Buy Books</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sell" onClick={() => setIsCollapsed(true)}>Sell Books</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart" onClick={() => setIsCollapsed(true)}>Cart</Link>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-outline-light ms-lg-3 mt-2 mt-lg-0"
                  onClick={() => {
                    handleLogout();
                    setIsCollapsed(true);
                  }}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/register" onClick={() => setIsCollapsed(true)}>Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login" onClick={() => setIsCollapsed(true)}>Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
