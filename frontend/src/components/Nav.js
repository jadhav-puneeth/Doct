import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={styles.navbar}>
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#" style={styles.brand}>
            <img src="/1.jpeg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/> DOCTOR BOOKING
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={styles.toggler}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={styles.navList}>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Doctor-Stats" style={styles.navLink}>
                  Doctor-Stats
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/Bookings" style={styles.navLink}>
                  Bookings
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Total-Earnings" style={styles.navLink}>
                  Total-Earnings
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Doctor-Earnings" style={styles.navLink}>
                  Doctor-Earnings
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Top-10-Doctors" style={styles.navLink}>
                  Top-10-Doctors
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Services" style={styles.navLink}>
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/EarningsByServiceCategory" style={styles.navLink}>
                  Earnings-By-Service-Category
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Table-data" style={styles.navLink}>
                  Table-Data
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Register" style={styles.navLink}>
                  Login/SignUp
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

const styles = {
  navbar: {
    backgroundColor: 'black',
  },
  brand: {
    color: '#fff',
    textDecoration: 'none',
  },
  toggler: {
    border: 'none',
  },
  navList: {
    paddingLeft: '15px',
  },
  navLink: {
    color: '#fff',
    padding: '10px',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    marginRight: '10px',
    borderBottom: '2px solid transparent',
    transition: 'border-bottom 0.3s ease',
  },
};

export default Nav;
