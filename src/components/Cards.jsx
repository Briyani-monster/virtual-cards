import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import Card from "./Card/Card";

const Cards = ({ cards }) => {
  // console.log(mainCards);
  const { searchFilter } = useContext(DataContext);
  return (
    <div className="cards">
      {/* {mainCards.map((card) => console.log(card))} */}
      {cards
        .filter((card) => {
          if (searchFilter === "") return card;
          else return card.name.toLowerCase().includes(searchFilter);
        })
        .map((card) => (
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
