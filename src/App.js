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

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/bookingPage" element={<BookingPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
