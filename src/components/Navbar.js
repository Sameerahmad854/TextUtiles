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

        {/* Navbar collapse for responsive menu */}
        <div className="collapse navbar-collapse">
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
        </div>

        {/* Dark/Light toggle */}
        <button onClick={toggleMode} className="btn btn-secondary mx-2">
          {mode === "light" ? "Enable Dark Mode" : "Enable Light Mode"}
        </button>

        {/* Theme color buttons */}
        <div className="d-flex">
          <button
            className="btn mx-1"
            style={{ backgroundColor: "green", color: "white" }}
            onClick={() => changeThemeColor("green")}
          >
            Green
          </button>
          <button
            className="btn mx-1"
            style={{ backgroundColor: "brown", color: "white" }}
            onClick={() => changeThemeColor("brown")}
          >
            Brown
          </button>
          <button
            className="btn mx-1"
            style={{ backgroundColor: "blue", color: "white" }}
            onClick={() => changeThemeColor("blue")}
          >
            Blue
          </button>
          <button
            className="btn mx-1"
            style={{ backgroundColor: "yellow", color: "black" }}
            onClick={() => changeThemeColor("yellow")}
          >
            Yellow
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
