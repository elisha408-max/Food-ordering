import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light header">
        <div className="container">
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <NavLink
                  to="/"
                  className="nav-link "
                  aria-current="page"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "red",
                          fontWeight: "600",
                        }
                      : { color: "black", fontWeight: "normal" }
                  }
                >
                  Break Your Fast
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="lunch"
                  className="nav-link"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "red",
                          fontWeight: "600",
                        }
                      : { color: "black", fontWeight: "normal" }
                  }
                >
                  Time For Lunch
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="snack"
                  className="nav-link "
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "red",
                          fontWeight: "600",
                        }
                      : { color: "black", fontWeight: "normal" }
                  }
                >
                  Can I Have Snacks
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="dinner"
                  className="nav-link "
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "red",
                          fontWeight: "600",
                        }
                      : { color: "black", fontWeight: "normal" }
                  }
                >
                  Dinner
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="burger"
                  className="nav-link "
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "red",
                          fontWeight: "600",
                        }
                      : { color: "black", fontWeight: "normal" }
                  }
                >
                  Burgers and Beverages
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
