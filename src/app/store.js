import { configureStore } from "@reduxjs/toolkit";
import TempUnitReducer from "../features/TempUnitSlice";
import SidebarToggleReducer from "../features/SidebarToggleSlice";
import CurrentLocationReducer from "../features/CurrentLocationSlice";

export const store = configureStore({
  reducer: {
    tempUnit: TempUnitReducer,
    sidebarToggle: SidebarToggleReducer,
    currentLocation: CurrentLocationReducer,
  },
});
