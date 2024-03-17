import React, { useState } from "react";
import { Badge } from "react-bootstrap";
import "./SeatLayout.scss";

const SeatLayout = (props) => {
  let selectedSeats = new Array();
  const seatAvailability = props.seatAvailability;
  const unAvailableSeatNo = 50 - seatAvailability;
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
  selectRandomSeats(seatArr, unAvailableSeatNo);

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
    const textContent = element.textContent.trim();
    const value = parseInt(textContent);
    if (element) {
      const computedStyle = window.getComputedStyle(element);
      const backgroundColor = computedStyle.backgroundColor;
      console.log("positive===element present");
      // Check if the background color is white or rgb(255, 255, 255)
      if (
        backgroundColor === "rgb(255, 255, 255)" ||
        backgroundColor === "white"
      ) {
        element.style.backgroundColor = "green";
        element.style.color = "white";
        //Add seat value to selectedSeats array
        console.log("bg color ======= white");
        console.log("Background Color:", backgroundColor);
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
              className="seat"
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
              className="seat"
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
              className="seat"
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
                className="seat"
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
                className="seat"
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
