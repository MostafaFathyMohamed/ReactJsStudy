import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        LOGO
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/" exact>
              All Tasks
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/task/create" exact>
              Create New Task
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/user/profile" exact>
              User
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
export default Nav;
