import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LocationState {
  city: string | undefined;
  region: string | undefined;
}

const initialState: LocationState = {
  city: undefined,
  region: undefined,
};

export const locationSlice = createSlice({
  name: "location",
  initialState: initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<LocationState>) => {
      state.city = action.payload.city;
      state.region = action.payload.region;
    },
    clearLocation: (state) => {
      state.city = undefined;
      state.region = undefined;
    },
  },
});

export const { setLocation, clearLocation } = locationSlice.actions;
export default locationSlice.reducer;
