import React from "react";
import { Badge } from "react-bootstrap";
import "./SeatLayout.scss";

const SeatLayout = (props) => {
  const occupiedSeatsArr = props.occupiedSeatsArr;
  const femaleSeatsArr = props.femaleSeatsArr;
  const handleClick = (id) => {
    const element = document.getElementById(id);
    console.log("seat clicked inside handle click: " + id);
    let value = element.textContent;
    if (element) {
      console.log("seat clicked inside element: " + id);

      if (!props.selectedSeatsHook.includes(value)) {
        props.setSelectedSeatsHook((prev) => {
          return [...prev, value];
        });
        console.log("seat clicked inside if : " + id);

        element.style.backgroundColor = "black";
        element.style.color = "white";
      } else {
        props.setSelectedSeatsHook((prev) => {
          return prev.filter((seat) => seat !== value);
        });
        console.log("seat clicked inside else : " + id);

        element.style.backgroundColor = "white";
        element.style.color = "grey";
      }
    }
  };
  return (
    <div className="layout-container mb-4">
      <div className="layout-row">
        {[...Array(10).keys()].map((row) => {
          const id = props.travelsName + "-" + (row + 1) * 5;
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
                console.log("seat clicked : " + id);
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
          const id = props.travelsName + "-" + (row * 5 + 4);
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
          const id = props.travelsName + "-" + (row * 5 + 3);
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
            const id = props.travelsName + "-" + (row * 5 + 2);
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
            const id = props.travelsName + "-" + (row * 5 + 1);
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
