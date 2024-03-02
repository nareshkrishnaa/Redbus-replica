import React from "react";
import { Badge } from "react-bootstrap";
import "./SeatLayout.scss";

const SeatLayout = () => {
  return (
    <div className="layout-container">
      <div className="layout-row">
        {[...Array(10).keys()].map((row) => {
          return <div className="seat btn">{(row + 1) * 5}</div>;
        })}
      </div>
      <div className="layout-row">
        {[...Array(10).keys()].map((row) => {
          return <div className="seat btn">{row * 5 + 4}</div>;
        })}
      </div>
      <div className="layout-row">
        {[...Array(10).keys()].map((row) => {
          return <div className="seat btn">{row * 5 + 3}</div>;
        })}
      </div>
      <div className="isle">
        <div className="layout-row">
          {[...Array(10).keys()].map((row) => {
            return <div className="seat btn">{row * 5 + 2}</div>;
          })}
        </div>
        <div className="layout-row">
          {[...Array(10).keys()].map((row) => {
            return <div className="seat btn">{row * 5 + 1}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default SeatLayout;
