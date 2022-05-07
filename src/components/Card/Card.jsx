import React from "react";
import LocalFireDepartmentSharpIcon from "@mui/icons-material/LocalFireDepartmentSharp";
import AutorenewSharpIcon from "@mui/icons-material/AutorenewSharp";
import Chart from "./Chart";
import ChartDescription from "./ChartDescription";
import CardBody from "./CardBody";
const Card = ({
  spent,
  availabletospend,
  expiry,
  type,
  budgetName,
  name,
  cardholder,
}) => {
  return (
    <div className="card">
      <div className={"card__header"}>
        <div className="card__header__left">
          <h3 className="h4">{name}</h3>
          <p className="subtitle">
            <span>{cardholder}</span>. <span>{budgetName}</span>
          </p>
        </div>
        <div className="card__header__right">
          <div className="icon">
            {type === "burner" ? (
              <LocalFireDepartmentSharpIcon />
            ) : (
              <AutorenewSharpIcon />
            )}
          </div>
        </div>
      </div>
      <CardBody
        limit={availabletospend.value}
        cardType={type}
        expiry={expiry}
      />

      <Chart spent={spent?.value} available={availabletospend?.value} />
      <div className="card__chart__description">
        <ChartDescription
          type={"spent"}
          spentammount={spent?.value}
          availableammount={availabletospend?.value}
        />
        <ChartDescription
          type={"available"}
          spentammount={spent?.value}
          availableammount={availabletospend?.value}
        />
      </div>
    </div>
  );
};

export default Card;
