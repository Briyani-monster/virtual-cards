import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { DataContext } from "../context/DataProvider";
import Card from "./Card/Card";

const FilterCards = ({ cards }) => {
  const { cardholder, burner, subscription, displaySize, setDisplaySize } =
    useContext(DataContext);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const Observer = useRef();
  // use callback for intersection functionality
  const lastElement = useCallback(
    (node) => {
      console.log(node);
      if (loading) return;
      if (Observer.current) Observer.current.disconnect();
      Observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          console.log("visible");
          setDisplaySize((prev) => prev + 10);
        }
      });
      if (node) Observer.current.observe(node);
    },
    [loading]
  );
  useEffect(() => {
    setIndex(cards.length <= displaySize ? cards.length : displaySize);
  }, [displaySize, cards]);
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
          if (type1 === "" && type2 == "") {
            return card;
          } else return card.card_type === type1 || card.card_type === type2;
        })
        .slice(0, index)
        .map((card, i) => (
          <Card
            refrence={displaySize === i + 1 ? lastElement : null}
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
