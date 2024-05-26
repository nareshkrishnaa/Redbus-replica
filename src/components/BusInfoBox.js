import React, { createContext, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./BusInfoBox.scss";
import { Modal, Form } from "react-bootstrap";
import ToggleContext from "./ToggleContext";
import SleeperLayout from "./SleeperLayout";
import SeatLayout from "./SeatLayout";
import StopList from "./StopList";

const BusInfoBox = (props) => {
  const [buttonValue, setButtonValue] = useState("BOOK SEATS");
  const [selectedSeatsHook, setSelectedSeatsHook] = useState([]);
  const [price, setPrice] = useState(0);
  const ticketPrice = props.ticketPrice;
  const updatePrice = () => {
    setPrice(ticketPrice * selectedSeatsHook.length);
  };
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

  const [toggleArr, setToggleArr] = useState([0, 0]);
  const toggleHandler = () => {
    toggleOnClick(1);
  };
  const toggleOnClick = (n) => {
    if (n === 1) {
      if (toggleArr[0] == 0) {
        setToggleArr([1, 0]);
      }
      // else {
      //   setToggleArr([0, 0]);
      // }
    } else {
      if (toggleArr[1] == 0) {
        setToggleArr([0, 1]);
      }
      // else {
      //   setToggleArr([0, 0]);
      // }
    }
  };

  const [bpdp, setBpdp] = useState("");
  const [bookingConfirmation, setBookingConfirmation] = useState("d-none");
  const [selectedBPoint, setSelectedBPoint] = useState(["", ""]);
  const [selectedAPoint, setSelectedAPoint] = useState(["", ""]);
  const changeSelectedBPoint = (str, time) => {
    setSelectedBPoint([str, time]);
    console.log(selectedBPoint);
  };

  const changeSelectedAPoint = (str, time) => {
    setSelectedAPoint([str, time]);
    console.log(selectedAPoint);
  };
  const contextValue = {
    toggleOnClick,
    changeSelectedAPoint,
    changeSelectedBPoint,
  };
  let redBusDiscount = 200;
  const [fareDetailsToggleHook, setFareDetailsToggleHook] = useState(0);
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
                      <i className="bi bi-star"></i>
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
                  {/* <p>
                    <strong>3</strong> Single
                  </p> */}
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
                  occupiedSeatsArr={props.occupiedSeatsArr}
                  femaleSeatsArr={props.femaleSeatsArr}
                  selectedSeatsHook={selectedSeatsHook}
                  setSelectedSeatsHook={setSelectedSeatsHook}
                  travelsName={props.travelsName}
                  toggleHandler={toggleHandler}
                  ticketPrice={ticketPrice}
                  // updatePrice={updatePrice}
                  price={price}
                  setPrice={setPrice}
                />

                <div className="label">Upper Deck</div>
                <SleeperLayout
                  deck="U"
                  occupiedSeatsArr={props.occupiedSeatsArr}
                  femaleSeatsArr={props.femaleSeatsArr}
                  selectedSeatsHook={selectedSeatsHook}
                  setSelectedSeatsHook={setSelectedSeatsHook}
                  travelsName={props.travelsName}
                  toggleHandler={toggleHandler}
                  ticketPrice={ticketPrice}
                  // updatePrice={updatePrice}
                  price={price}
                  setPrice={setPrice}
                />
              </div>
            ) : (
              <div className="ms-4">
                <div className="label">Lower Deck</div>
                <SeatLayout
                  occupiedSeatsArr={props.occupiedSeatsArr}
                  femaleSeatsArr={props.femaleSeatsArr}
                  selectedSeatsHook={selectedSeatsHook}
                  setSelectedSeatsHook={setSelectedSeatsHook}
                  travelsName={props.travelsName}
                  toggleHandler={toggleHandler}
                  ticketPrice={ticketPrice}
                  // updatePrice={updatePrice}
                  price={price}
                  setPrice={setPrice}
                />
              </div>
            )}
          </Col>
          <Col className="seat-selector pt-4 position-relative">
            <div className="legend-wrap">
              <div className="legend-left clearfix d-flex gap-2">
                <div className="seat-legend-wrap sleeper-legend d-flex flex-column">
                  <div className="available-sleep"></div>
                  <div className="legend-label">available</div>
                </div>
                <div className="seat-legend-wrap sleeper-legend d-flex flex-column">
                  <div className="unavailable-sleep"></div>
                  <div className="legend-label">unavailable</div>
                </div>
                <div className="seat-legend-wrap sleeper-legend ladies-legend d-flex flex-column">
                  <div className="ladies-sleep"></div>
                  <div className="legend-label">female</div>
                </div>
              </div>
            </div>
            <Container className="mt-3 bg-light">
              <div id="boardingAndDroppingPointSelector" className={bpdp}>
                <p className="selectBpDpHeading">
                  Select the boarding and dropping point
                </p>
                <Row className="">
                  <div className="col  d-flex flex-column">
                    <h6
                      className={`text-center bpoint-heading mb-1 ${toggleArr[0] === 0 ? "" : "text-primary"}`}
                      onClick={() => {
                        toggleOnClick(1);
                      }}
                    >
                      BOARDING POINT
                    </h6>
                    <div
                      className={
                        toggleArr[0] === 0
                          ? "red-toggle d-none mt-0"
                          : "red-toggle d-block mt-0"
                      }
                    ></div>
                  </div>
                  <div className="col d-flex flex-column">
                    <h6
                      className={`text-center bpoint-heading mb-1 ${toggleArr[1] === 0 ? "" : "text-primary"}`}
                      onClick={() => {
                        toggleOnClick(2);
                      }}
                    >
                      DROPPING POINT
                    </h6>
                    <div
                      className={
                        toggleArr[1] === 0
                          ? "red-toggle d-none mt-0"
                          : "red-toggle d-block mt-0"
                      }
                    ></div>
                  </div>
                </Row>
                <Row
                  className={
                    toggleArr[0] === 0
                      ? "d-none stop-confirmation"
                      : "d-block stop-confirmation"
                  }
                >
                  <ToggleContext.Provider value={contextValue}>
                    <StopList
                      eat={props.eat}
                      ebt={props.ebt}
                      fStopsArr={props.fStopsArr}
                      tStopsArr={props.tStopsArr}
                      type="boarding"
                    />
                  </ToggleContext.Provider>
                </Row>
                <Row
                  className={
                    toggleArr[1] === 0
                      ? "d-none stop-confirmation"
                      : "d-block stop-confirmation"
                  }
                >
                  <ToggleContext.Provider value={contextValue}>
                    <StopList
                      eat={props.eat}
                      ebt={props.ebt}
                      fStopsArr={props.fStopsArr}
                      tStopsArr={props.tStopsArr}
                      type="arrival"
                    />
                  </ToggleContext.Provider>
                </Row>

                {/* Proceed to Buy tickets Button Segment */}

                <div
                  className={
                    selectedSeatsHook.length > 0 ? "d-block" : "d-none"
                  }
                >
                  {/* <hr className="hr-bpDpSummary"></hr> */}
                  <div className="margin-t-b-10">
                    {/* <span className="fares-lb">Amount</span>
                    <span className="fareDisclaimer margin-l-5">
                      ( Taxes will be calculated during payment )
                    </span>
                    <span className="fr fare-summary-value">
                      {" "}
                      <span className="fare-summary-currency">INR</span>
                      <span>{price}</span>
                    </span>
                    <div>{selectedAPoint + " " + selectedBPoint}</div> */}
                    <button
                      onClick={() => {
                        setBpdp("d-none");
                        setBookingConfirmation("d-block");
                      }}
                      className="text-white continue-to-payment"
                    >
                      continue
                    </button>
                  </div>
                </div>
              </div>

              <div
                id="BookingConfirmation"
                className={"search-seatlayout " + bookingConfirmation}
              >
                <div className="curtain"></div>
                <div className="seatlayout-meta-container clearfix">
                  <div className="seatlayout-main-body">
                    <div className="bp-dp-container">
                      <div className="bpDpAddr ">
                        <span className="bpdp-lb ">
                          Boarding &amp; Dropping
                        </span>
                        <span
                          className="fr bpdp-change"
                          onClick={() => {
                            setBpdp("");
                            toggleHandler();
                            setBookingConfirmation("d-none");
                          }}
                        >
                          change
                        </span>
                        <div className="bpDpAddr ">
                          <div className="pR oh">
                            <div className="BpDp-dashed"></div>
                            <div className="colBullet-css">
                              <div className="circleBp"></div>
                            </div>
                            <div className="colBpDp-css">
                              <span className="bpDpName-Lbl">
                                {selectedBPoint[0]}
                              </span>
                              <span className="bpDpSummaryTm-Lbl">
                                {selectedBPoint[1]}{" "}
                                <span className="color-red-next-day"></span>
                              </span>
                              <div className="selectedBpDpAdd-Lbl">
                                {props.fcity}
                              </div>
                            </div>
                          </div>
                          <div className="margin-top-n-8">
                            <div className="colBullet-css">
                              <div className="circleDp"></div>
                            </div>
                            <div className="colBpDp-css pR">
                              <span className="bpDpName-Lbl">
                                {selectedAPoint[0]}
                              </span>
                              <span className="bpDpSummaryTm-Lbl">
                                {selectedAPoint[1]}{" "}
                                <span className="color-red-next-day"></span>
                              </span>
                              <div className="selectedBpDpAdd-Lbl">
                                {props.tcity}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <hr className="hr-bpDpSummary" />
                          <div className="seatlayout-meta clearfix m-t-15 m-b-15">
                            <div>
                              <div className="seats-selected-container">
                                <span className="seat-lb">Seat No.</span>
                                <span className="selected-seats">
                                  <span>{selectedSeatsHook.join(", ")}</span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <hr className="hr-bpDpSummary" />
                          <div className="fareDetails-Lbl">Fare Details</div>
                          <div className="seatlayout-fare-break-container">
                            <div className="fare-container animated fadeInUp">
                              <ul
                                className={
                                  fareDetailsToggleHook == 0
                                    ? "fares-container d-none"
                                    : "fares-container"
                                }
                              >
                                <li className="fare-row clearfix">
                                  <span className="fare-type">Basic Fare</span>
                                  <span className="fare-value">
                                    <span className="fare-currency">INR</span>
                                    {price.toFixed(2)}
                                  </span>
                                </li>
                                <li className="fare-row clearfix">
                                  <span className="fare-type">
                                    RedBus Discount
                                  </span>
                                  <span className="fare-value">
                                    <span className="fare-currency">INR</span>-
                                    {redBusDiscount}
                                  </span>
                                </li>
                              </ul>
                              <div className="child-fare-text hide"></div>
                            </div>
                          </div>
                          <div className="fare-summary-container">
                            <span className="fares-lb">Amount</span>
                            <span className="fr fare-summary-value">
                              {" "}
                              <span className="fare-summary-currency">INR</span>
                              <span>{price.toFixed(2) - redBusDiscount}</span>
                            </span>
                            <div className="fareDisclaimer">
                              Taxes will be calculated during payment
                            </div>
                          </div>
                          <h3
                            className="fare-toggle-btn fr m-t-0"
                            onClick={() => {
                              if (fareDetailsToggleHook === 0) {
                                setFareDetailsToggleHook(1);
                              } else {
                                setFareDetailsToggleHook(0);
                              }
                            }}
                          >
                            {fareDetailsToggleHook == 0
                              ? "Show Fare Details"
                              : "Hide Fare Details"}
                          </h3>
                          <div className="fr showlayout-button-container w-15"></div>
                          <div className="continue-container w-100 fl m-b-10">
                            <button className="button continue inactive">
                              Proceed to book
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BusInfoBox;
