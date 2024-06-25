import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "../services/fetchPet";
import Carousel from "./Carousel";

const Details = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = useQuery({
    queryKey: ["details", id],
    queryFn: fetchPet,
  });

  if (isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="error-pane">
        <h2>Error loading pet details</h2>
      </div>
    );
  }

  const pet = data.pets[0];

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} — {pet.breed} — {pet.city}, {pet.state}
        </h2>
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
};
export default Details;
