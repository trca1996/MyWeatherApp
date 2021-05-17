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
    const data = await response.data[0].woeid;

    const getWeather = await api.get(`/api/location/${data}`);

    const finalData = {
      location: getWeather.data.title,
      weather: getWeather.data.consolidated_weather,
    };

    return finalData;
  }
);

export const getSearchWoeid = createAsyncThunk(
  "searchLocation/getSearchWoeid",
  async (payload) => {
    const response = await api.get("/api/location/search", {
      params: {
        query: `${payload}`,
      },
    });

    const data = await response.data;

    return data;
  }
);

export const getSearchWeather = createAsyncThunk(
  "currentLocation/getSearchWeather",
  async (payload) => {
    const response = await api.get(`/api/location/${payload}`);

    const data = {
      location: response.data.title,
      weather: response.data.consolidated_weather,
    };

    return data;
  }
);

const initialState = {
  currentLocation: null,
  todayWeather: null,
  nextFiveDaysWeather: null,
  searchLocation: null,
  isCurrentLocation: true,
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
      state.isCurrentLocation = true;
    },
    [getSearchWoeid.fulfilled]: (state, action) => {
      state.searchLocation = action.payload.map(({ title, woeid }) => {
        return { title, woeid };
      });
    },
    [getSearchWeather.fulfilled]: (state, action) => {
      state.currentLocation = action.payload.location;
      state.todayWeather = action.payload.weather[0];
      state.nextFiveDaysWeather = action.payload.weather.slice(1);
      state.isCurrentLocation = false;
    },
  },
});

// export const {} = CurrentLocationSlice.actions;
export default CurrentLocationSlice.reducer;
