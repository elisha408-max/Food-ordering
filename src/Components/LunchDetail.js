import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cart";
const LunchDetail = () => {
  const {  lunchdetailId} = useParams();
  const [quantity, setQuantity] = React.useState(0);
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.product.lunchs[lunchdetailId-6]);
  console.log(todo,'todo')
  return (
    <>
      <div className="container">
        <div className="row " style={{ marginTop: "100px" }}>
          <div className="col-md-5 col-12">
            <img className="card-img-top img-fluid" alt="image" />
          </div>
          <div className="col-md-7 col-12">
            <div className="ms-5 " style={{ textAlign: "left" }}>
              <h2 className="mt-1">{todo.name}</h2>
              <span className="text-success">{todo.price}</span>

              <p className="mt-3">
                Stocks left:
                <span className="text-success"> {todo.stock}</span>
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className="mt-4 m-0">
                <div
                  className="btn-group  text-start"
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
                    disabled={quantity >= todo.stock ? true : false}
                    onClick={() => {
                      setQuantity(quantity + 1);
                    }}
                  >
                    +
                  </button>

                  <button
                    className="btn btn-dark ms-3"
                    data-index={todo.id}
                    onClick={() => {
                      dispatch(addToCart(todo, quantity));
                    }}
                    disabled={quantity < 1}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LunchDetail;
