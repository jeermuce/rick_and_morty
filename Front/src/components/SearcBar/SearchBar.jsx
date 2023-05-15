import { useState } from "react";
import style from "./SearchBar.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function SearchBar({ onSearch }) {
  const [id, setID] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setID(event.target.value);
  };

  const handleSearch = () => {
    if (id >= 1 && id <= 826) {
      onSearch(id);
      setID("");
    } else {
      setID("");
      alert("Please enter a valid ID between 1 and 826");
    }
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      handleSearch();
      navigate("/home");
    }
  };

  return (
    <section className={style.searchBarSection}>
      <input
        type="search"
        className={style.searchInput}
        placeholder="Search by ID: 1-826..."
        value={id}
        onChange={handleChange}
        onKeyUp={handleEnter}
      />
      <Link to="/home">
        <button
          className={style.searchButton}
          onClick={handleSearch}
          onKeyDown={handleEnter}
        >
          +
        </button>
      </Link>
    </section>
  );
}
