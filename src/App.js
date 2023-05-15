import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import "./App.module.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const onSearch = (id) => {
    console.log("check contents of id", id);
    console.log("characters array contents", characters);
    if (characters?.find((char) => char.id === id)) {
      console.log("check if repeat vetoer runs", id);
      window.alert("¡Este personaje ya está en la lista!");
      return;
    }
    const BASE_URL = "https://rickandmortyapi.com/api/";
    axios(`${BASE_URL}/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  };
  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };
  const [characters, setCharacters] = useState([]);
  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
