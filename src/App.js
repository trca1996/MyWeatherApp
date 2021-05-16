import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";
import Sidebar from "./components/Sidebar";
import {
  getCurrentLocation,
  getLocationWeather,
} from "./features/CurrentLocationSlice";

function App() {
  const dispatch = useDispatch();
  const currentLocation = useSelector(
    (state) => state.currentLocation.currentLocation
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const latlng = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      dispatch(getCurrentLocation(latlng));
    });

    if (currentLocation) {
      dispatch(getLocationWeather(currentLocation.woeid));
    }
  }, [dispatch]);

  return (
    <div className="app">
      <Sidebar />
      <LeftSection />
      <RightSection />
    </div>
  );
}

export default App;
