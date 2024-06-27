import { QueryStatus, useQuery } from "@tanstack/react-query";
import fetchBreedList from "../services/fetchBreedList";
import { Animal } from "../types/APIResponsesTypes";

export default function useBreedList(animal: Animal) {
  const { data, status } = useQuery({
    queryKey: ["breeds", animal],
    queryFn: fetchBreedList,
  });

  return [data?.breeds ?? [], status] as [string[], QueryStatus];
}
