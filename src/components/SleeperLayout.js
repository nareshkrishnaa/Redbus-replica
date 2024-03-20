import React from "react";
import "./SleeperLayout.scss";

const SleeperLayout = (props) => {
  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.style.backgroundColor = "grey";
      element.style.color = "white";
    }
  };
  return (
    <div className="layout-container mb-2">
      <div className="layout-row">
        {[...Array(5).keys()].map((row) => {
          const id = `${props.deck}${(row + 1) * 3}`;
          return (
            <div
              id={id}
              className="sleep-seat"
              onClick={() => {
                handleClick(id);
              }}
            >
              {(row + 1) * 3}
            </div>
          );
        })}
      </div>
      <div className="layout-row">
        {[...Array(5).keys()].map((row) => {
          const id = `${props.deck}${row * 3 + 2}`;
          return (
            <div
              id={id}
              className="sleep-seat"
              onClick={() => {
                handleClick(id);
              }}
            >
              {row * 3 + 2}
            </div>
          );
        })}
      </div>
      <div className="isle">
        <div className="layout-row">
          {[...Array(5).keys()].map((row) => {
            const id = `${props.deck}${row * 3 + 1}`;

            return (
              <div
                id={id}
                className="sleep-seat"
                onClick={() => {
                  handleClick(id);
                }}
              >
                {row * 3 + 1}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SleeperLayout;
