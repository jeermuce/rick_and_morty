import React from "react";
import SearchBar from "../SearcBar/SearchBar";
import style from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import RickAndMortyLogo from "./Rick-And-Morty-Logo.webp"; // import the image here

const Nav = ({ onSearch, setAccess }) => {
  const handleLogout = () => {
    setAccess(false);
  };
  return (
    <div className={style.Nav}>
      <NavLink to="/home">
        <img
          src={RickAndMortyLogo}
          alt="Rick and Morty"
          className={style.titleImage}
        />
      </NavLink>

      <NavLink to="/home">
        <button className={style.button}>Home</button>
      </NavLink>
      <NavLink to="/about">
        <button className={style.button}>About</button>
      </NavLink>
      <SearchBar onSearch={onSearch} />
      <NavLink to="/favorites">
        <button className={style.favoritesButton}>Favorites</button>
      </NavLink>
      <NavLink to="/">
        <button className={style.logoutButton}>Logout</button>
      </NavLink>
    </div>
  );
};
export default Nav;
