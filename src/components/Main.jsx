import React from "react";
import Cards from "./Cards";
import Filter from "./Filter";

import MainHeader from "./Main/MainHeader";
const Main = () => {
  return (
    <>
      <MainHeader />
      <Filter />
      <Cards />
    </>
  );
};

export default Main;
