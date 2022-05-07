import React from "react";
import Card from "./Card/Card";

const Cards = () => {
  return (
    <div className="cards">
      <Card
        spent={{
          value: 100,
          currency: "SGD",
        }}
        availabletospend={{
          value: 1000,
          currency: "SGD",
        }}
        expiry={"9 feb 2022"}
        type={"burner"}
        budgetName={"software subscription"}
        name={"Mixmax"}
        cardholder={"vishal"}
      />
      <Card
        spent={{
          value: 100,
          currency: "SGD",
        }}
        availabletospend={{
          value: 1000,
          currency: "SGD",
        }}
        expiry={"9 feb 2022"}
        type={"burner"}
        budgetName={"software subscription"}
        name={"Mixmax"}
        cardholder={"vishal"}
      />
      <Card
        spent={{
          value: 100,
          currency: "SGD",
        }}
        availabletospend={{
          value: 0,
          currency: "SGD",
        }}
        expiry={"9 feb 2022"}
        type={"subscribe"}
        budgetName={"software subscription"}
        name={"Mixmax"}
        cardholder={"vishal"}
      />
      <Card
        spent={{
          value: 100,
          currency: "SGD",
        }}
        availabletospend={{
          value: 1000,
          currency: "SGD",
        }}
        expiry={"9 feb 2022"}
        type={"burner"}
        budgetName={"software subscription"}
        name={"Mixmax"}
        cardholder={"vishal"}
      />
    </div>
  );
};

export default Cards;
