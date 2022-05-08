import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
export const DataContext = createContext([]);
const DataProvider = ({ children }) => {
  const [mainCards, setMainCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [yourCards, setYourCards] = useState([]);
  const [allCards, setAllCards] = useState([]);
  const [BlockedCards, setBlockedCards] = useState([]);
  const [filtervalue, setFilterValue] = useState({});
  const [subscription, setSubscription] = useState(false);
  const [burner, setBurner] = useState(false);
  const [cardholder, setCardholder] = useState("");
  const [tabType, setTabType] = useState("all");
  const [openSearch, setOpenSearch] = useState(false);
  const [openfilter, setOpenfilter] = useState(false);
  const [searchFilter, setSearchFilter] = useState("");
  const [searchCards, setSearchCards] = useState([]);
  const [cardHolder, setCardHolder] = useState([]);
  const [displaySize, setDisplaySize] = useState(10);
  const fetchurl = `https://raw.githubusercontent.com/Briyani-monster/virtual-card/gh-pages/data.json`;
  useEffect(() => {
    axios.get(fetchurl).then((res) => {
      const persons = res.data;
      setMainCards(persons.data);
    });
  }, []);
  useEffect(() => {
    setAllCards(mainCards);
    setYourCards(mainCards.filter((card) => card.card_holder === "ashish"));
    setBlockedCards(mainCards.filter((card) => card.status === "blocked"));
    setCardHolder([...new Set(mainCards.map((name) => name.card_holder))]);
    if (tabType === "all") {
      setSearchCards(mainCards);
      setFilteredCards(mainCards);
    } else if (tabType === "your") {
      setSearchCards(yourCards);
      setFilteredCards(yourCards);
    } else if (tabType === "blocked") {
      setSearchCards(BlockedCards);
      setFilteredCards(BlockedCards);
    }
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
        cardHolder,
        setCardHolder,
        subscription,
        setSubscription,
        burner,
        setBurner,
        cardholder,
        setCardholder,
        openfilter,
        setOpenfilter,
        displaySize,
        setDisplaySize,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataProvider;
