import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import BreakfastList from "./Components/breakfast/BreakfastList";
import Snackslist from "./Components/snacks/Snackslist";
import Lunchlist from "./Components/lunch/Lunchlist";

import Snack from "./Components/Snack";
import Dinner from "./Components/Dinner";
import Burger from "./Components/Burger";
import Login from "./Components/Login";
import Cart from "./Components/Cart.js";
import Fooddetail from "./Components/Fooddetail.js";
import LunchDetail from "./Components/LunchDetail.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<BreakfastList />} />
        <Route path="login" element={<Login />} />
        <Route path="lunch" element={<Lunchlist />}>
          <Route
            path={`lunchdetail/:lunchdetailId`}
            element={<LunchDetail />}
          />
        </Route>
        <Route path="snack" element={<Snackslist />} />
        <Route path="dinner" element={<Dinner />} />
        <Route path="burger" element={<Burger />} />
        <Route path="cart" element={<Cart />} />
        <Route path={`fooddetail/:fooddetailId`} element={<Fooddetail />} />
      </Routes>
    </div>
  );
}

export default App;
