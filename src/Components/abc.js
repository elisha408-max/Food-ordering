import React from "react";
import { NavLink } from "react-router-dom";
import Logo2 from "../assets/logo-2.jpg";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import { removeFromCart } from "../redux/actions/cart";
const Cart = () => {
  const dispatch = useDispatch();
  const { cart: cartValue } = useSelector((state) => state.product);
  console.log(cartValue, "cartValue");
  return (
    <>
      <div className="container">
        <div className="m-3">
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
        {cartValue.map((item, index) => {
          return (
            <div className="row mt-3" key={item.id}>
              <div className="col-7">
                <div className="card" style={{ padding: "20px" }}>
                  <h3 className="fw-bold ">My Shopping Cart</h3>
                  <div className="row mt-3">
                    <div className="col-4">
                      <img src={Logo2} className="img-fluid" />
                    </div>
                    <div className="col-8">
                      {" "}
                      <h5>{item.name}</h5>
                      <p>NRs. {item.price}</p>
                      <div
                        className="btn-group buttonStyling"
                        role="group"
                        aria-label="Basic outlined example"
                      >
                        <button
                          type="button"
                          className="btn btn-outline-dark"
                          // onClick={() => {
                          //   if (quantity > 0) {
                          //     setQuantity(quantity - 1);
                          //   }
                          // }}
                        >
                          -
                        </button>
                        <button type="button" className="btn btn-outline-dark">
                          {3}
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-dark"

                          // onClick={() => {
                          //   setQuantity(quantity + 1);
                          // }}
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
                  <hr />
                </div>
              </div>
              <div className="col-5"></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
