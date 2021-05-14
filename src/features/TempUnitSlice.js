import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tempUnit: "celsius",
};

const TempUnitSlice = createSlice({
  name: "tempUnit",
  initialState,
  reducers: {
    changeToFahrenheit: (state) => {
      state.tempUnit = "fahrenheit";
    },

    ChangeToCelsius: (state) => {
      state.tempUnit = "celsius";
    },
  },
});

export const { changeToFahrenheit, ChangeToCelsius } = TempUnitSlice.actions;

export default TempUnitSlice.reducer;
