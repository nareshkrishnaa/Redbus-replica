import React from "react";

const Coupon = ({ key, message, coupon, companyLogo, backgroundImage }) => {
  console.log(key, message, coupon, companyLogo, backgroundImage);
  console.log("-----------------------------------------------------");
  const style = {
    backgroundImage: backgroundImage, // Assuming backgroundImage is already a string
  };
  return (
    <div className="outerAdDiv" style={style}>
      <div className="logoSB">
        <img src={companyLogo} className="logoImg" />
      </div>
      <div className="couponContent">
        <div className="gJgZBcN">BUS</div>
        <div className="vOLKxZ">{message}</div>
        <div className="ggQBywQ">Valid till 01 Jul</div>
        <div className="jJltkuE">
          <div className="iWrqRdP">{coupon}</div>
          <img
            className="kcXuioK"
            src="https://s2.rdbuz.com/web/images/homeV2/copy.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Coupon;
