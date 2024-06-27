import { QueryFunction } from "@tanstack/react-query";
import { Animal, BreedListAPIResponse } from "../types/APIResponsesTypes";

const fetchBreedList: QueryFunction<
  BreedListAPIResponse,
  ["breeds", Animal]
> = async ({ queryKey }) => {
  const animal = queryKey[1];

  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`,
  );
  if (!apiRes.ok) {
    throw new Error(`details/${animal} fetch not ok`);
  }
  const data = apiRes.json();
  return data;
};
export default fetchBreedList;
