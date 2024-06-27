import { configureStore } from "@reduxjs/toolkit";
import adoptedPet from "../slices/adoptedPetSlice";
import searchParams from "../slices/searchParamsSlice";
import { petApi } from "../services/petApiService";

const store = configureStore({
  reducer: {
    adoptedPet,
    searchParams,
    [petApi.reducerPath]: petApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(petApi.middleware),
});

export default store;
