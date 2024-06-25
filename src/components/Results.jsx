import Pets from "./Pets";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No pets found</h1>
      ) : (
        pets.map((pet) => {
          return (
            <Pets
              name={pet.name}
              animal={pet.animal}
              breed={pet.breed}
              images={pet.images}
              location={`${pet.city}, ${pet.state}`}
              id={pet.id}
              key={pet.id}
            />
          );
        })
      )}
    </div>
  );
};
export default Results;
