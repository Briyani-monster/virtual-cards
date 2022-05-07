import { createContext, useContext, useState, useEffect } from "react";

export const DataContext = createContext([]);
const DataProvider = ({ children }) => {
  const [mainCards, setMainCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [yourCards, setYourCards] = useState([]);
  const [allCards, setAllCards] = useState([]);
  const [BlockedCards, setBlockedCards] = useState([]);
  const [filtervalue, setFilterValue] = useState([]);
  const [tabType, setTabType] = useState("all");

  return (
    <DataContext.Provider
      value={{
        mainCards,
        setMainCards,
        filteredCards,
        setFilteredCards,
        yourCards,
        setYourCards,
        allCards,
        setAllCards,
        BlockedCards,
        setBlockedCards,
        filtervalue,
        setFilterValue,
        tabType,
        setTabType,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataProvider;
