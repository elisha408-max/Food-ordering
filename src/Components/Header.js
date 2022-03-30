import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
          <form className="d-flex ms-auto">
            <button type="button" className="btn btn-dark">
              About
            </button>
            <button
              type="button"
              className="btn btn-outline-light rounded-pill ms-3 logIn"
            >
              Login
            </button>
            <button type="button" className="btn btn-light rounded-pill ms-3 signUp">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
