import React from "react";
import { Col, InputGroup } from "react-bootstrap";
import "./Filter.scss";

const Filter = () => {
  const timeFilters = [
    { id: 1, iconClass: "bi bi-sunrise", text: "Before 6 AM" },
    { id: 2, iconClass: "bi bi-brightness-high", text: "6 AM to 12 PM" },
    { id: 3, iconClass: "bi bi-brightness-low", text: "12 PM to 6 PM" },
    { id: 4, iconClass: "bi bi-moon-stars", text: "After 6 PM" },
  ];
  return (
    <>
      <h3 className="text-uppercase filter-heading">FILTER</h3>
      <hr />
      <h5 className="text-uppercase filter-heading">Departure time</h5>
      <ul className="list-unstyled">
        {timeFilters.map((item) => {
          return (
            <li key={item.id}>
              <input class="form-check-input" type="checkbox" />{" "}
              <i className={item.iconClass}></i>{" "}
              <p className="d-inline">{item.text}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Filter;
