import React, { useEffect, useState, useContext } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarComponent.scss";
import { DateContext } from "./HomePage";

const CalendarComponent = () => {
  const { date, setDate } = useContext(DateContext); // Use useContext inside the functional component

  const [value, onChange] = useState(new Date());
  const disablePastDates = ({ date, view }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const checkDate = new Date(date);
    checkDate.setHours(0, 0, 0, 0);
    return checkDate < today;
  };

  useEffect(() => {
    const nextButton = document.querySelector(
      ".react-calendar__navigation__next-button",
    );
    if (nextButton) {
      nextButton.innerHTML = '<i class="bi bi-chevron-right"></i>';
    }
  }, []);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    console.log("Selected date:", newDate);
  };

  const highlightSelectedDate = ({ date, view }) => {
    const selectedDate = new Date(value);
    selectedDate.setHours(0, 0, 0, 0);

    if (date.getTime() === selectedDate.getTime()) {
      return "highlight";
    }
    return null;
  };

  return (
    <Calendar
      onChange={handleDateChange}
      value={value}
      tileDisabled={disablePastDates}
      tileClassName={highlightSelectedDate}
    />
  );
};

export default CalendarComponent;
