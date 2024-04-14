import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Modal, Form } from "react-bootstrap";

const RadioList = ({ stopsArr, arrOfTime }) => {
  //   console.log("check-----@@@", stopsArr, arrOfTime);
  let arrayOfObjects = [];
  stopsArr.map((stops, index) => {
    arrayOfObjects.push({ stop: stops, time: arrOfTime[index] });
  });
  console.log("((((((((", arrayOfObjects);
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
