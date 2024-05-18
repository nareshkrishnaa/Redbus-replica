import React, { useContext } from "react";
import ToggleContext from "./ToggleContext";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Modal, Form } from "react-bootstrap";

const RadioList = ({ stopsArr, arrOfTime, type }) => {
  //   console.log("check-----@@@", stopsArr, arrOfTime);
  let arrayOfObjects = [];
  stopsArr.map((stops, index) => {
    arrayOfObjects.push({ stop: stops, time: arrOfTime[index] });
  });
  // console.log("((((((((", arrayOfObjects);
  const toggleOnClick = useContext(ToggleContext);
  return (
    <div>
      <Form>
        {arrayOfObjects.map((item) => {
          return (
            <Form.Group>
              <Row>
                <Col xs={4}>
                  <Form.Check
                    type="radio"
                    className="flexRadioDefault1"
                    id="flexRadioDefault1"
                    label={item.time}
                    name="flexRadioDefault"
                    onClick={() => {
                      if (type === "boarding") {
                        toggleOnClick(2);
                        console.log("||||||||||||", item.stop, item.time);
                      }
                    }}
                  />
                </Col>
                <Col>
                  <Form.Label>{item.stop}</Form.Label>
                </Col>
              </Row>
            </Form.Group>
          );
        })}
      </Form>
    </div>
  );
};

export default RadioList;
