import React from "react";
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp";
import TableRowsSharpIcon from "@mui/icons-material/TableRowsSharp";
const MainHeader = () => {
  return (
    <div className="main__header">
      <div className="main__header__left">
        <button className="subtitle  btn tab">Your</button>
        <button className="subtitle active btn tab">All</button>
        <button className="subtitle  btn tab">Blocked</button>
      </div>
      <div className="main__header__right">
        <GridViewSharpIcon />
        <TableRowsSharpIcon />
      </div>
    </div>
  );
};

export default MainHeader;
