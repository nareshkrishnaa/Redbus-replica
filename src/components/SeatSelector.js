import React from "react";
import { Container, Form } from "react-bootstrap";

const SeatSelector = () => {
  let totalSeats = 50;
  let availableSeats = 20;
  return (
    <div>
      <Container>
        <Form>
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
        </Form>
      </Container>
    </div>
  );
};

export default SeatSelector;
