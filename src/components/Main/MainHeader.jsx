import React, { useContext } from "react";
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp";
import TableRowsSharpIcon from "@mui/icons-material/TableRowsSharp";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";

const MainHeader = () => {
  const {
    setTabType,
    tabType,
    allCards,
    yourCards,
    BlockedCards,
    setFilteredCards,
    setOpenfilter,
    setCardholder,
    setBurner,
    setSubscription,
    setSearchCards,
    setgridView,
  } = useContext(DataContext);
  const onClickHandler = (data) => {
    setTabType(data);
    if (data === "all") {
      setFilteredCards(allCards);
      setSearchCards(allCards);
    } else if (data === "blocked") {
      setFilteredCards(BlockedCards);
      setSearchCards(BlockedCards);
    } else if (data === "your") {
      setFilteredCards(yourCards);
      setSearchCards(yourCards);
    }
    setBurner(false);
    setSubscription(false);
    setCardholder("");
    setOpenfilter(false);
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
        <GridViewSharpIcon onClick={() => setgridView(true)} />
        <TableRowsSharpIcon onClick={() => setgridView(false)} />
      </div>
    </div>
  );
};

export default MainHeader;
