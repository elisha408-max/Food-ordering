import React, { useEffect, useState } from "react";
import axios from "axios";

import { addToCart } from "../../redux/actions/cart";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../redux/actions/products";

import BreakfastItem from "../breakfast/BreakfastItem";
import Header from "../Header";
import Navbar from "../Navbar";

const BreakfastList = (props) => {
  const dispatch = useDispatch();

  const dinners = useSelector((state) => state.product.dinners);

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
          {dinners.map((item, index) => {
            return <BreakfastItem key={index} item={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default BreakfastList;
