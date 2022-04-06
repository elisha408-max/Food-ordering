import React, { useEffect, useState } from "react";
import axios from "axios";
// import data from "../data/db.json";
import { addToCart } from "../../redux/actions/cart";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../redux/actions/products";
import LunchItem from "./LunchItem";
import { Outlet } from "react-router-dom";
import Header from '../Header';
import Navbar from '../Navbar';
const Lunchlist = () => {
  const dispatch = useDispatch();

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(
  //       "https://khanpin-api.herokuapp.com/data"
  //     );
  //     setData(response.data);
  //     console.log(response,'response')
  //   };
  //   fetchData();
  // }, []);
  const lunchs = useSelector((state) => state.product.lunchs);

  const isLoading = useSelector((state) => state.product.isLoading);
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <div className="m-5">
        <div className="row">
          {lunchs.map((item, index) => {
            return (
              <>
                <LunchItem key={index} item={item} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Lunchlist;
