import React from "react";
import { NavLink } from "react-bootstrap";

import logo from "../../../../../Image_Icon/Group 33069.png";

const Navbar = () => {
  return (
    <div className="bg-light">
      <nav className="navbar navbar-expand-lg navbar-light container">
        <div className="container-fluid  justify-content-evenly d-flex flex-wrap">
          <NavLink className="navbar-brand" to="/home">
            <img src={logo} alt="" style={{ height: "60px" }} />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center "
            id="navbarNav"
          >
            <ul className="navbar-nav ">
              <li className="nav-item me-5">
                <NavLink className="nav-link " aria-current="page" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item me-5">
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item me-5">
                <NavLink className="nav-link" to="/projects">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item me-5">
                <NavLink className="nav-link me-5" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item me-5">
                <NavLink className="nav-link me-5" to="/dashboard">
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link btn btn-dark text-white"
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
