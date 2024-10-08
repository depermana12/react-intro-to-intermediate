import { QueryFunction } from "@tanstack/react-query";
import { PetAPIResponse } from "../types/APIResponsesTypes";

const fetchPet: QueryFunction<
  PetAPIResponse,
  readonly ["details", string]
> = async ({ queryKey }) => {
  const id = queryKey[1];

  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }

  const data = apiRes.json();
  return data;
};
export default fetchPet;
