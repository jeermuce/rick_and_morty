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
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function onSearch(id) {
    if (id) {
      const characterExists = characters.find(
        (character) => character.id === Number(id)
      );
      if (characterExists) {
        alert("Character already added");
      } else {
        const BASE_URL = "http:/localhost:3001/rickandmorty";

        axios(`${BASE_URL}/character/${id}`)
          .then(({ data }) => {
            setCharacters([...characters, data]);
          })
          .catch((err) => console.log(`Hubo un error${err}`));
      }
    } else {
      alert("Please enter a valid id");
    }
  }
  function onSearch(id) {
    if (id) {
      const characterExists = characters.find((character) => {
        return character.id == id;
      });
      if (!!characterExists) {
        alert("Character already added");
      } else {
        const BASE_URL = "http://localhost:3001/rickandmorty";

        axios(`${BASE_URL}/character/${id}`)
          .then(({ data }) => {
            setCharacters([...characters, data]);
          })
          .catch((err) => console.log(`Hubo un error${err}`));
      }
    } else {
      alert("Please enter a valid id");
    }
  }

  function onClose(id) {
    console.log("onClose has been called");
    setCharacters(characters.filter((character) => character.id != id));
  }
  function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    });
  }

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
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailID" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
