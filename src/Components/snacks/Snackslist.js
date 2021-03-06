import React, { useEffect, useState } from "react";
import axios from "axios";
// import data from "../data/db.json";
import { addToCart } from "../../redux/actions/cart";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../redux/actions/products";
import SnacksItem from "./SnacksItem";
import Header from '../Header';
import Navbar from '../Navbar';
const Snackslist = () => {
  const dispatch = useDispatch();
  const snacks = useSelector((state) => state.product.snacks);

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
          {snacks.map((item, index) => {
            return <SnacksItem key={index} item={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Snackslist;
