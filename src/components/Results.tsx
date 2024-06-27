import Pets from "./Pets";
import { IPet } from "../types/APIResponsesTypes";

const Results = ({ pets }: { pets: IPet[] }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
