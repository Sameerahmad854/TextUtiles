import React from "react";
import { Link } from "react-router-dom";

function Navbar({ title, mode, toggleMode, changeThemeColor }) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        {/* Brand */}
        <Link className="navbar-brand" to="/">
          {title}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>

          <button
            onClick={toggleMode}
            className="btn btn-outline-secondary mx-2"
          >
            {mode === "light" ? "Dark Mode" : "Light Mode"}
          </button>

          <div className="d-flex align-items-center">
            {/* <button
              className="btn btn-primary mx-1"
              onClick={() => changeThemeColor("primary")}
            ></button> */}

            {/* <button
              className="btn btn-success mx-1"
              onClick={() => changeThemeColor("success")}
            ></button> */}
            {/* 
            <button
              className="btn btn-danger mx-1"
              onClick={() => changeThemeColor("danger")}
            ></button> */}

            {/* <button
              className="btn btn-warning mx-1"
              onClick={() => changeThemeColor("warning")}
            ></button> */}

            {/* <button
              className="btn btn-info mx-1"
              onClick={() => changeThemeColor("info")}
            ></button> */}

            {/* <button
              className="btn btn-dark mx-1"
              onClick={() => changeThemeColor("dark")}
            ></button> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
