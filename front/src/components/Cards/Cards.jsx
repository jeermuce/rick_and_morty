import Card from "../Card/Card";
import styles from "./Cards.module.css";
export default function Cards({ characters, onClose, setCharacters }) {
  //console.log(onClose);
  return (
    <div className={styles.cardsBox}>
      <div className={styles.cardsFlex}>
        {characters?.map(({ id, name, species, gender, image }) => {
          return (
            <Card
              id={id}
              key={id}
              image={image}
              name={name}
              onClose={onClose}
              species={species}
              gender={gender}
            />
          );
        })}
      </div>
    </div>
  );
}
