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
    const data = response.data[0].woeid;

    const getWeather = await api.get(`/api/location/${data}`);

    const finalData = {
      location: getWeather.data.title,
      weather: getWeather.data.consolidated_weather,
    };

    return finalData;
  }
);

const initialState = {
  currentLocation: null,
  todayWeather: null,
  nextFiveDaysWeather: null,
};

const CurrentLocationSlice = createSlice({
  name: "currentLocation",
  initialState,
  reducers: {},
  extraReducers: {
    [getCurrentLocation.fulfilled]: (state, action) => {
      state.currentLocation = action.payload.location;
      state.todayWeather = action.payload.weather[0];
      state.nextFiveDaysWeather = action.payload.weather.slice(1);
    },
  },
});

// export const {} = CurrentLocationSlice.actions;
export default CurrentLocationSlice.reducer;
