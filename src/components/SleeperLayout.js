import React from "react";
import "./SleeperLayout.scss";

const SleeperLayout = (props) => {
  let occupiedSeatsNo;
  let indexes = [];
  let seatArr = new Array(15).fill(0);
  if (props.deck === "L") {
    occupiedSeatsNo = props.lowerDeckOccupiedSeatsNo;
    console.log("-------deck occupied seats--------");
    console.log(occupiedSeatsNo);
  } else {
    occupiedSeatsNo = props.upperDeckOccupiedSeatsNo;
    console.log("-------deck occupied seats--------");
    console.log(occupiedSeatsNo);
  }

  function fillRandomIndexes(arr, n) {
    // if (n > arr.length) {
    //   throw new Error("Number of indexes to fill exceeds array length");
    // }

    while (indexes.length < n) {
      let randomIndex = Math.floor(Math.random() * arr.length);
      if (!indexes.includes(randomIndex)) {
        indexes.push(randomIndex);
      }
    }

    indexes.forEach((index) => {
      arr[index] = 1;
    });

    return [arr, indexes];
  }

  const [occupiedSeatsArr, occupiedIndexes] = fillRandomIndexes(
    seatArr,
    occupiedSeatsNo,
  );

  const handleClick = (id) => {
    const element = document.getElementById(id);
    console.log(element);
    if (element) {
      const computedStyle = window.getComputedStyle(element);
      const backgroundColor = computedStyle.backgroundColor;
      if (
        backgroundColor === "rgb(255, 255, 255)" ||
        backgroundColor === "white"
      ) {
        console.log("condition 1", backgroundColor);
        element.style.backgroundColor = "green";
        element.style.color = "white";
      } else if (backgroundColor === "green") {
        element.style.backgroundColor = "white";
        element.style.color = "grey";
        console.log("condition 2", backgroundColor);
      }
    }
  };

  return (
    <div className="layout-container mb-2">
      <div className="layout-row">
        {[...Array(5).keys()].map((row) => {
          const id = `${props.deck}${(row + 1) * 3}`;
          const value = (row + 1) * 3;
          const isGrey = indexes.includes(value);
          return (
            <div
              id={id}
              className={`sleep-seat ${isGrey ? "grey-background" : ""}`}
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
          const isGrey = indexes.includes(value);
          return (
            <div
              id={id}
              className={`sleep-seat ${isGrey ? "grey-background" : ""}`}
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
            const isGrey = indexes.includes(value);
            return (
              <div
                id={id}
                className={`sleep-seat ${isGrey ? "grey-background" : ""}`}
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
