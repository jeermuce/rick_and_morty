import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";
import RickAndMortyLogo from "../../assets/Rick-And-Morty-Logo.png";
import portal from "../../assets/portal_best.png";
import logoutSymbol from "../../assets/logout_symbol.png";
import homeSymbol from "../../assets/home_symbol.png";
import heartSymbol from "../../assets/heart.png";
import eroteme from "../../assets/eroteme.png";
const Nav = ({ onSearch, setAccess }) => {
  const handleLogout = () => {
    setAccess(false);
  };
  return (
    <div className={style.Nav}>
      <Link to="/home">
        <img
          src={RickAndMortyLogo}
          alt="Rick and Morty"
          className={style.titleImage}
        />
      </Link>
      <Link to="/home">
        <button className={style.button}>
          <img src={homeSymbol} alt="homeSymbol" className={style.homeSymbol} />
        </button>
      </Link>
      <Link to="/about">
        <button className={style.button}>
          {" "}
          <img src={eroteme} alt="eroteme" className={style.eroteme} />
        </button>
      </Link>
      <Link to="/favorites">
        <button className={style.favoritesButton}>
          <img
            src={heartSymbol}
            alt="heartSymbol"
            className={style.heartSymbol}
          />
        </button>
      </Link>
      <Link to="/">
        <button className={style.logoutButton} onClick={handleLogout}>
          <img
            src={logoutSymbol}
            alt="logoutSymbol"
            className={style.logoutSymbol}
          />
        </button>
      </Link>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};
export default Nav;
