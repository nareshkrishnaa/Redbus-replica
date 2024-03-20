import { travels, busType, cities } from "../data/Database";

export const randomNumberOfTravels = () => {
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
  if (busTypeFlag == 0) {
    n = 30;
  }
  const randomNumber = Math.floor(Math.random() * n) + 1;
  return randomNumber;
};

export const numberOfTravels = randomNumberOfTravels();
export const travelsNameArray = getRandomTravels(numberOfTravels);
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
let busDetails = arrayOfBusDetails(travelsNameArray);
const occupiedSeatsArray = (n, size) => {
  // Create an array of size 50 with all elements initialized to 0
  let array = new Array(size).fill(0);

  // Assign n number of random indexes as 1
  let randomIndexes = [];
  for (let i = 0; i < Math.min(n, size); i++) {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * size);
    } while (randomIndexes.includes(randomIndex));
    randomIndexes.push(randomIndex);
    array[randomIndex] = 1;
  }

  // Create another array with the indexes where the value is 1
  let indexesWithValueOne = [];
  array.forEach((value, index) => {
    if (value === 1) {
      indexesWithValueOne.push(index + 1);
    }
  });

  return indexesWithValueOne;
};
busDetails = busDetails.map((busDetail) => {
  let availableSeats = busDetail.seatAvailability;
  let occupiedSeatsArr;
  if (busDetail.busType === "Seater") {
    let unAvailableSeatNo = 50 - availableSeats;
    occupiedSeatsArr = occupiedSeatsArray(unAvailableSeatNo, 50);
  } else {
    let unAvailableSeatNo = 30 - availableSeats;
    occupiedSeatsArr = occupiedSeatsArray(unAvailableSeatNo, 30);
  }
  return {
    ...busDetail, // Spread existing properties of busDetail
    occupiedSeatsArr, // Add new property
  };
});

console.log("------randomData---------------", busDetails);
export default busDetails;
export { ebt, eat };
