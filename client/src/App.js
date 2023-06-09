import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import style from "./App.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
  BrowserRouter,
} from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import Form from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";

function App() {
  //* Hooks
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  //! Fake Credentials
  const EMAIL = "Rick@schwifty.com";
  const PASSWORD = "M59tw123";

  //* Event Handlers
  const onSearch = (id) => {
    if (id) {
      const characterExists = characters.find(
        (character) => character.id === Number(id)
      );
      if (characterExists) {
        alert("Character already added");
      } else {
        axiosCaller(id);
      }
    } else {
      alert("Please enter a valid id");
    }
  };

  const axiosCaller = (id) => {
    const BASE_URL = "http://localhost:3001/rickandmorty";
    //const BASE_URL = "https://rickandmortyapi.com/api/";

    axios(`${BASE_URL}/character/${id}`)
      .then(({ data }) => {
        setCharacters([...characters, data]);
      })
      .catch((err) => console.log(`Hubo un error${err}`));
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  const login = (userData) => {
    if (userData.username === EMAIL && userData.password === PASSWORD) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Invalid Credentials");
    }
  };

  //* Render
  return (
    <div className="App">
      {pathname !== "/" && (
        <Nav onSearch={onSearch} setAccess={setAccess} className={style.Nav} />
      )}
      <Routes>
        <Route
          path="/"
          element={<Form login={login} setAccess={setAccess} />}
        />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailID" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
