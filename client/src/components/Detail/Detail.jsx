/*Detail.jsx*/
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";

const Detail = () => {
  const { detailID } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const BASE_URL = "http://localhost:3001/rickandmorty";
    axios(`${BASE_URL}/character/${detailID}`).then((response) => {
      setCharacter(response.data);
    });
  }, []);

  return (
    <section className={style.detailPage}>
      {character.origin ? (
        <>
          <section className={style.detailContainer}>
            <div className={style.dataContainer}>
              <h1>Details</h1>
              <h2>
                <b>Name: {character.name}</b>
              </h2>
              <p>Status: {character.status}</p>
              <p>Species: {character.species}</p>
              <p>Gender: {character.gender}</p>
              <p>Origin: {character.origin.name}</p>
            </div>
            <img
              src={character.image}
              alt={character.name}
              className={style.characterImage}
            />
          </section>
        </>
      ) : (
        <h2>loading...</h2>
      )}
    </section>
  );
};

export default Detail;
