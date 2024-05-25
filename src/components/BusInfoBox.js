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
                  <hr className="hr-bpDpSummary"></hr>
                  <div className="margin-t-b-10">
                    <span className="fares-lb">Amount</span>
                    <span className="fareDisclaimer margin-l-5">
                      ( Taxes will be calculated during payment )
                    </span>
                    <span className="fr fare-summary-value">
                      {" "}
                      <span className="fare-summary-currency">INR</span>
                      <span>{price}</span>
                    </span>
                    <div>{selectedAPoint + " " + selectedBPoint}</div>
                    <button
                      onClick={() => {
                        setBpdp("d-none");
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
                class={"search-seatlayout " + bookingConfirmation}
              >
                <div class="curtain"></div>
                <div class="seatlayout-meta-container clearfix">
                  <div class="seatlayout-main-body">
                    <div class="bp-dp-container">
                      <div class="bpDpAddr ">
                        <span class="bpdp-lb ">Boarding &amp; Dropping</span>
                        <span
                          class="fr bpdp-change"
                          onClick={() => {
                            setBpdp("");
                            toggleHandler();
                          }}
                        >
                          change
                        </span>
                        <div class="bpDpAddr ">
                          <div class="pR oh">
                            <div class="BpDp-dashed"></div>
                            <div class="colBullet-css">
                              <div class="circleBp"></div>
                            </div>
                            <div class="colBpDp-css">
                              <span class="bpDpName-Lbl">
                                Koyembedu (Pickup Van/Bus)
                              </span>
                              <span class="bpDpSummaryTm-Lbl">
                                23:00 <span class="color-red-next-day"></span>
                              </span>
                              <div class="selectedBpDpAdd-Lbl">
                                6/9, Sri Kumaran Travels, Kaliamman Koil Street,
                                Near 100 Feet Road Signal, Opp to Crown Guest
                                House, Near Hotel Arafa,
                              </div>
                            </div>
                          </div>
                          <div class="margin-top-n-8">
                            <div class="colBullet-css">
                              <div class="circleDp"></div>
                            </div>
                            <div class="colBpDp-css pR">
                              <span class="bpDpName-Lbl">
                                Samayapuram Toll Gate
                              </span>
                              <span class="bpDpSummaryTm-Lbl">
                                05:35{" "}
                                <span class="color-red-next-day">(25 May)</span>
                              </span>
                              <div class="selectedBpDpAdd-Lbl">
                                Samayapuram Toll Gate
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <hr class="hr-bpDpSummary" />
                          <div class="seatlayout-meta clearfix m-t-15 m-b-15">
                            <div>
                              <div class="seats-selected-container">
                                <span class="seat-lb">Seat No.</span>
                                <span class="selected-seats">
                                  <span>18</span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <hr class="hr-bpDpSummary" />
                          <div class="fareDetails-Lbl">Fare Details</div>
                          <div class="seatlayout-fare-break-container">
                            <div class="fare-container animated fadeInUp">
                              <ul class="fares-container">
                                <li class="fare-row clearfix">
                                  <span class="fare-type">Basic Fare</span>
                                  <span class="fare-value">
                                    <span class="fare-currency">INR</span>1199
                                  </span>
                                </li>
                              </ul>
                              <div class="child-fare-text hide"></div>
                            </div>
                          </div>
                          <div class="fare-summary-container">
                            <span class="fares-lb">Amount</span>
                            <span class="fr fare-summary-value">
                              {" "}
                              <span class="fare-summary-currency">INR</span>
                              <span>1199.00</span>
                            </span>
                            <div class="fareDisclaimer">
                              Taxes will be calculated during payment
                            </div>
                          </div>
                          <h3 class="fare-toggle-btn fr m-t-0">
                            Hide Fare Details
                          </h3>
                          <div class="fr showlayout-button-container w-15"></div>
                          <div class="continue-container w-100 fl m-b-10">
                            <button class="button continue inactive">
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
