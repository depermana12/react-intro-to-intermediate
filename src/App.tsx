import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdoptedPetContext from "./contexts/AdoptedPet";
import Details from "./components/Details";
import SearchParams from "./components/SearchParams";
import { IPet } from "./types/APIResponsesTypes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPet = useState(null as IPet | null);
  return (
    <div
      className="m-0 p-0"
      style={{
        background: "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
      }}
    >
      <QueryClientProvider client={queryClient}>
        <AdoptedPetContext.Provider value={adoptedPet}>
          <header className="mb-10 w-full bg-gradient-to-b from-yellow-500 via-orange-500 to-red-500 p-7 text-center">
            <Link className="text-6xl text-white hover:text-green-200" to="/">
              Adopt me
            </Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </div>
  );
};

export default App;
