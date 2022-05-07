import React from "react";

const ChartDescription = ({ type, spentammount, availableammount }) => {
  return (
    <div className={`card__chart__description__${type}`}>
      <div className={`card__chart__description__${type}__heading`}>
        <span></span>
        {type === "spent" ? (
          <div className="h4 subtitle">spent</div>
        ) : (
          <div className="h4 subtitle">available to spent</div>
        )}
      </div>
      <div className="ammount">
        {type === "spent" ? `${spentammount} SGD` : `${availableammount} SGD`}
      </div>
    </div>
  );
};

export default ChartDescription;
