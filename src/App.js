import { useContext, useEffect } from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import DataProvider, { DataContext } from "./context/DataProvider.jsx";
import axios from "axios";

function App() {
  const { setMainCards } = useContext(DataContext);
  useEffect(() => {
    axios
      .get(
        `https://raw.githubusercontent.com/Briyani-monster/virtual-card/gh-pages/data.json`
      )
      .then((res) => {
        const persons = res.data;
        setMainCards(persons.data);
      });
  }, []);
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
