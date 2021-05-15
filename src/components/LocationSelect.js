import { ChevronRight } from "@material-ui/icons";
import React from "react";
import "./LocationSelect.scss";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../features/SidebarToggleSlice";

function LocationSelect({ location }) {
  const dispatch = useDispatch();

  const handleClick = () => {
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
