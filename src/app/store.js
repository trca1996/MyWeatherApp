import { configureStore } from "@reduxjs/toolkit";
import TempUnitReducer from "../features/TempUnitSlice";

export const store = configureStore({
  reducer: {
    tempUnit: TempUnitReducer,
  },
});
