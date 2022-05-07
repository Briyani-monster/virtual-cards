import React from "react";

const Chart = ({ spent, available }) => {
  const availablepercentage = (available / (available + spent)) * 100;
  const spentpercentage = (spent / (available + spent)) * 100;
  // console.log(spent, available, (available / (available + spent)) * 100);
  return (
    <div className="card__chart">
      <div
        className="card__chart__spent"
        style={{
          width: `${Math.round(spentpercentage)}%`,
        }}
      ></div>
      <div
        className="card__chart__available"
        style={{
          width: `${Math.round(availablepercentage)}%`,
        }}
      ></div>
    </div>
  );
};

export default Chart;
