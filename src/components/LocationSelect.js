import { ChevronRight } from "@material-ui/icons";
import React from "react";
import "./LocationSelect.scss";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../features/SidebarToggleSlice";
import { getSearchWeather } from "../features/CurrentLocationSlice";

function LocationSelect({ location, woeid }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getSearchWeather(woeid));
    dispatch(closeSidebar());
  };

  return (
    <div onClick={handleClick} className="locationSelect">
      <p>{location}</p>
      <ChevronRight className="locationSelect__arrow" />
    </div>
  );
}

export default LocationSelect;
