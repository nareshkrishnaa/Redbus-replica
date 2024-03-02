import React from "react";
import "./SleeperLayout.scss";

const SleeperLayout = () => {
  return (
    <div className="layout-container mb-2">
      <div className="layout-row">
        {[...Array(5).keys()].map((row) => {
          return <div className="sleep-seat btn">{(row + 1) * 3}</div>;
        })}
      </div>
      <div className="layout-row">
        {[...Array(5).keys()].map((row) => {
          return <div className="sleep-seat btn">{row * 3 + 2}</div>;
        })}
      </div>
      <div className="isle">
        <div className="layout-row">
          {[...Array(5).keys()].map((row) => {
            return <div className="sleep-seat btn">{row * 3 + 1}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default SleeperLayout;
