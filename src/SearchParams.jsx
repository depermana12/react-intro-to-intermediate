import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");

  const handleInputLocation = (event) => {
    setLocation(event.target.value);
  };

  const handleSelect = (event) => {
    setAnimal(event.target.value);
  };

  return (
    <div className="search-params">
      <form>
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
        <button>Submit</button>
      </form>
    </div>
  );
};
export default SearchParams;
