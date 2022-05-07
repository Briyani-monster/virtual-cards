import React, { useContext } from "react";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import FilterListSharpIcon from "@mui/icons-material/FilterListSharp";
import { DataContext } from "../context/DataProvider";
import { Link } from "react-router-dom";

const Filter = () => {
  const { openSearch, setOpenSearch, searchFilter, setSearchFilter, tabType } =
    useContext(DataContext);
  const onClickHandler = () => {
    setOpenSearch((prev) => !prev);
    setSearchFilter("");
  };
  const onChangeHandler = (e) => {
    setSearchFilter(e.target.value);
  };
  return (
    <div className={`filter ${openSearch && "active"}`}>
      <div className="filter__search ">
        <input
          type="text"
          value={searchFilter}
          placeholder="Search"
          onChange={(e) => onChangeHandler(e)}
        />
        <Link
          to={!openSearch ? "/search" : tabType === "all" ? "/" : `/${tabType}`}
        >
          <SearchSharpIcon onClick={onClickHandler} />
        </Link>
      </div>
      <button className="filter_filterBtn btn">
        <FilterListSharpIcon />
        <span>Filter</span>
      </button>
    </div>
  );
};

export default Filter;
