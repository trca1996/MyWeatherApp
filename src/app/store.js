import { configureStore } from "@reduxjs/toolkit";
import TempUnitReducer from "../features/TempUnitSlice";
import SidebarToggleReducer from "../features/SidebarToggleSlice";

export const store = configureStore({
  reducer: {
    tempUnit: TempUnitReducer,
    sidebarToggle: SidebarToggleReducer,
  },
});
