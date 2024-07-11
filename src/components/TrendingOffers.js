import React from "react";
import { Container, Row } from "react-bootstrap";
import Coupon from "./Coupon";
import "./TrendingOffers.scss";

const TrendingOffers = () => {
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
  return (
    <>
      <div className="custom-container-wrapper">
        <Container className="custom-container">
          <Row className="trendingOffRow d-flex">
            <div className="toff">trending offer</div>
            <div className="eVcjqm">VIEW ALL</div>
          </Row>
          <Row className="coupon-flex">
            {coupArr.map((item, index) => (
              <Coupon
                key={index}
                message={item.message}
                coupon={item.coupon}
                companyLogo={item.companyLogo}
                backgroundImage={item.backgroundImage}
              />
            ))}
          </Row>
        </Container>
      </div>
      {/* ---------------------- */}
      {coupArr.map((item, index) => (
        <Coupon
          key={index}
          message={item.message}
          coupon={item.coupon}
          companyLogo={item.companyLogo}
          backgroundImage={item.backgroundImage}
        />
      ))}
    </>
  );
};

export default TrendingOffers;
