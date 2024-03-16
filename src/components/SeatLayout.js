import React, { useState } from "react";
import { Badge } from "react-bootstrap";
import "./SeatLayout.scss";

const SeatLayout = (props) => {
  const seatAvailability = props.seatAvailability;
  let seatArr = new Array(50).fill(0);
  function selectRandomSeats(arr, seatAvailability) {
    const selectedIndexes = [];
    const maxIndex = arr.length - 1;

    while (selectedIndexes.length < seatAvailability) {
      const randomIndex = Math.floor(Math.random() * (maxIndex + 1));
      if (!selectedIndexes.includes(randomIndex)) {
        selectedIndexes.push(randomIndex);
        arr[randomIndex] = 1;
      }
    }
  }

  // Select seats based on seatAvailability and assign value 1 to them
  selectRandomSeats(seatArr, seatAvailability);

  const [availableSeats, setAvailableSeats] = useState(seatArr);

  const unavailableSeats = [];
  seatArr.forEach((value, index) => {
    if (value === 1) {
      unavailableSeats.push(index + 1);
    }
  });

  const handleClick = (id) => {
    console.log("handle click in");
    const element = document.getElementById(id);
    if (element) {
      const computedStyle = window.getComputedStyle(element);
      const backgroundColor = computedStyle.backgroundColor;
      if (
        backgroundColor === "rgb(255, 255, 255)" ||
        backgroundColor === "white"
      ) {
        element.style.backgroundColor = "green";
        element.style.color = "white";
      } else {
        element.style.backgroundColor = "white";
        element.style.color = "grey";
      }
    }
    console.log("handle click out");
  };

  return (
    <div className="layout-container mb-4">
      <div className="layout-row">
        {[...Array(10).keys()].map((row) => {
          const id = "seat-" + (row + 1) * 5;
          const seatNumber = (row + 1) * 5;
          const isUnavailable = unavailableSeats.includes(seatNumber);
          return (
            <div
              id={id}
              className="seat btn"
              onClick={() => {
                handleClick(id);
              }}
              style={{
                backgroundColor: isUnavailable ? "gray" : "",
                color: isUnavailable ? "white" : "",
              }}
            >
              {(row + 1) * 5}
            </div>
          );
        })}
      </div>
      <div className="layout-row">
        {[...Array(10).keys()].map((row) => {
          const seatNumber = row * 5 + 4;
          const id = "seat-" + seatNumber;
          const isUnavailable = unavailableSeats.includes(seatNumber);

          return (
            <div
              id={id}
              className="seat btn"
              onClick={() => {
                handleClick(id);
              }}
              style={{
                backgroundColor: isUnavailable ? "gray" : "",
                color: isUnavailable ? "white" : "",
              }}
            >
              {seatNumber}
            </div>
          );
        })}
      </div>
      <div className="layout-row">
        {[...Array(10).keys()].map((row) => {
          const seatNumber = row * 5 + 3;
          const id = "seat-" + seatNumber;
          const isUnavailable = unavailableSeats.includes(seatNumber);

          return (
            <div
              id={id}
              className="seat btn"
              onClick={() => {
                handleClick(id);
              }}
              style={{
                backgroundColor: isUnavailable ? "gray" : "",
                color: isUnavailable ? "white" : "",
              }}
            >
              {seatNumber}
            </div>
          );
        })}
      </div>
      <div className="isle">
        <div className="layout-row">
          {[...Array(10).keys()].map((row) => {
            const seatNumber = row * 5 + 2;
            const id = "seat-" + seatNumber;
            const isUnavailable = unavailableSeats.includes(seatNumber);

            return (
              <div
                id={id}
                className="seat btn"
                onClick={() => {
                  handleClick(id);
                }}
                style={{
                  backgroundColor: isUnavailable ? "gray" : "",
                  color: isUnavailable ? "white" : "",
                }}
              >
                {seatNumber}
              </div>
            );
          })}
        </div>
        <div className="layout-row">
          {[...Array(10).keys()].map((row) => {
            const seatNumber = row * 5 + 1;
            const id = "seat-" + seatNumber;
            const isUnavailable = unavailableSeats.includes(seatNumber);

            return (
              <div
                id={id}
                className="seat btn"
                onClick={() => {
                  handleClick(id);
                }}
                style={{
                  backgroundColor: isUnavailable ? "gray" : "",
                  color: isUnavailable ? "white" : "",
                }}
              >
                {seatNumber}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SeatLayout;
