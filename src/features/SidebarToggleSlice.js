import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebar: false,
};

const SidebarToggleSlice = createSlice({
  name: "sidebarToggle",
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.sidebar = true;
    },

    closeSidebar: (state) => {
      state.sidebar = false;
    },
  },
});

export const { openSidebar, closeSidebar } = SidebarToggleSlice.actions;
export default SidebarToggleSlice.reducer;
