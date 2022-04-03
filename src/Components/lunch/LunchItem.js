import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/cart";
const LunchItem = ({item}) => {
    const [quantity, setQuantity] = React.useState(0);
  const dispatch = useDispatch();
  return (
    <>
              {" "}
              <div className="col-6 mb-2">
                <div className="card px-3 py-4">
                  <div className="row">
                    <div className="col-7">
                      <h5 className="text-danger">{item.name}</h5>

                      <span>Rs.{item.price}</span>

                      <br />
                      <p className="text-success">Stocks Left:{item.stock}</p>
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
                        <button type="button" className="btn btn-outline-dark">
                          {quantity}
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-dark"
                          disabled={quantity >= item.stock ? true : false}
                          onClick={() => {
                            setQuantity(quantity + 1);
                          }}
                        >
                          +
                        </button>
                      </div>
                      <br />
                      <br />
                      <button
                        className="btn btn-dark"
                        data-index={item.id}
                        onClick={() => {
                          dispatch(addToCart(item, quantity));
                        }}
                        disabled={quantity < 1}
                      >
                        Add to cart
                      </button>
                    </div>
                    <div className="col-5">
                      <img
                        src={item.icon}
                        alt="image"
                        className="img-fluid imageWidth"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
  )
}

export default LunchItem