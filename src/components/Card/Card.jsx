import style from "./Card.module.css";

export default function Card({ id, name, species, gender, image, onClose }) {
  return (
    <div className={style.cardContainer}>
      <button className={style.closeButton} onClick={() => onClose(id)}>
        x
      </button>
      <button className={style.textButton}>
        <img className={style.characterIcon} src={image} alt="" />
        <h2 className={style.name}>{name}</h2>
        <h2 className={style.data}>{species}</h2>
        <h2 className={style.data}>{gender}</h2>
      </button>
    </div>
  );
}
