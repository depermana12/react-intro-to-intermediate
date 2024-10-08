import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import fetchPet from "../services/fetchPet";
import Carousel from "./Carousel";
import Modal from "./Modal";
import AdoptedPetContext from "../contexts/AdoptedPet";
// import { PetAPIResponse } from "../types/APIResponsesTypes";

const Details = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    throw new Error("id please, you have to give me an id, I wanted an id");
  }

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const { data, isError, isLoading } = useQuery({
    queryKey: ["details", id] as const,
    queryFn: fetchPet,
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading pet details</div>;

  const pet = data?.pets[0];

  if (!pet) {
    throw new Error("no pet lol");
  }

  return (
    <div className="m-10 flex flex-col items-center justify-center rounded-lg bg-gray-100 p-10 shadow-lg">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} — {pet.breed} — {pet.city}, {pet.state}
        </h2>
        <button
          className="rounded border-none bg-orange-500 px-6 py-2 text-white hover:opacity-50"
          onClick={() => setShowModal(true)}
        >
          Adopt {pet.name}
        </button>
        <p>{pet.description}</p>
        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt {pet.name}</h1>
              <div className="rounded border-none bg-orange-500 px-6 py-2 text-white hover:opacity-50">
                <button
                  onClick={() => {
                    setAdoptedPet(pet);
                    navigate("/");
                  }}
                >
                  Yes
                </button>
                <button
                  className="rounded border-none bg-orange-500 px-6 py-2 text-white hover:opacity-50"
                  onClick={() => setShowModal(false)}
                >
                  No
                </button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};
export default Details;
