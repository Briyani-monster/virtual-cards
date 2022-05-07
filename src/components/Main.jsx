import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import Cards from "./Cards";
import Filter from "./Filter";
import MainHeader from "./Main/MainHeader";
import { Routes, Route } from "react-router-dom";
const Main = () => {
  const { allCards, yourCards, BlockedCards } = useContext(DataContext);
  return (
    <>
      <MainHeader />
      <Filter />
      <Routes>
        <Route path="/" element={<Cards cards={allCards} />} />
        <Route path="/your" element={<Cards cards={yourCards} />} />
        <Route path="/blocked" element={<Cards cards={BlockedCards} />} />
      </Routes>
    </>
  );
};

export default Main;
