import logo from "./logo.svg";
import "./App.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../src/bootstrap.scss";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import BookingPage from "./pages/BookingPage";
import Summa from "./components/Summa";
import BusInfoBox from "./components/BusInfoBox";
import SeatSelector from "./components/SeatSelector";
import SeatLayout from "./components/SeatLayout";
import SleeperLayout from "./components/SleeperLayout";
import Navbar1 from "./components/Navbar1";
function App() {
  return (
    <div className="App">
      <Navbar1 />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/bookingPage" element={<BookingPage />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Summa /> */}
    </div>
  );
}

export default App;
