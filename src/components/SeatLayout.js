import React, { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";
import "./SeatLayout.scss";

const SeatLayout = (props) => {
  const occupiedSeatsArr = props.occupiedSeatsArr;
  const femaleSeatsArr = props.femaleSeatsArr;
  const toggleHandler = props.toggleHandler;
  const [toggleHandlerFlag, setToggleHandlerFlag] = useState(0);
  const ticketPrice = props.ticketPrice;
  const selectedSeatsHook = props.selectedSeatsHook;
  const updatePrice = props.updatePrice;
  useEffect(() => {
    props.setPrice(ticketPrice * selectedSeatsHook.length);
  }, [selectedSeatsHook]);
  const handleClick = (id) => {
    if (toggleHandlerFlag == 0) {
      toggleHandler();

      setToggleHandlerFlag(1);
    }

    const element = document.getElementById(id);

    let value = element.textContent;
    if (element) {
      if (
        !element.classList.contains("pink-background") &&
        !element.classList.contains("grey-background") &&
        !props.selectedSeatsHook.includes(value)
      ) {
        props.setSelectedSeatsHook((prev) => {
          console.log("seat added ++++");
          return [...prev, value];
        });

        // props.updatePrice();

        element.style.backgroundColor = "black";
        element.style.color = "white";
      } else if (props.selectedSeatsHook.includes(value)) {
        props.setSelectedSeatsHook((prev) => {
          console.log("seat deleted ----");
          return prev.filter((seat) => seat !== value);
        });

        // props.updatePrice();

        element.style.backgroundColor = "white";
        element.style.color = "grey";
      }
    }
  };
  return (
    <div className="layout-container mb-4">
      <div className="d-none">{props.price}</div>
      {/* Added above div to over come the asynchronous nature of state updates in React.*/}

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
                // console.log("seat clicked : " + id);
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
