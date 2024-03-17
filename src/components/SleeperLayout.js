import React, { useState } from "react";
import "./SleeperLayout.scss";

const SleeperLayout = (props) => {
  let selectedSeats = new Array();
  let occupiedSeatsNo;
  let indexes = [];
  let seatArr = new Array(15).fill(0);
  if (props.deck === "L") {
    occupiedSeatsNo = props.lowerDeckOccupiedSeatsNo;
  } else {
    occupiedSeatsNo = props.upperDeckOccupiedSeatsNo;
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
    const textContent = element.textContent.trim();
    const value = parseInt(textContent);
    if (element) {
      const computedStyle = window.getComputedStyle(element);
      const backgroundColor = computedStyle.backgroundColor;
      // Check if the background color is white or rgb(255, 255, 255)
      if (
        backgroundColor === "rgb(255, 255, 255)" ||
        backgroundColor === "white"
      ) {
        element.style.backgroundColor = "green";
        element.style.color = "white";
        //Add seat value to selectedSeats array

        if (!selectedSeats.includes(value)) {
          selectedSeats = [...selectedSeats, value];
        }

        console.log("selected seats", selectedSeats);
      }
      // Check if the background color is green or rgb(0, 128, 0)
      else if (
        backgroundColor === "green" ||
        backgroundColor === "rgb(0, 128, 0)"
      ) {
        element.style.backgroundColor = "white";
        element.style.color = "grey";
        //Remove seat value from selectedSeats array

        if (selectedSeats.includes(value)) {
          selectedSeats = selectedSeats.filter((seat) => seat !== value);
        }

        console.log("selected seats", selectedSeats);
      }
    }
  };

  return (
    <div className="layout-container mb-2">
      <div className="layout-row">
        {[...Array(5).keys()].map((row) => {
          const id = `${props.deck}${(row + 1) * 3}`;
          const value = (row + 1) * 3;
          const isGrey = indexes.includes(value - 1);
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
          const isGrey = indexes.includes(value - 1);
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
            const isGrey = indexes.includes(value - 1);
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
