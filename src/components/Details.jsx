import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import fetchPet from "../services/fetchPet";
import Carousel from "./Carousel";
import Modal from "./Modal";
import AdoptedPetContext from "../contexts/AdoptedPet";

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isError, isLoading } = useQuery({
    queryKey: ["details", id],
    queryFn: fetchPet,
  });
  // eslint-disable-next-line no-unused-vars
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);

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
