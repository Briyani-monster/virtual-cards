import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import Card from "./Card/Card";

const Cards = () => {
  const { mainCards } = useContext(DataContext);
  // console.log(mainCards);
  return (
    <div className="cards">
      {/* {mainCards.map((card) => console.log(card))} */}
      {mainCards.map((card) => (
        <Card
          key={card.owner_id}
          spent={card.spent}
          availabletospend={card.available_to_spend}
          expiry={card.expiry}
          type={card.card_type}
          budgetName={card.budget_name}
          name={card.name}
          cardholder={card.card_holder}
        />
      ))}
    </div>
  );
};

export default Cards;
