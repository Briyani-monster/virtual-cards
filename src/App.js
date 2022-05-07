import { useContext, useEffect } from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
