import React, { useContext } from "react";
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp";
import TableRowsSharpIcon from "@mui/icons-material/TableRowsSharp";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";

const MainHeader = () => {
  const { setTabType, tabType, setOpenSearch } = useContext(DataContext);
  const onClickHandler = (data) => {
    setTabType(data);
    // setOpenSearch(false);
  };
  return (
    <div className="main__header">
      <div className="main__header__left">
        <Link
          to="/your"
          onClick={() => onClickHandler("your")}
          className={`subtitle ${tabType === "your" ? "active" : ""} btn tab`}
        >
          Your
        </Link>
        <Link
          to="/"
          onClick={() => onClickHandler("all")}
          className={`subtitle ${tabType === "all" ? "active" : ""} btn tab`}
        >
          All
        </Link>
        <Link
          to="/blocked"
          onClick={() => onClickHandler("blocked")}
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
