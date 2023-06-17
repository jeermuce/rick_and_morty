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

const URL = "http://localhost:3001/rickandmorty/login/";
function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  async function login(userData) {
    try {
      const { email, password } = userData;
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  async function onSearch(id) {
    if (id) {
      const characterExists = characters.find((character) => {
        return character.id == id;
      });
      if (!!characterExists) {
        alert("Character already added");
      } else {
        try {
          const { data } = await axios.get(
            `http://localhost:3001/rickandmorty/character/${id}`
          );
          if (data.name) setCharacters([...characters, data]);
        } catch (error) {
          alert("Please enter a valid id");
        }
      }
    } else {
      alert("Please enter a valid id");
    }
  }

  function onClose(id) {
    setCharacters(characters.filter((character) => character.id != id));
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
