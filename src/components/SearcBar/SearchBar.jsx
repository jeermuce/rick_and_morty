import { useState } from "react";
import style from "./SearchBar.module.css";
export default function SearchBar({ onSearch }) {
  const [id, setID] = useState("");
  const handleChange = (event) => {
    setID(event.target.value);
  };
  const handleSearch = () => {
    onSearch(id);
    setID("");
  };
  return (
    <div className={style.SearchBarDiv}>
      <input
        type="search"
        className={style.searchInput}
        placeholder="Search by ID: 1-826..."
        value={id}
        onChange={handleChange}
      />
      <button className={style.searchButton} onClick={handleSearch}>
        Agregar
      </button>
    </div>
  );
}
