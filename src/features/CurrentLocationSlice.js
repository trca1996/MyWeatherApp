import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";

export const getCurrentLocation = createAsyncThunk(
  "currentLocation/getCurrentLocation",
  async (payload) => {
    const response = await api.get(`/api/location/search`, {
      params: {
        lattlong: `${payload.lat},${payload.lng}`,
      },
    });
    const data = response.data[0];
    return data;
  }
);

export const getLocationWeather = createAsyncThunk(
  "locationWeather/getLocationWeather",
  async (woeid) => {
    const response = await api.get(`/api/location/${woeid}`);

    const data = response.data;

    return data;
  }
);

const initialState = {
  currentLocation: null,
  locationWeather: null,
};

const CurrentLocationSlice = createSlice({
  name: "currentLocation",
  initialState,
  reducers: {},
  extraReducers: {
    [getCurrentLocation.fulfilled]: (state, action) => {
      state.currentLocation = action.payload;
    },
    [getLocationWeather.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.locationWeather = action.payload;
    },
  },
});

// export const {} = CurrentLocationSlice.actions;
export default CurrentLocationSlice.reducer;
