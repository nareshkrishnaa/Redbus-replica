import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Modal, Form } from "react-bootstrap";
import RadioList from "./RadioList";

const StopList = ({ eat, ebt, fStopsArr, tStopsArr, type }) => {
  let noOfStops;
  let stopsArr;
  let arrOfTime = [];
  const getTimeString = (timeString, minutesToAdd) => {
    const [time, meridian] = timeString.split(" ");
    const [hourString, minuteString] = time.split(":");
    let hours = parseInt(hourString, 10);
    const minutes = parseInt(minuteString, 10);
    if (meridian === "PM" && hours !== 12) {
      hours += 12;
    } else if (meridian === "AM" && hours === 12) {
      hours = 0;
    }
    const timeObject = new Date();
    timeObject.setHours(hours, minutes, 0, 0);
    timeObject.setMinutes(timeObject.getMinutes() + minutesToAdd);

    // Convert the updated timeObject to "hh:mm pm" format
    const updatedHour = timeObject.getHours();
    const updatedMinute = timeObject.getMinutes();
    const updatedMeridian = updatedHour >= 12 ? "PM" : "AM";
    const hour12 = updatedHour % 12 || 12;
    const hourStringUpdated = hour12 < 10 ? "0" + hour12 : hour12.toString();
    const minuteStringUpdated =
      updatedMinute < 10 ? "0" + updatedMinute : updatedMinute.toString();
    return (
      hourStringUpdated + ":" + minuteStringUpdated + " " + updatedMeridian
    );
  };

  const returnTime = (time, n) => {
    if (type === "boarding") {
      return getTimeString(time, 20 * n);
    } else {
      return getTimeString(time, -20 * n);
    }
  };
  let arrOfTimeObjects = [];
  if (type === "boarding") {
    stopsArr = fStopsArr;
    noOfStops = fStopsArr.length;
    fStopsArr.map((item, index) => {
      arrOfTime.push(returnTime(ebt, index));
    });
  } else {
    stopsArr = tStopsArr;
    noOfStops = tStopsArr.length;
    tStopsArr.map((item, index) => {
      arrOfTime.push(returnTime(eat, index));
    });
    arrOfTime.reverse();
  }
  return <RadioList stopsArr={stopsArr} arrOfTime={arrOfTime} type={type} />;
};

export default StopList;
