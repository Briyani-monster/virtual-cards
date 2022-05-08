import React, { useContext, useEffect } from "react";
import { DataContext } from "../context/DataProvider";
import Cards from "./Cards";
import Filter from "./Filter";
import MainHeader from "./Main/MainHeader";
import { Routes, Route } from "react-router-dom";
import FilterCards from "./FilterCards";
const Main = () => {
  const { allCards, yourCards, BlockedCards, searchCards, filteredCards } =
    useContext(DataContext);

  return (
    <>
      <MainHeader />
      <Filter />
      <Routes>
        <Route path="/" element={<Cards cards={allCards} />} />
        <Route path="/your" element={<Cards cards={yourCards} />} />
        <Route path="/blocked" element={<Cards cards={BlockedCards} />} />
        <Route path="/search" element={<Cards cards={searchCards} />} />
        <Route path="/filter" element={<FilterCards cards={filteredCards} />} />
      </Routes>
    </>
  );
};

export default Main;
