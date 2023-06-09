import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./Favorites.module.css";
import { useState } from "react";
import { Connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions/actions";

function Favorites() {
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);
    const favorites = useSelector((state) => state.myFavorites);
    function handleOrder(event) {
        dispatch(orderCards(event.target.value));
        setAux(!aux);
    }
    function handleFilter(event) {
        dispatch(filterCards(event.target.value));
    }
    return (
        <div className={style.cardsBox}>
            <div className={style.filters}>
                <select onChange={handleOrder}>
                    <option value="A">Ascending</option>
                    <option value="D">Descending</option>
                </select>
                <select onChange={handleFilter}>
                    <option value="All">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Unknown">Unknown</option>
                    <option value="Genderless">Genderless</option>
                </select>
            </div>
            <div className={style.cardsGrid}>
                {favorites?.map(({ id, name, species, gender, image }) => {
                    return (
                        <Card
                            id={id}
                            key={id}
                            image={image}
                            name={name}
                            species={species}
                            gender={gender}
                        />
                    );
                })}
            </div>
        </div>
    );
}
export default Favorites;
