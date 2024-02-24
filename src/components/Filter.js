import React, { useState } from "react";
import { Col, Form, InputGroup, Modal, Button } from "react-bootstrap";
import "./Filter.scss";
import { cities } from "../data/Database";
import { faL } from "@fortawesome/free-solid-svg-icons";

const Filter = (props) => {
  const fromCityName = props.fcity;
  const toCityName = props.tcity;
  const setArrivalStopsState = props.setArrivalStopsState;
  const setBoardingStopsState = props.setBoardingStopsState;
  const boardingStopsState = props.boardingStopsState;
  const arrivalStopsState = props.arrivalStopsState;

  const findCityByName = (cityName) => {
    return cities.find((city) => city.cityName === cityName);
  };

  const fromCityStops = findCityByName(fromCityName).busStops;
  const toCityStops = findCityByName(toCityName).busStops;

  const [show, setShow] = useState(false);
  const [modalHeading, setModalHeading] = useState("Modal Heading");
  const [modalType, setModalType] = useState("");

  //useStates for checkList
  //fromStopsCLS = from Stops Check List States
  //toStopsCLS = to Stops Check List States
  const [fromStopsCLS, setfromStopsCLS] = useState(
    new Array(fromCityStops.length).fill(false),
  );
  const [toStopsCLS, settoStopsCLS] = useState(
    new Array(toCityStops.length).fill(false),
  );

  const handlefromCLChange = (position, e) => {
    const updatedFromStopsCL = fromStopsCLS.map((item, index) =>
      index === position ? !item : item,
    );
    if (updatedFromStopsCL[position] === true) {
      console.log(e.target.value);
      // console.log(boardingStopsState);
      const newboardingStopsState = [
        new Array(boardingStopsState.length).fill(e.target.value),
      ];
      console.log(newboardingStopsState);
      setBoardingStopsState(newboardingStopsState);

      // setBoardingStopsState(["abc", "rfg", "iup"]);
      // console.log(boardingStopsState);
    }

    setfromStopsCLS(updatedFromStopsCL);
  };

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (e) => {
    setShow(true);
    setModalHeading(e.target.name);
    setModalType(e.target.name);
  };

  const modalContent = () => {
    if (modalType === "Boarding point") {
      return (
        <ul className="list-unstyled">
          {fromCityStops.map((stop, index) => {
            return (
              <li>
                {" "}
                <input
                  className="form-check-input px-1 py-2"
                  type="checkbox"
                  name={index}
                  value={stop}
                  checked={fromStopsCLS[index]}
                  onChange={(e) => handlefromCLChange(index, e)}
                />{" "}
                {stop}
              </li>
            );
          })}
        </ul>
      );
    } else {
      return (
        <ul className="list-unstyled">
          {toCityStops.map((stop, index) => {
            return (
              <li>
                <input
                  key={index}
                  className="form-check-input"
                  type="checkbox"
                  name={index}
                />{" "}
                {stop}
              </li>
            );
          })}
        </ul>
      );
    }
  };
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
      <hr />
      <h5 className="text-uppercase filter-heading">Boarding point</h5>
      <InputGroup size="sm" className="mb-3 ">
        <InputGroup.Text id="inputGroup-sizing-default">
          <i class="bi bi-search"></i>
        </InputGroup.Text>
        <Form.Control
          placeholder="boarding point"
          className="text-uppercase"
          onClick={handleShow}
          name="Boarding point"
        />
      </InputGroup>
      <h5 className="text-uppercase filter-heading">Dropping point</h5>
      <InputGroup size="sm" className="mb-3 ">
        <InputGroup.Text id="inputGroup-sizing-default">
          <i class="bi bi-search"></i>
        </InputGroup.Text>
        <Form.Control
          onClick={handleShow}
          name="Dropping point"
          placeholder="droppping point"
          className="text-uppercase"
        />
      </InputGroup>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalHeading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalContent()}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary text-white" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Filter;
