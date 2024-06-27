import { createContext } from "react";
import { IPet } from "../types/APIResponsesTypes";

const AdoptedPetContext = createContext<
  [IPet | null, (adoptedPet: IPet) => void]
>([
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
