import React, { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataProvider";
import { Link } from "react-router-dom";
const FilterModal = () => {
  const {
    cardHolder,
    filtervalue,
    setFilterValue,
    tabType,
    setFilteredCards,
    mainCards,
    yourCards,
    BlockedCards,
    cardholder,
    subscription,
    burner,
    setCardholder,
    setBurner,
    setSubscription,
  } = useContext(DataContext);

  const reset = () => {
    setCardholder("");
    setBurner(false);
    setSubscription(false);
    console.log("reset ran", cardholder, burner, subscription);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(filtervalue);
    if (tabType === "all") setFilteredCards(mainCards);
    else if (tabType === "your") setFilteredCards(yourCards);
    else if (tabType === "blocked") setFilteredCards(BlockedCards);
  };
  const onChangeHandler = (e) => {
    let nameval = e.target.name;
    let value = e.target.value;
    if (e.target.name === "cardholder") {
      value = e.target.value;
    }
    if (nameval === "burner") setBurner((prev) => !prev);
    if (nameval === "subscription") setSubscription((prev) => !prev);
    if (nameval === "cardholder") {
      setCardholder(value);
    }
  };

  return (
    <form className="filter-modal" onSubmit={(e) => onSubmitHandler(e)}>
      <h4 className="subtitle">Filters</h4>
      <div className="filter-modal__types">
        <h4 className="subtitle">Types</h4>
        <div className="filter-modal__types__body">
          <div className="filter-modal__types__body__type">
            <input
              type="checkbox"
              id="subscription"
              checked={subscription}
              name="subscription"
              onChange={(e) => onChangeHandler(e)}
            />
            <label htmlFor="subscription">Subscription</label>
          </div>
          <div className="filter-modal__types__body__type">
            <input
              type="checkbox"
              id="burner"
              checked={burner}
              name="burner"
              onChange={(e) => onChangeHandler(e)}
            />
            <label htmlFor="burner">Burner</label>
          </div>
        </div>
      </div>
      <div className="filter-modal__cardholder">
        <h4 className="subtitle">Cardholder</h4>
        <select
          name="cardholder"
          value={cardholder}
          onChange={(e) => onChangeHandler(e)}
          className="cardholder"
        >
          <option value={""}>select cardholder</option>
          {cardHolder.map((name, i) => {
            return (
              <option key={i} value={name}>
                {name.replace(/(?:^|\s)\S/g, (a) => a.toUpperCase())}
              </option>
            );
          })}
        </select>
      </div>
      <div className="filter-modal__footer">
        <Link to={`/filter`} type="submit" className="btn button clear">
          Apply
        </Link>
        <Link
          to={tabType === "all" ? "/" : `/${tabType}`}
          type="reset"
          onClick={reset}
          className="btn button apply"
        >
          clear
        </Link>
      </div>
    </form>
  );
};

export default FilterModal;
