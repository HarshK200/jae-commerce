import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "@/store/features/location/locationSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      location: locationReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
