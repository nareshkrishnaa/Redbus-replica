import React from "react";
import { Badge } from "react-bootstrap";
import "./SeatLayout.scss";

const SeatLayout = () => {
  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.style.backgroundColor = "grey";
      element.style.color = "white";
    }
  };
  return (
    <div className="layout-container mb-4">
      <div className="layout-row">
        {[...Array(10).keys()].map((row) => {
          const id = "seat-" + (row + 1) * 5;
          return (
            <div
              id={id}
              className="seat"
              onClick={() => {
                handleClick(id);
              }}
            >
              {(row + 1) * 5}
            </div>
          );
        })}
      </div>
      <div className="layout-row">
        {[...Array(10).keys()].map((row) => {
          const id = "seat-" + (row * 5 + 4);
          return (
            <div
              id={id}
              className="seat"
              onClick={() => {
                handleClick(id);
              }}
            >
              {row * 5 + 4}
            </div>
          );
        })}
      </div>
      <div className="layout-row">
        {[...Array(10).keys()].map((row) => {
          const id = "seat-" + (row * 5 + 3);
          return (
            <div
              id={id}
              className="seat"
              onClick={() => {
                handleClick(id);
              }}
            >
              {row * 5 + 3}
            </div>
          );
        })}
      </div>
      <div className="isle">
        <div className="layout-row">
          {[...Array(10).keys()].map((row) => {
            const id = "seat-" + (row * 5 + 2);
            return (
              <div
                id={id}
                className="seat"
                onClick={() => {
                  handleClick(id);
                }}
              >
                {row * 5 + 2}
              </div>
            );
          })}
        </div>
        <div className="layout-row">
          {[...Array(10).keys()].map((row) => {
            const id = "seat-" + (row * 5 + 1);
            return (
              <div
                id={id}
                className="seat"
                onClick={() => {
                  handleClick(id);
                }}
              >
                {row * 5 + 1}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SeatLayout;
