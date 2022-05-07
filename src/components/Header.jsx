import React from "react";
import AddIcon from "@mui/icons-material/Add";
import VideocamIcon from "@mui/icons-material/Videocam";
const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <h1 className="h1">Virtual cards</h1>
        <a href="#" className="link header-link">
          <VideocamIcon />
          <span>learn more</span>
        </a>
      </div>
      <div className="header__right">
        <button className="addbtn btn button">
          <AddIcon />
          <span>virtual card</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
