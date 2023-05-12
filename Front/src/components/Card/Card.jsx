import style from "./Card.module.css";
import { Link } from "react-router-dom";
import Detail from "../Detail/Detail";
import { addFavorite, removeFavorite } from "../../redux/actions/actions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
function Card({
  id,
  name,
  species,
  gender,
  image,
  onClose,
  addFavorite,
  removeFavorite,
  myFavorites,
}) {
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFavorite(true);
      }
    });
  }, [myFavorites]);
  const [isFavorite, setIsFavorite] = useState(false);
  function handleFavorite() {
    if (!!isFavorite) {
      setIsFavorite(false);
      removeFavorite(id);
    } else {
      setIsFavorite(true);
      addFavorite({ id, name, species, gender, image, onClose });
    }
  }

  return (
    <section className={style.card}>
      <section className={style.buttons}>
        {isFavorite ? (
          <b onClick={handleFavorite} className={style.favoriteButton}>
            ❤️
          </b>
        ) : (
          <b onClick={handleFavorite} className={style.favoriteButton}>
            💚
          </b>
        )}
        <b className={style.closeButton} onClick={() => onClose(Number(id))}>
          ✖
        </b>
      </section>

      <img className={style.charIcon} src={image} alt="" />
      <Link to={`/Detail/${id}`}>
        <b>{name}</b>
      </Link>
      <b>{species}</b>
      <b> {gender}</b>
    </section>
  );
}
function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    addFavorite: (character) => dispatch(addFavorite(character)),
    removeFavorite: (id) => dispatch(removeFavorite(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
