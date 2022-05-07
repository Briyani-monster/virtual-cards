import React from "react";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import FilterListSharpIcon from "@mui/icons-material/FilterListSharp";
const Filter = () => {
  return (
    <div className="filter">
      <div className="filter__search">
        <input type="text" placeholder="Search" />
        <SearchSharpIcon />
      </div>
      <button className="filter_filterBtn btn">
        <FilterListSharpIcon />
        <span>Filter</span>
      </button>
    </div>
  );
};

export default Filter;
