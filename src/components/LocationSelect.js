import { ChevronRight } from "@material-ui/icons";
import React from "react";
import "./LocationSelect.scss";

function LocationSelect({ location }) {
  return (
    <div className="locationSelect">
      <p>{location}</p>

      <ChevronRight className="locationSelect__arrow" />
    </div>
  );
}

export default LocationSelect;
