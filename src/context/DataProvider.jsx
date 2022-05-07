import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
export const DataContext = createContext([]);
const DataProvider = ({ children }) => {
  const [mainCards, setMainCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [yourCards, setYourCards] = useState([]);
  const [allCards, setAllCards] = useState([]);
  const [BlockedCards, setBlockedCards] = useState([]);
  const [filtervalue, setFilterValue] = useState([]);
  const [tabType, setTabType] = useState("all");
  const [openSearch, setOpenSearch] = useState(false);
  const [searchFilter, setSearchFilter] = useState("");
  const [searchCards, setSearchCards] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://raw.githubusercontent.com/Briyani-monster/virtual-card/gh-pages/data.json`
      )
      .then((res) => {
        const persons = res.data;
        setMainCards(persons.data);
      });
    setAllCards(mainCards);
    setYourCards(mainCards.filter((card) => card.card_holder === "ashish"));
    setBlockedCards(mainCards.filter((card) => card.status === "blocked"));
    if (tabType === "all") setSearchCards(mainCards);
    else if (tabType === "your") setSearchCards(yourCards);
    else if (tabType === "blocked") setSearchCards(BlockedCards);
  }, [mainCards]);
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
        openSearch,
        setOpenSearch,
        searchFilter,
        setSearchFilter,
        searchCards,
        setSearchCards,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataProvider;
