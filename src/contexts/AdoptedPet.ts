import { createContext } from "react";
import { iPet } from "../types/APIResponsesTypes";

const AdoptedPetContext = createContext<[iPet, (adoptedPet: iPet) => void]>([
  {
    id: 1234,
    name: "Sapi",
    animal: "cat",
    description: "meow",
    breed: "British Shorthair",
    images: [],
    city: "Los Angeles",
    state: "CA",
  },
  () => {},
]);

export default AdoptedPetContext;
