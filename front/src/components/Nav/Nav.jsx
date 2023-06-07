import React from "react";
import SearchBar from "../SearcBar/SearchBar";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";
import RickAndMortyLogo from "./Rick-And-Morty-Logo.png"; // import the image here

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
        <button className={style.button}>Home</button>
      </Link>
      <Link to="/about">
        <button className={style.button}>About</button>
      </Link>
      <SearchBar onSearch={onSearch} />
      <Link to="/favorites">
        <button className={style.favoritesButton}>Favorites</button>
      </Link>
      <Link to="/">
        <button className={style.logoutButton}>Logout</button>
      </Link>
    </div>
  );
};
export default Nav;
