import { useState, useEffect } from "react";
import useBreedList from "./useBreedList";
// eslint-disable-next-line no-unused-vars
import Pet from "./Pet";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);

  const requestPets = async () => {
    try {
      const response = await fetch(
        `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`,
      );
      const result = await response.json();
      setPets(result.pets);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    requestPets();
  }, []);

  const handleInputLocation = (event) => {
    setLocation(event.target.value);
  };

  const handleSelect = (event) => {
    setAnimal(event.target.value);
    setBreed("");
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    requestPets();
  };

  return (
    <div className="search-params">
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            onChange={handleInputLocation}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select value={animal} id="animal" onChange={handleSelect}>
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            value={breed}
            disabled={breeds.length === 0}
            id="breed"
            onChange={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {pets.map((pet) => {
        return (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            key={pet.id}
          />
        );
      })}
    </div>
  );
};
export default SearchParams;
