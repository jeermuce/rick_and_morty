import Card from "../Card/Card";
import { CardsContainer } from "./styledComponets";
export default function Cards({ characters }) {
  const onClose = () => {
    window.alert("Cerrando tarjeta");
  };
  return (
    <CardsContainer>
      {characters.map(({ name, species, gender, image }) => {
        return (
          <Card
            image={image}
            name={name}
            species={species}
            gender={gender}
            onClose={onClose}
          />
        );
      })}
    </CardsContainer>
  );
}
