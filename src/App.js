import logo from "./logo.svg";
import "./App.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../src/bootstrap.scss";
import Navbar from "./components/Navbar";
import { BrowserRouter, Router, Route, Link } from "react-router-dom";
import BookingInputGroup from "./components/BookingInputGroup";
import BookingPage from "./pages/BookingPage";
import Summa from "./components/Summa";
import BusInfoBox from "./components/BusInfoBox";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <BookingInputGroup />
      </BrowserRouter>

      <BookingPage />

      <Summa />
    </div>
  );
}

export default App;
