const cities = [
  {
    id: 1,
    cityName: "Chennai",
    busStops: ["Kilambakkam", "Porur", "Vandalur", "Tambaram"],
  },
  {
    id: 2,
    cityName: "Coimbatore",
    busStops: ["Gandhipuram", "Peelamedu", "Palladam", "Singaanaloor"],
  },
  {
    id: 3,
    cityName: "Madurai",
    busStops: [
      "Melur",
      "Maatuthaavani Bustand",
      "Madurai Meenakshi Hospital",
      "Natham",
    ],
  },
  {
    id: 4,
    cityName: "Tiruchirappalli",
    busStops: [
      "Srirangam",
      "Thillai Nagar",
      "Trichy Central Bus Stand",
      "No 1 Toll Gate",
    ],
  },
  { id: 5, cityName: "Salem", busStops: ["Omalur", "Salem Bus Stand"] },
  {
    id: 6,
    cityName: "Tirunelveli",
    busStops: ["Shankar Nagar", "Naanguneri", "New Bus Stand"],
  },
  { id: 7, cityName: "Tiruppur", busStops: ["Thiruppur Bus Stop"] },
  {
    id: 8,
    cityName: "Thoothukkudi",
    busStops: ["Ettayapuram", "Thoothukudi Bus stand"],
  },
  { id: 9, cityName: "Nagercoil", busStops: ["Nagarcoil Bus Stand"] },
  {
    id: 10,
    cityName: "Thanjavur",
    busStops: ["Paalpannai", "Thanjavur Bus stand"],
  },
  { id: 11, cityName: "Dindigul", busStops: ["Dhindukal Bus stand"] },
  { id: 12, cityName: "Vellore", busStops: ["Old Bus Stand", "New Bus Stand"] },
  { id: 13, cityName: "Cuddalore", busStops: ["Cuddalore Bus stand"] },
  {
    id: 14,
    cityName: "Kancheepuram",
    busStops: ["Old Bus Stand", "New Bus Stand"],
  },
  {
    id: 15,
    cityName: "Erode",
    busStops: ["Sathyamangalam", "Erode Bus Stand"],
  },
  {
    id: 16,
    cityName: "Tiruvannamalai",
    busStops: ["Thiruvannamalai Bus Stand"],
  },
  { id: 17, cityName: "Kumbakonam", busStops: ["Kumbakonam Bus Stand"] },
  { id: 18, cityName: "Hosur", busStops: ["Old Bus Stand", "New Bus Stand"] },
];

const travels = [
  { id: 1, travelsName: "TNSTC" },
  { id: 2, travelsName: "Neetabus IN" },
  { id: 3, travelsName: "Praveen Travels" },
  { id: 4, travelsName: "Orange tours and travels" },
  { id: 5, travelsName: "KPN Travels" },
  { id: 6, travelsName: "Kallada Travels" },
  { id: 7, travelsName: "Sri Krishna Travels" },
  { id: 8, travelsName: "Amarnath Travels" },
  { id: 9, travelsName: "Paulo Travels" },
  { id: 10, travelsName: "JBS Travels" },
];

const busType = ["AC Sleeper", "AC Seater", "Non AC Seater"];

const coupArr = [
  {
    message: "Save up to Rs 250 on bus tickets",
    coupon: "FIRST",
    companyLogo:
      "https://st.redbus.in/images/FIRST/first_26th_sep_2022_ravi/tile-80X80.png",
    backgroundImage:
      "linear-gradient(71.04deg, rgb(12, 57, 139) -6.92%, rgb(62, 118, 216) 109.43%)",
  },
  {
    message: "Save upto Rs 500 with ICICI Netbanking",
    coupon: "ICICI500",
    companyLogo:
      "https://st.redbus.in/Images/INDOFFER/ICICI500/MWeb-80_80%20ICICI.png",
    backgroundImage:
      "linear-gradient(71.04deg, rgb(39, 57, 101) -6.92%, rgb(80, 210, 149) 109.43%)",
  },
  {
    message: "Save up to Rs 300 on AP, TS routes",
    coupon: "SUPERHIT",
    companyLogo: "https://st.redbus.in/Images/INDOFFER/80x80/SUPERHIT.png",
    backgroundImage:
      "linear-gradient(71.04deg, rgb(72, 0, 4) -6.92%, rgb(216, 78, 85) 109.43%)",
  },
  {
    message: "Save up to Rs 300 on Chartered Bus",
    coupon: "CHARTERED15",
    companyLogo: "https://st.redbus.in/Images/INDOFFER/CHARTERED15/80x80.png",
    backgroundImage:
      "linear-gradient(71.04deg, rgb(14, 113, 67) -6.92%, rgb(115, 236, 179) 109.43%)",
  },
  {
    message: "Save 25% up to Rs 100 on SBSTC bus tickets.",
    coupon: "SBNEW",
    companyLogo: "https://st.redbus.in/Images/INDOFFER/80x80/SBSTC.png",
    backgroundImage:
      "linear-gradient(71.04deg, rgb(24, 125, 151) -6.92%, rgb(109, 213, 237) 109.43%)",
  },
];

export { cities, busType, travels, coupArr };
