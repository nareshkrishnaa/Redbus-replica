import { React, useState } from "react";
import "bootstrap";
import "./HomePage.scss";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  FloatingLabel,
  Button,
  Form,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cities, coupArr } from "../data/Database";
import {
  faBus,
  faLocationDot,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import ScrollBar from "./ScrollBar";

const HomePage = () => {
  const navigate = useNavigate();
  const [fromCity, setFromCity] = useState("From");
  const [toCity, setToCity] = useState("To");
  const setFrom = (event) => {
    if (toCity === event.target.value) {
      alert("From and To cities can't be same,Select a different From City");
    } else {
      setFromCity(event.target.value);
    }
  };

  const cityData = { fromCity: fromCity, toCity: toCity };

  function searchButton() {
    if (fromCity === "From" || toCity === "To") {
      alert("Select Valid From and To Cities");
    } else {
      navigate("/bookingPage", { state: cityData });
    }
  }

  const setTo = (event) => {
    if (fromCity === event.target.value) {
      alert("From and To cities can't be same, Select a different To City");
    } else {
      setToCity(event.target.value);
    }
  };

  const [fromText, setFromText] = useState("");
  const [toText, setToText] = useState("");
  const citiesArr = cities.map((city) => city.cityName);

  const [inputFromArr, setInputFromArr] = useState(citiesArr);
  const [inputToArr, setInputToArr] = useState(citiesArr);
  const alterInputFromArr = (str) => {
    const lowerCaseStr = str.toLowerCase();
    let alteredArray = citiesArr.filter((cityName) =>
      cityName.toLowerCase().includes(lowerCaseStr),
    );
    alteredArray = alteredArray.filter((city) => city != toText);
    setInputFromArr(alteredArray);
  };
  const alterInputToArr = (str) => {
    const lowerCaseStr = str.toLowerCase();
    let alteredArray = citiesArr.filter((cityName) =>
      cityName.toLowerCase().includes(lowerCaseStr),
    );
    alteredArray = alteredArray.filter((city) => city != fromText);
    setInputToArr(alteredArray);
  };

  const handleFromListClick = (city) => {
    setFromCity(city);
    setFromText(city);
    const alteredToArrList = citiesArr.filter((item) => item != city);

    setInputToArr(alteredToArrList);
  };
  const handleToListClick = (city) => {
    setToCity(city);
    setToText(city);
    const alteredToArrList = citiesArr.filter((item) => item != city);
    setInputFromArr(alteredToArrList);
  };

  const [fromListHide, setFromListHide] = useState(false);
  const [toListHide, setToListHide] = useState(false);
  const reverseCities = () => {
    const temp = fromText;
    setFromText(toText);
    setToText(temp);
  };
  return (
    <>
      <section className="hero mt-0">
        <Container fluid>
          <Row>
            <Col id="hero-bg" className="col-12 h-100 vh">
              <Container className="mt-5 ">
                <Row className="p-4 d-flex flex-column justify-content-center ms-5">
                  <div md={{ span: 8, offset: 2 }}>
                    <h1 className="text-white text-center elPSlA">
                      India's No. 1 Online Bus Ticket Booking Site
                    </h1>
                  </div>

                  <div xs={{ span: 8, offset: 0 }} className="mt-0">
                    <div className="d-flex justify-content-center jccent">
                      <div className="inputbox-outer ">
                        <div className="inputbox-inner1">
                          <div>
                            <div className="inputbox-from">
                              <div
                                role="button"
                                className="inputbox-from-button"
                              >
                                <div className="inputbox-from-button-inner1">
                                  <i class="bi bi-bus-front-fill input-icon"></i>
                                  <div className="inputbox-from-inner2">
                                    <div
                                      className="inputbox-from-inner3"
                                      onMouseEnter={() => {
                                        console.log("Mouse Entered");
                                        setFromListHide(true);
                                      }}
                                      onMouseLeave={() => {
                                        console.log("Mouse left");
                                        setFromListHide(false);
                                      }}
                                    >
                                      <label className="inputbox-from-label">
                                        From
                                      </label>

                                      <div className="inputbox-placeholder">
                                        <div className="placeHolderMainText selectclass">
                                          <input
                                            className="inputbox-inputbox"
                                            placeholder="Select From City"
                                            value={fromText}
                                            onClick={() => {
                                              setFromText("");
                                            }}
                                            onChange={(event) => {
                                              let str = event.target.value;
                                              console.log(str);
                                              setFromText(str);
                                              alterInputFromArr(str);
                                            }}
                                          />
                                        </div>

                                        <ul
                                          className={"inputbox-ul"}
                                          style={{
                                            display: fromListHide
                                              ? "block"
                                              : "none",
                                          }}
                                        >
                                          {inputFromArr.map((city) => (
                                            <li
                                              className="optionStyle"
                                              onClick={() => {
                                                handleFromListClick(city);
                                                setFromListHide(false);
                                              }}
                                            >
                                              {city}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* --------------------- */}
                          <div className="inputbox-seperator">
                            <div
                              className="inputbox-arrowswap"
                              onClick={() => {
                                reverseCities();
                              }}
                            >
                              <i className="bi bi-arrow-left-right"></i>
                            </div>
                          </div>

                          <div>
                            <div className="inputbox-from">
                              <div
                                role="button"
                                className="inputbox-from-button"
                              >
                                <div className="inputbox-from-button-inner1">
                                  <i class="bi bi-bus-front-fill input-icon"></i>
                                  <div className="inputbox-from-inner2">
                                    <div
                                      className="inputbox-from-inner3"
                                      onMouseEnter={() => {
                                        console.log("Mouse Entered");
                                        setToListHide(true);
                                      }}
                                      onMouseLeave={() => {
                                        console.log("Mouse left");
                                        setToListHide(false);
                                      }}
                                    >
                                      <label className="inputbox-from-label">
                                        To
                                      </label>

                                      <div className="inputbox-placeholder">
                                        <div className="placeHolderMainText selectclass">
                                          <input
                                            className="inputbox-inputbox"
                                            placeholder="Select To City"
                                            value={toText}
                                            onClick={() => {
                                              setToText("");
                                            }}
                                            onChange={(event) => {
                                              let str = event.target.value;
                                              console.log(str);
                                              setToText(str);
                                              alterInputToArr(str);
                                            }}
                                          />
                                        </div>

                                        <ul
                                          className={"inputbox-ul"}
                                          style={{
                                            display: toListHide
                                              ? "block"
                                              : "none",
                                          }}
                                        >
                                          {inputToArr.map((city) => (
                                            <li
                                              className="optionStyle"
                                              onClick={() => {
                                                handleToListClick(city);
                                                setToListHide(false);
                                              }}
                                            >
                                              {city}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* ------------------------------------- */}
                          <div className="inputbox-seperator"></div>
                          <div>
                            <div className="inputbox-from">
                              <div
                                role="button"
                                className="inputbox-from-button"
                              >
                                <div className="inputbox-from-button-inner1">
                                  <i class="bi bi-calendar3 input-icon"></i>
                                  <div className="inputbox-from-inner2">
                                    <div className="inputbox-from-inner3">
                                      <label className="inputbox-from-label ">
                                        Date
                                      </label>
                                      <div class="inputbox-placeholder">
                                        <text class="placeHolderMainText">
                                          5 MAY 2024
                                        </text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <button className="searchbox" onClick={searchButton}>
                            SEARCH BUSES
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
        <ScrollBar />
      </section>
    </>
  );
};

export default HomePage;
