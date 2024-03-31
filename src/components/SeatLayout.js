import React from "react";
import { Badge } from "react-bootstrap";
import "./SeatLayout.scss";

const SeatLayout = (props) => {
  const occupiedSeatsArr = props.occupiedSeatsArr;
  const femaleSeatsArr = props.femaleSeatsArr;
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
          let className = "seat";
          const value = (row + 1) * 5;
          if (occupiedSeatsArr.includes(value)) {
            if (femaleSeatsArr.includes(value)) {
              className += " pink-background";
            } else {
              className += " grey-background";
            }
          }
          return (
            <div
              id={id}
              className={className}
              onClick={() => {
                handleClick(id);
              }}
            >
              {value}
            </div>
          );
        })}
      </div>
      <div className="layout-row">
        {[...Array(10).keys()].map((row) => {
          const id = "seat-" + (row * 5 + 4);
          let className = "seat";
          const value = row * 5 + 4;
          if (occupiedSeatsArr.includes(value)) {
            if (femaleSeatsArr.includes(value)) {
              className += " pink-background";
            } else {
              className += " grey-background";
            }
          }
          return (
            <div
              id={id}
              className={className}
              onClick={() => {
                handleClick(id);
              }}
            >
              {value}
            </div>
          );
        })}
      </div>
      <div className="layout-row">
        {[...Array(10).keys()].map((row) => {
          const id = "seat-" + (row * 5 + 3);
          let className = "seat";
          const value = row * 5 + 3;
          if (occupiedSeatsArr.includes(value)) {
            if (femaleSeatsArr.includes(value)) {
              className += " pink-background";
            } else {
              className += " grey-background";
            }
          }
          return (
            <div
              id={id}
              className={className}
              onClick={() => {
                handleClick(id);
              }}
            >
              {value}
            </div>
          );
        })}
      </div>
      <div className="isle">
        <div className="layout-row">
          {[...Array(10).keys()].map((row) => {
            const id = "seat-" + (row * 5 + 2);
            let className = "seat";
            const value = row * 5 + 2;
            if (occupiedSeatsArr.includes(value)) {
              if (femaleSeatsArr.includes(value)) {
                className += " pink-background";
              } else {
                className += " grey-background";
              }
            }
            return (
              <div
                id={id}
                className={className}
                onClick={() => {
                  handleClick(id);
                }}
              >
                {value}
              </div>
            );
          })}
        </div>
        <div className="layout-row">
          {[...Array(10).keys()].map((row) => {
            const id = "seat-" + (row * 5 + 1);
            let className = "seat";
            const value = row * 5 + 1;
            if (occupiedSeatsArr.includes(value)) {
              if (femaleSeatsArr.includes(value)) {
                className += " pink-background";
              } else {
                className += " grey-background";
              }
            }
            return (
              <div
                id={id}
                className={className}
                onClick={() => {
                  handleClick(id);
                }}
              >
                {value}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SeatLayout;
