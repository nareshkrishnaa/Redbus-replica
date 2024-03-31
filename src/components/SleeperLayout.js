import React from "react";
import "./SleeperLayout.scss";

const SleeperLayout = (props) => {
  const occupiedSeatsArr = props.occupiedSeatsArr;
  const femaleSeatsArr = props.femaleSeatsArr;
  let occupiedSeatsArrDeck = [],
    femaleSeatsArrDeck = [];
  const deck = props.deck;

  if (deck == "L") {
    occupiedSeatsArr.map((item) => {
      if (item < 16) {
        occupiedSeatsArrDeck.push(item);
      }
    });

    femaleSeatsArr.map((item) => {
      if (item < 16) {
        femaleSeatsArrDeck.push(item);
      }
    });
  } else {
    occupiedSeatsArr.map((item) => {
      if (item > 15) {
        occupiedSeatsArrDeck.push(item - 15);
      }
    });

    femaleSeatsArr.map((item) => {
      if (item > 15) {
        femaleSeatsArrDeck.push(item - 15);
      }
    });
  }

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.style.backgroundColor = "grey";
      element.style.color = "white";
    }
  };
  return (
    <div className="layout-container mb-2">
      <div className="layout-row">
        {[...Array(5).keys()].map((row) => {
          const id = `${props.deck}${(row + 1) * 3}`;
          const value = (row + 1) * 3;
          let className = "sleep-seat";
          if (occupiedSeatsArrDeck.includes(value)) {
            if (femaleSeatsArrDeck.includes(value)) {
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
        {[...Array(5).keys()].map((row) => {
          const id = `${props.deck}${row * 3 + 2}`;
          const value = row * 3 + 2;
          let className = "sleep-seat";
          if (occupiedSeatsArrDeck.includes(value)) {
            if (femaleSeatsArrDeck.includes(value)) {
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
          {[...Array(5).keys()].map((row) => {
            const id = `${props.deck}${row * 3 + 1}`;
            const value = row * 3 + 1;
            let className = "sleep-seat";
            if (occupiedSeatsArrDeck.includes(value)) {
              if (femaleSeatsArrDeck.includes(value)) {
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

export default SleeperLayout;
