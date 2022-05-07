import React, { useContext } from "react";
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp";
import TableRowsSharpIcon from "@mui/icons-material/TableRowsSharp";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";

const MainHeader = () => {
  const { setTabType, tabType } = useContext(DataContext);

  return (
    <div className="main__header">
      <div className="main__header__left">
        <Link
          to="/your"
          onClick={() => setTabType("your")}
          className={`subtitle ${tabType === "your" ? "active" : ""} btn tab`}
        >
          Your
        </Link>
        <Link
          to="/"
          onClick={() => setTabType("all")}
          className={`subtitle ${tabType === "all" ? "active" : ""} btn tab`}
        >
          All
        </Link>
        <Link
          to="/blocked"
          onClick={() => setTabType("blocked")}
          className={`subtitle ${
            tabType === "blocked" ? "active" : ""
          } btn tab`}
        >
          Blocked
        </Link>
      </div>
      <div className="main__header__right">
        <GridViewSharpIcon />
        <TableRowsSharpIcon />
      </div>
    </div>
  );
};

export default MainHeader;
