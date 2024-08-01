import React from "react";
import { Outlet,NavLink } from "react-router-dom";
const Nav = () => {
   return (
    < >
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                 < NavLink to="/home" className="nav-link active" aria-current="page">
                  Home</NavLink>
                
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About</NavLink>
                
              </li>
              <li className="nav-item">
                <NavLink to="/Blog" className="nav-link">
                  Blog</NavLink>
                
              </li>
              <li className="nav-item">
                <NavLink to="/Contact" className="nav-link">
                  Contact</NavLink>
                
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
   );
};
export default Nav;