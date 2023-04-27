import Cards from "./components/Cards/Cards.jsx";
import SearchBar from "./components/SearcBar/SearchBar";
import characters from "./data.js";
import style from "./App.module.css";
function App() {
  return (
    <div className="App">
      <div className={style.nav}>
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      </div>
      <div>
        <Cards characters={characters} />
      </div>
    </div>
  );
}

export default App;
