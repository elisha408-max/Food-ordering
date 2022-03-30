import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Breakfast from "./Components/Breakfast";
import Launch from "./Components/Lunch";
import Snack from "./Components/Snack";
import Dinner from "./Components/Dinner";
import Burger from "./Components/Burger";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Breakfast />}/>
        <Route path="lunch" element={<Launch />}/>
        <Route path="snack" element={<Snack />}/>
        <Route path="dinner" element={<Dinner />}/>
        <Route path="burger" element={<Burger />}/>
      </Routes>
    </div>
  );
}

export default App;
