import React from "react";
import { travels, busType, cities } from "../data/Database";
import { Col, Container, Row } from "react-bootstrap";
import BusInfoBox from "../components/BusInfoBox";
import { useLocation } from "react-router-dom";
const randomNumberOfTravels = () => {
  let randomNumber = Math.ceil(Math.random() * (5 - 2)) + 1;
  return randomNumber;
};

const getRandomTravels = (n) => {
  const selectedTravels = [];
  const arrayCopy = [...travels]; // Create a copy of the original array to avoid mutation
  while (selectedTravels.length < n && arrayCopy.length > 0) {
    const randomIndex = Math.floor(Math.random() * arrayCopy.length);
    selectedTravels.push(arrayCopy.splice(randomIndex, 1)[0]);
  }
  return selectedTravels;
};

// randomTravels gives the number of travels offering the transport
let busTypeFlag = 0;
let getBusType = () => {
  if (Math.random() < 0.5) {
    busTypeFlag = 0;
    return "Sleeper";
  } else {
    busTypeFlag = 1;
    return "Seater";
  }
};
let ebt = "08:00 AM";

let eat = "02:00 PM";
let travelTime = "06 hrs 00 mins";
let basePrice = 497;

let acFlag = 0;
let getACType = () => {
  if (busTypeFlag == 0) {
    acFlag = 1;
    return "AC";
  } else {
    if (Math.random() > 0.5) {
      acFlag = 1;
      return "AC";
    } else {
      acFlag = 0;
      return "NON-AC";
    }
  }
};

const generateRating = () => {
  // Generate a random number between 29 and 49 (equivalent to 2.9 and 4.9 when divided by 10)
  const randomScore = Math.floor(Math.random() * 21) + 29;

  // Convert the random score to a rating out of 5 with one decimal place
  const rating = randomScore / 10;

  return rating;
};

const generateNoOfReviews = () => {
  const randomNumber = Math.floor(Math.random() * (500 - 20 + 1)) + 20;
  return randomNumber;
};

const getTicketPrice = () => {
  if (busTypeFlag == 0) {
    return basePrice * 2.5;
  } else {
    if (acFlag == 1) {
      return basePrice * 1.75;
    } else {
      return basePrice * 1.15;
    }
  }
};

const getSeatAvailability = () => {
  let n = 50;
  if (busType == 0) {
    n = 30;
  }
  const randomNumber = Math.floor(Math.random() * n) + 1;
  return randomNumber;
};
const arrayOfBusDetails = (travelsArray) => {
  return travelsArray.map((travel) => ({
    travelsName: travel.travelsName,
    busType: getBusType(),
    acType: getACType(),
    rating: generateRating(),
    noOfreviews: generateNoOfReviews(),
    ticketPrice: getTicketPrice(),
    seatAvailability: getSeatAvailability(),
  }));
};

const getStops = (fcity, tcity) => {
  const fcityObj = cities.find((city) => {
    return city.cityName === fcity;
  });

  const tcityObj = cities.find((city) => {
    return city.cityName === tcity;
  });

  const fcityStops = fcityObj.busStops;
  const tcityStops = tcityObj.busStops;

  let randomIndex = Math.floor(Math.random() * fcityStops.length);
  const bstop = fcityStops[randomIndex];
  randomIndex = Math.floor(Math.random() * tcityStops.length);
  const astop = tcityStops[randomIndex];

  console.log(fcityStops, tcityStops);
  console.log(bstop, astop);

  return [bstop, astop];
};

const BookingPage = () => {
  const location = useLocation();
  const cityData = location.state;
  let fcity = cityData.fromCity;
  let tcity = cityData.toCity;
  const [bstop, astop] = getStops(fcity, tcity);

  let numberOfTravels = randomNumberOfTravels();
  let travelsNameArray = getRandomTravels(numberOfTravels);
  let busDetails = arrayOfBusDetails(travelsNameArray);

  return (
    <div>
      <Container>
        {busDetails.map((item) => {
          return (
            <BusInfoBox
              travelsName={item.travelsName}
              acType={item.acType}
              busType={item.busType}
              ebt={ebt}
              eat={eat}
              bstop={bstop}
              astop={astop}
              travelTime={travelTime}
              fcity={fcity}
              tcity={tcity}
              rating={item.rating}
              noOfreviews={item.noOfreviews}
              ticketPrice={item.ticketPrice}
              seatAvailability={item.seatAvailability}
            />
          );
        })}
      </Container>
    </div>
  );
};

export default BookingPage;
