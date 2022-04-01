import React, { useEffect, useState } from "react";
import axios from "axios";

const Breakfast = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://khanpin-api.herokuapp.com/data"
      );
      setData(response.data);
      console.log(response,'response')
    };
    fetchData();
  }, []);
  return (
    <div className="m-5">
      <div className="row">
        {data.map((items, index) => {
          return (
            <>
              {" "}
              <div className="col-6 mb-2">
                <div className="card px-3 py-4">
                  <div className="row">
                    <div className="col-7">
                      <h5 className="text-danger">{items.name}</h5>

                      <span>Rs.{items.price}</span>

                      <br />
                      <p className="text-success">Stocks Left:{items.stock}</p>

                      <button
                        type="button"
                        className="btn btn-outline-dark mt-2"
                      >
                        Add to Cart
                      </button>
                    </div>
                    <div className="col-5">
                      <img
                        src={items.icon}
                        alt="image"
                        className="img-fluid imageWidth"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>

      {/* {Data.map((items, index) => {
        return (
          <>
            <h5 key={index}>{items.name}</h5>
            <img
              src={items.icon}
              alt="ItemsAdded"
              className="img-fluid"
              style={{}}
             
            />
          </>
        );
      })} */}
    </div>
  );
};

export default Breakfast;
