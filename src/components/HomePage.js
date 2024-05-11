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
import { cities } from "../data/Database";
import {
  faBus,
  faLocationDot,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Navbar1 from "./Navbar1";

const HomePage = () => {
  const navigate = useNavigate();
  const [fromCity, setFromCity] = useState("From");
  const [toCity, setToCity] = useState("To");
  const [cityInput1, setCityInput1] = useState("");
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
  const [citiesToArr, setCitiesToArr] = useState(citiesArr);

  const [inputFromArr, setInputFormArr] = useState(citiesArr);
  const [inputToArr, setInputToArr] = useState(citiesToArr);
  const alterInputFromArr = (str) => {
    const lowerCaseStr = str.toLowerCase();
    const alteredArray = citiesArr.filter((cityName) =>
      cityName.toLowerCase().includes(lowerCaseStr),
    );
    setInputFormArr(alteredArray);
  };
  const alterInputToArr = (str) => {
    const lowerCaseStr = str.toLowerCase();
    let alteredArray = citiesToArr.filter((cityName) =>
      cityName.toLowerCase().includes(lowerCaseStr),
    );
    setInputToArr(alteredArray);
  };

  const handleFomListClick = (city) => {
    setFromCity(city);
    setFromText(city);
    const alteredToArrList = citiesArr.filter((item) => item != city);
    console.log("----------------", alteredToArrList);
    setCitiesToArr(["dummy"]);
    console.log("+++++++++++++", citiesToArr);
  };
  const handleToListClick = (city) => {
    setToCity(city);
    setToText(city);
  };
  let inputBoxUlClass = "inputbox-ul";
  let inputBoxUlClass2 = "inputbox-ul d-none";
  const [fromListHide, setFromListHide] = useState(false);
  const [toListHide, setToListHide] = useState(false);

  return (
    <>
      <section className="hero mt-0">
        <Container fluid>
          <Row>
            <Col id="hero-bg" className="col-12 h-100 vh">
              <Container className="mt-5">
                <Row className="p-4">
                  <Col md={{ span: 8, offset: 2 }}>
                    <h2 className="fw-bold text-white text-center">
                      India's No. 1 Online Bus Ticket Booking Site
                    </h2>
                  </Col>

                  <Col xs={{ span: 8, offset: 0 }} className="mt-8">
                    <div className="inputbox-outer">
                      <div className="inputbox-inner1">
                        <div>
                          <div className="inputbox-from">
                            <div role="button" className="inputbox-from-button">
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
                                              handleFomListClick(city);
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
                          <div class="inputbox-arrowswap">
                            <i class="bi bi-arrow-left-right"></i>
                          </div>
                        </div>

                        <div>
                          <div className="inputbox-from">
                            <div role="button" className="inputbox-from-button">
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
                            <div role="button" className="inputbox-from-button">
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

                        <button className="searchbox">SEARCH BUSES</button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>

              <Container className="mt-5">
                <Row className="p-4">
                  <Col md={{ span: 8, offset: 2 }}>
                    <h2 className="fw-bold text-white text-center">
                      India's No. 1 Online Bus Ticket Booking Site
                    </h2>
                  </Col>

                  <Col xs={{ span: 8, offset: 2 }} className="mt-5">
                    <div className="form-container">
                      <Row>
                        <Col xs={{ span: 10, offset: 1 }}>
                          <InputGroup className="input-group-lg my-3 rounded-3">
                            <InputGroup.Text className="bg-light rounded-start-5">
                              <FontAwesomeIcon
                                icon={faBus}
                                className="text-danger"
                              />
                            </InputGroup.Text>
                            <Form.Select
                              onChange={setFrom} // Attach onChange event handler
                              value={fromCity} // Set the value attribute to the selectedCity state
                              placeholder="From"
                            >
                              <option value="From">From</option>
                              {cities.map((city) => (
                                <option key={city.id} value={city.name}>
                                  {city.cityName}
                                </option>
                              ))}
                            </Form.Select>

                            <InputGroup.Text className="bg-light">
                              <FontAwesomeIcon
                                icon={faLocationDot}
                                className="text-danger"
                              />
                            </InputGroup.Text>
                            <Form.Select
                              placeholder="To"
                              onChange={setTo} // Attach onChange event handler
                              value={toCity} // Set the value attribute to the selectedCity state
                            >
                              <option value="To">To</option>
                              {cities.map((city) => (
                                <option key={city.id} value={city.name}>
                                  {city.cityName}
                                </option>
                              ))}
                            </Form.Select>

                            <InputGroup.Text className="bg-light">
                              <FontAwesomeIcon
                                icon={faCalendarDays}
                                className="text-danger"
                              />
                            </InputGroup.Text>
                            <FormControl
                              type="date"
                              className="text-primary"
                              placeholder="Date"
                              aria-label="Date"
                              aria-describedby="basic-addon1"
                            />
                          </InputGroup>
                          <Button
                            className="btn btn-primary text-white"
                            onClick={searchButton}
                          >
                            Click Me
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomePage;
