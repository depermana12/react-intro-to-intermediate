import { useState, useEffect } from "react";

const localCache = {};

// custom hooks are basically just other hooks package together
// encapsulate it, now this is testable, re-useable
export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading0");

      const response = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`,
      );

      const data = await response.json();
      localCache[animal] = data.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);
  return [breedList, status];
}
