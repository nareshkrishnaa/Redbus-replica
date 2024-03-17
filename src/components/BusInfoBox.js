import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./BusInfoBox.scss";
import { Modal } from "react-bootstrap";
import SleeperLayout from "./SleeperLayout";
import SeatLayout from "./SeatLayout";

const BusInfoBox = (props) => {
  const splitIntRandomly = (input) => {
    const randomNumber = Math.floor(Math.random() * input);

    return [randomNumber, input - randomNumber];
  };

  const noOfUnAvailableSeats = 30 - props.seatAvailability;
  const [lowerDeckOccupiedSeatsNo, upperDeckOccupiedSeatsNo] =
    splitIntRandomly(noOfUnAvailableSeats);
  console.log("-------sleeper seat split----------");
  console.log("available seat = ", props.seatAvailability);
  console.log(lowerDeckOccupiedSeatsNo, upperDeckOccupiedSeatsNo);
  const [buttonValue, setButtonValue] = useState("BOOK SEATS");
  const handleClick = (id) => {
    console.log(id);
    const row = document.getElementById(id);
    console.log(row);
    const button = document.getElementById(`book-seats-button${props.id}`);
    console.log(`book-seats-button${props.id}`);
    console.log(button);

    if (row.classList.contains("d-none")) {
      setButtonValue("HIDE SEATS");
      button.style.backgroundColor = "#747f8d";
      row.classList.remove("d-none");
    } else {
      row.classList.add("d-none");
      setButtonValue("BOOK SEATS");
      button.style.backgroundColor = "var(--bs-primary)";
    }
  };
  return (
    <div className="busInfoBox mb-3">
      <Container fluid>
        <Row>
          <Col className="border">
            <Row className="ps-2 py-1">
              <Col>
                <h5 className="fw-bold mt-2">{props.travelsName}</h5>
                <p className="extra-small">
                  {props.acType} {props.busType}
                </p>
              </Col>
              <Col>
                <div className="d-inline">
                  <p className="h4 d-inline">EBT - </p>
                  <p className="h4 fw-bold d-inline ">{props.ebt}</p>
                </div>

                <p className="text-secondary">({props.bstop})</p>

                <p className="text-danger">04h 10m</p>

                <div className="d-inline">
                  <p className="h4 d-inline ">EAT - </p>
                  <p className="h4 fw-bold d-inline ">{props.eat}</p>
                </div>

                <p className="text-secondary">({props.astop})</p>
              </Col>
              <Col>
                <div>
                  <div className="d-flex flex-column gap-1 align-items-center mt-2">
                    <Button
                      variant="primary text-white"
                      className="d-flex gap-2 px-2 py-1"
                    >
                      <i class="bi bi-star"></i>
                      <div>{props.rating} / 5</div>
                    </Button>
                    <div>
                      <span className="d-inline">
                        <i className="bi bi-people-fill text-primary"></i>
                        <p className="ms-1 d-inline small">
                          {props.noOfreviews} reviews
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </Col>

              <Col>
                <div className="price-container">
                  <p className="mt-2">Price </p>
                  <p>
                    <strong>{props.ticketPrice}</strong> INR
                  </p>
                </div>
              </Col>

              <Col className="d-flex align-items-end justify-content-end">
                <div className="price-container mt-auto ms-auto ">
                  <p>
                    <strong>{props.seatAvailability}</strong> seats Available
                  </p>
                  <p>
                    <strong>3</strong> Single
                  </p>
                  <button
                    id={"book-seats-button" + props.id}
                    onClick={() => handleClick(`seatSelector${props.id}`)}
                    className="btn btn-primary text-white rounded-0"
                  >
                    {buttonValue}
                  </button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row
          className="seat-selector-row d-none"
          id={`seatSelector${props.id}`}
        >
          <Col className="seat-selector">
            <div className="seat-selector-message px-2 mt-4 ms-4 mb-4">
              <span>
                Click on an Available seat to proceed with your transaction.
              </span>
            </div>

            {props.busType === "Sleeper" ? (
              <div className="ms-4">
                <div className="label">Lower Deck</div>
                <SleeperLayout
                  deck="L"
                  lowerDeckOccupiedSeatsNo={lowerDeckOccupiedSeatsNo}
                  upperDeckOccupiedSeatsNo={upperDeckOccupiedSeatsNo}
                  seatAvailability={props.seatAvailability}
                />
                <div className="label">Upper Deck</div>
                <SleeperLayout
                  deck="U"
                  lowerDeckOccupiedSeatsNo={lowerDeckOccupiedSeatsNo}
                  upperDeckOccupiedSeatsNo={upperDeckOccupiedSeatsNo}
                  seatAvailability={props.seatAvailability}
                />
              </div>
            ) : (
              <div className="ms-4">
                <div className="label">Lower Deck</div>
                <SeatLayout seatAvailability={props.seatAvailability} />
              </div>
            )}
          </Col>
          <Col className="seat-selector pt-4 position-relative">
            <div class="legend-wrap">
              <div class="legend-left clearfix">
                <div class="seat-legend-wrap sleeper-legend">
                  <div class="available-sleep"></div>
                  <div class="legend-label">available</div>
                </div>
                <div class="seat-legend-wrap sleeper-legend">
                  <div class="unavailable-sleep"></div>
                  <div class="legend-label">unavailable</div>
                </div>
                <div class="seat-legend-wrap sleeper-legend ladies-legend">
                  <div class="ladies-sleep"></div>
                  <div class="legend-label">female</div>
                </div>
              </div>
            </div>
            {/* <div className="position-absolute mt-auto bottom-0 end-0 m-3">
              <button className="btn btn-primary text-uppercase text-white">
                Proceed to book
              </button>
            </div> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BusInfoBox;
