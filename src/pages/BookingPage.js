import React, { useState } from "react";
import { travels, busType, cities } from "../data/Database";
import { Col, Container, Row } from "react-bootstrap";
import BusInfoBox from "../components/BusInfoBox";
import { useLocation } from "react-router-dom";
import Filter from "../components/Filter";
import busDetails, { travelsNameArray, eat, ebt } from "../data/randomData";
import "./BookingPage.scss";

const BookingPage = () => {
  const location = useLocation();
  const cityData = location.state;
  let fcity = cityData.fromCity;
  let tcity = cityData.toCity;
  const formatDate = (date) => {
    const options = { day: "2-digit", month: "short" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  const [date, setDate] = useState(new Date());
  const formattedDate = formatDate(date);
  const [displayDate, setDisplayDate] = useState(formattedDate);
  const handleDateAdd = () => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1);
    setDate(newDate);
    setDisplayDate(formatDate(newDate));
  };
  const handleDateSub = () => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - 1);
    setDate(newDate);
    setDisplayDate(formatDate(newDate));
  };

  const getFstop = (fcity) => {
    const fcityObj = cities.find((city) => {
      return city.cityName === fcity;
    });

    const fcityStops = fcityObj.busStops;
    let randomIndex = Math.floor(Math.random() * fcityStops.length);
    const bstop = fcityStops[randomIndex];
    return bstop;
  };

  const getTstop = (tcity) => {
    const tcityObj = cities.find((city) => {
      return city.cityName === tcity;
    });
    const tcityStops = tcityObj.busStops;
    const randomIndex = Math.floor(Math.random() * tcityStops.length);
    const astop = tcityStops[randomIndex];
    return astop;
  };

  busDetails.map((busDetail) => {
    busDetail.bstop = getFstop(fcity);
    busDetail.astop = getTstop(tcity);
  });
  // console.log("-------Booking Page----", busDetails);

  // let busDetails = arrayOfBusDetails(travelsNameArray);
  // const arrayOfBusDetails = (travelsArray) => {
  //   return travelsArray.map((travel) => ({
  //     travelsName: travel.travelsName,
  //     busType: getBusType(),
  //     acType: getACType(),
  //     rating: generateRating(),
  //     noOfreviews: generateNoOfReviews(),
  //     ticketPrice: getTicketPrice(),
  //     seatAvailability: getSeatAvailability(),
  //     bstop: getFstop(fcity),
  //     astop: getTstop(tcity),
  //   }));
  // };

  let boardingStopsArray = busDetails.map((item) => {
    return item.bstop;
  });
  let arrivalStopsArray = busDetails.map((item) => {
    return item.astop;
  });
  const [boardingStopsState, setBoardingStopsState] =
    useState(boardingStopsArray);
  const [arrivalStopsState, setArrivalStopsState] = useState(arrivalStopsArray);

  return (
    <div>
      <Container fluid>
        <Row className="border-top border-bottom ps-6 py-4">
          <div className="d-flex gap-3">
            <div className="cityHeadingstyle">{fcity}</div>
            <div>
              <i class="bi bi-arrow-right"></i>
            </div>
            <div className="cityHeadingstyle">{tcity}</div>
            <div>
              <i onClick={handleDateSub} class="bi bi-chevron-left"></i>
            </div>
            <div className="cityHeadingstyle">{displayDate}</div>
            <div>
              <i onClick={handleDateAdd} class="bi bi-chevron-right"></i>
            </div>
          </div>
        </Row>
        <Row>
          <Col lg={2}>
            <Filter
              fcity={fcity}
              tcity={tcity}
              boardingStopsState={boardingStopsState}
              arrivalStopsState={arrivalStopsState}
              setBoardingStopsState={setBoardingStopsState}
              setArrivalStopsState={setArrivalStopsState}
            />
          </Col>
          <Col lg={9}>
            {busDetails.map((item, index) => {
              return (
                <BusInfoBox
                  id={index}
                  travelsName={item.travelsName}
                  acType={item.acType}
                  busType={item.busType}
                  ebt={ebt}
                  eat={eat}
                  bstop={boardingStopsState[index]}
                  astop={arrivalStopsState[index]}
                  fcity={fcity}
                  tcity={tcity}
                  rating={item.rating}
                  noOfreviews={item.noOfreviews}
                  ticketPrice={item.ticketPrice}
                  seatAvailability={item.seatAvailability}
                  occupiedSeatsArr={item.occupiedSeatsArr}
                  femaleSeatsArr={item.femaleSeatsArr}
                />
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookingPage;
