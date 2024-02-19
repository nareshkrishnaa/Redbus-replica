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

  return (
    <>
      <section className="hero mt-9">
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
