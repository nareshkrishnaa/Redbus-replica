import React from "react";
import { Container, Form } from "react-bootstrap";
import "./SeatSelector.scss";

const SeatSelector = () => {
  let totalSeats = 50;
  let availableSeats = 20;
  let busRow = 10;
  let busCol = 5;
  let counter = 0;

  return (
    <div>
      <Container>
        {[...Array(busRow).keys()].map((row) => {
          return (
            <Form className="border">
              {[...Array(busCol).keys()].map((col) => {
                counter++;
                return (
                  <Form.Check
                    key={`${row}-${col}`}
                    inline
                    label={`${counter}`}
                    type="checkbox"
                    className={col === 1 ? "red-box" : ""}
                  />
                );
              })}
            </Form>
          );
        })}

        {/* {[...Array(busRow).keys()].map((row) => {
          return (
            <Form className="border p-5">
              {`Row ${row + 1}`}
              {[...Array(busCol).keys()].map((col) => {
                counter++;
                return <span key={col} className="px-5">{` ${counter}`}</span>;
              })}
            </Form>
          );
        })} */}

        {/* {[...Array(busRow).keys()].map((row) =>
          [...Array(busCol).keys()].map((col) => {
            return <div className="border p-5"></div>;
          }),
        )} */}

        {/* <Form>
          {[...Array(10).keys()].map((row, indexRow) =>
            [...Array(3).keys()].map((col, indexCol) => {
              console.log(indexRow + 1, indexCol + 1);
              return (
                <Form.Check
                  key={`${indexRow}-${indexCol}`}
                  type="checkbox"
                  label={`Row ${indexRow + 1}, Col ${indexCol + 1}`}
                />
              );
            }),
          )}
        </Form> */}
      </Container>
    </div>
  );
};

export default SeatSelector;
