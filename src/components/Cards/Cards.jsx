import Card from "../Card/Card";

export default function Cards({ characters }) {
  const onClose = () => {
    window.alert("Cerrando tarjeta");
  };
  return (
    <div>
      {characters.map(({ name, species, gender, image }) => {
        return (
          <Card
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
}
