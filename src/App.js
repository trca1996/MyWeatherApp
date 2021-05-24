import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.scss";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";
import Sidebar from "./components/Sidebar";
import { getCurrentLocation } from "./features/CurrentLocationSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const latlng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        dispatch(getCurrentLocation(latlng));
      },
      (err) => {
        console.log(err.message);
        const latlng = {
          lat: 36.96,
          lng: -122.02,
        };
        dispatch(getCurrentLocation(latlng));
      }
    );
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
