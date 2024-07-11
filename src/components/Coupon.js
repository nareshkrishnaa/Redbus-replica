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
        <div className="gJgZBc">BUS</div>
        <div className="vOLKx">{message}</div>
        <div className="ggQByw">Valid till 01 Jul</div>
        <div className="jJltku">
          <div className="iWrqRd">{coupon}</div>
          <img
            className="kcXuio"
            src="https://s2.rdbuz.com/web/images/homeV2/copy.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Coupon;
