import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import BreakfastList from "./Components/breakfast/BreakfastList";
import Snackslist from "./Components/snacks/Snackslist";
import Lunchlist from "./Components/lunch/Lunchlist";
import Beveragelist from "./Components/Beverages/Beveragelist";
import Snack from "./Components/Snack";
import Dinner from "./Components/Dinner";
import Burger from "./Components/Burger";
import Login from "./Components/Login";
import Cart from "./Components/Cart.js";
import Fooddetail from "./Components/Fooddetail.js";
import LunchDetail from "./Components/LunchDetail.js";
import LunchItem from "./Components/lunch/LunchItem.js";
import DinnerList from "./Components/Dinner/DinnerList.js";
import { SearchItem } from "./Components/SearchItem.js";
import Error from "./Components/Error";

import { useDispatch, useSelector } from "react-redux";
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const breakfasts = useSelector((state) => state.product.breakfasts);
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newBreakfastList = breakfasts.filter((item) => {
        return Object.values(breakfasts)
          .join("")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newBreakfastList);
    } else {
      setSearchResults(breakfasts);
    }
  };
  return (
    <div className="App">
      {/* <Header />
      <Navbar term={searchTerm} searchKeyword={searchHandler} /> */}
      <Routes>
        <Route
          path="/"
          element={<BreakfastList />}
          searchResults={searchResults}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/lunch" element={<Lunchlist />}>
          <Route path={`:lunchdetailId`} element={<LunchDetail />} />
        </Route>
        <Route path="/snack" element={<Snackslist />} />
        <Route path="/dinner" element={<DinnerList />} />
        <Route path="/burger" element={<Beveragelist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path={`/fooddetail/:fooddetailId`} element={<Fooddetail />} />
        <Route path={"/search"} element={<SearchItem />} />
        <Route path={"*"} element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
