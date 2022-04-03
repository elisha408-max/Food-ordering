import React from "react";
import Logo from "../assets/logo.png";
import { BsCartPlus } from "react-icons/bs";
import cart from "../assets/cart.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart: cartValue } = useSelector((state) => state.product);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark header">
      <div className="container-fluid">
        <Link to="/">
          <img
            src={Logo}
            alt="Image brand"
            className="img-fluid"
            style={{ height: "50px" }}
          />
        </Link>
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
          <form className="d-flex ms-auto me-5">
            <button type="button" className="btn btn-dark">
              About
            </button>
            <button
              type="button"
              className="btn btn-outline-light rounded-pill ms-3 logIn"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
            <button
              type="button"
              className="btn btn-light rounded-pill ms-3 signUp"
            >
              Sign Up
            </button>
            {/* <div>
              <BsCartPlus className="reactIcon" />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {2}
                <span className="visually-hidden">unread messages</span>
              </span>
            </div> */}

            <Link to="cart">
              <div data-v-02906ae3="" className="image-wrapper">
                <img
                  data-v-02906ae3=""
                  alt="Cart"
                  src={cart}
                  className="cart-img ms-3"
                />
                <span data-v-02906ae3="" className="cartsize" img-fluid>
                  {cartValue.length}
                </span>
              </div>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
