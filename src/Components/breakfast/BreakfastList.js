import React, { useEffect, useState } from "react";
import axios from "axios";
// import data from "../data/db.json";
import { addToCart } from "../../redux/actions/cart";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../redux/actions/products";

import BreakfastItem from "./BreakfastItem";
import Header from "../Header";
import Navbar from "../Navbar";

const BreakfastList = (props) => {
  const dispatch = useDispatch();
  // console.log(props,'props')
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
  const breakfasts = useSelector((state) => state.product.breakfasts);

  const isLoading = useSelector((state) => state.product.isLoading);
  const searchedItem = useSelector((state) => state.product.searchItem);
  
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <div className="m-5">
        <div className="row">
         {breakfasts.map((item, index) => {
                return <BreakfastItem key={index} item={item} />
         })}    
        </div>
      </div>
    </>
  );
};

export default BreakfastList;
