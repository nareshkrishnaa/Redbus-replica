import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./BusInfoBox.scss";
import { Modal } from "react-bootstrap";

const BusInfoBox = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const onHide = () => setModalShow(false);
  return (
    <>
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
                    onClick={() => setModalShow(true)}
                    className="btn btn-primary text-white rounded-0"
                  >
                    Book Seats
                  </button>
                  <Modal
                    show={modalShow}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >
                    <Modal.Header closeButton onHide={onHide}>
                      <Modal.Title id="contained-modal-title-vcenter">
                        {props.travelsName}
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <h4>
                        {props.fcity} --{">"} {props.tcity}
                      </h4>
                      <span>
                        <h5>Bus Type</h5>Bus Type : {props.busType}
                      </span>
                      <span>
                        <h5></h5> :{" "}
                      </span>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={onHide}>Close</Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BusInfoBox;
