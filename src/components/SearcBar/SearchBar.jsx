import style from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  return (
    <div className={style.SearchBarDiv}>
      {" "}
      <input className={style.searchInput} placeholder="Search..." />
      <button
        className={style.searchButton}
        onClick={(id) => {
          onSearch(id);
        }}
      >
        Agregar
      </button>
    </div>
  );
}
