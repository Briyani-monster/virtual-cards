import React from "react";
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function convertdate(expiry) {
  const date = new Date(expiry);
  const datelis = date.toDateString().split(" ");
  return datelis[2] + " " + datelis[1] + ", " + datelis[3];
}
function getMonth(expiry) {
  const date = new Date(expiry);
  const month = date.getMonth();
  return monthNames[month];
}
const CardBody = ({ cardType, expiry, limit }) => {
  getMonth(expiry);
  return (
    <div className="card__body">
      <button className="btn card__body__btn">{cardType}</button>
      <p className="subtitle">
        {cardType === "burner" ? (
          <>
            <span>Expires:</span> <span>{convertdate(expiry)}</span>
          </>
        ) : (
          <>
            <span>{getMonth(expiry)} limit:</span> <span>{limit + " SGD"}</span>
          </>
        )}
      </p>
    </div>
  );
};

export default CardBody;
