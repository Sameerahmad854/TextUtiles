import React from "react";
import { Link } from "react-router-dom";

function Navbar({ title, mode, toggleMode, changeThemeColor }) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#">TextUtils</a> */}

        <Link className="navbar-brand" to="/">
          {title}
        </Link>

        {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link" href="#">About</a></li>
            </ul> */}
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            {/* About Link */}
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* ------------------- Dark/Light Mode Toggle ------------------- */}
        <button onClick={toggleMode} className="btn btn-secondary mx-2">
          {mode === "light" ? "Enable Dark Mode" : "Enable Light Mode"}
        </button>

        {/* ------------------- Theme Color Buttons ------------------- */}
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
            style={{ backgroundColor: "orange", color: "black" }}
            onClick={() => changeThemeColor("orange")}
          >
            orange
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
