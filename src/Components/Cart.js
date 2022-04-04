import React from "react";
import { NavLink } from "react-router-dom";
import Logo2 from "../assets/logo-2.jpg";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import { removeFromCart } from "../redux/actions/cart";
import Totalamount from "./Totalamount";
import Form from "./Form.js";
import Header from "./Header";
import Navbar from "./Navbar";
const Cart = () => {
  const dispatch = useDispatch();
  const { cart: cartValue } = useSelector((state) => state.product);
  console.log(cartValue, "cartValue");
  let Totalamount = 0;

  const [quantity, setQuantity] = React.useState(0);

  return (
    <>
      <Header />
      <Navbar />
      <div className="container">
        <div className="m-3">
          <div className="row">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navItems">
              <li className="nav-item navItems">
                <NavLink
                  to=""
                  className="nav-link "
                  aria-current="page"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "red",
                          fontWeight: "700",
                          fontSize: "20px",
                        }
                      : { color: "black", fontWeight: "normal" }
                  }
                >
                  CART
                </NavLink>
              </li>
              <li className="nav-item navItems">
                <NavLink
                  to="payment"
                  className="nav-link"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "red",
                          fontWeight: "700",
                          fontSize: "20px",
                        }
                      : { color: "black", fontWeight: "normal" }
                  }
                >
                  PAYMENT
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="row mt-3">
            {/* <div className="col-5 ">dfjral</div> */}
            <div className="col-6">
              <div className="card" style={{ padding: "20px" }}>
                <h3 className="fw-bold ">My Shopping Cart</h3>
                {cartValue.map((item, index) => {
                  let subTotal = item.price * item.quantity;
                  return (
                    <div className="row mb-5 mt-3">
                      <div className="col-6">
                        <img
                          src={Logo2}
                          className="img-fluid"
                          alt="food image"
                        />
                      </div>

                      <div className="col-6">
                        {" "}
                        <div className="ms-3">
                          <h5>{item.name}</h5>
                          <p>NRs. {item.price}</p>
                          <span className="d-none">
                            {(Totalamount = Totalamount + subTotal)}
                          </span>
                          <div
                            className="btn-group buttonStyling"
                            role="group"
                            aria-label="Basic outlined example"
                          >
                            <button
                              type="button"
                              className="btn btn-outline-dark"
                              onClick={() => {
                                if (quantity > 0) {
                                  setQuantity(quantity - 1);
                                }
                              }}
                            >
                              -
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-dark"
                            >
                              {quantity}
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-dark"
                              onClick={() => {
                                setQuantity(quantity + 1);
                              }}
                            >
                              +
                            </button>
                            <AiOutlineDelete
                              className="ms-5 text-danger"
                              onClick={() => dispatch(removeFromCart(item.id))}
                              style={{ fontSize: "24px" }}
                            />
                          </div>

                          <div className="text-success mt-3">
                            Quantity:{item.quantity}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="row mt-3">
                <div className="card">
                  <h3 className="fw-bold ">Order Summary</h3>
                  <p className="mt-2 text-success">
                    {" "}
                    <span className="me-3">Subtotal:</span>{" "}
                    {` Rs. ${Totalamount}`}{" "}
                  </p>
                  <h5>
                    {" "}
                    <span className="me-3">Total Amount:</span>
                    {`Rs.  ${Totalamount}`}{" "}
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-6 ">
              <div className="card">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
