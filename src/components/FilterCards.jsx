import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import Card from "./Card/Card";

const FilterCards = ({ cards }) => {
  const { cardholder, burner, subscription } = useContext(DataContext);
  return (
    <div className="cards">
      {cards
        .filter((card) =>
          cardholder !== "" ? card.card_holder === cardholder : true
        )
        .filter((card) => {
          let type1 = "";
          let type2 = "";
          if (burner === true) type1 = "burner";
          if (subscription === true) type2 = "subscription";
          //   console.log(type1, type2, cardname);
          if (type1 === "" && type2 == "") {
            return card;
          } else return card.card_type === type1 || card.card_type === type2;
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

export default FilterCards;
