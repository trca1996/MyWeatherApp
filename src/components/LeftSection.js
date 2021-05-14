import React from "react";
import "./LeftSection.scss";
import { FiberManualRecord, LocationOn, MyLocation } from "@material-ui/icons";
import { Button, Fab } from "@material-ui/core";
import { useSelector } from "react-redux";

function LeftSection() {
  const tempUnit = useSelector((state) => state.tempUnit.tempUnit);

  const celToFahr = (celsius) => {
    const fahrenheit = Math.round((celsius * 9) / 5 + 32);
    return fahrenheit;
  };

  return (
    <div className="leftSection">
      <img className="cloud cloud--one" src="cloud.svg" alt="cloud" />
      <img className="cloud cloud--two" src="cloud.svg" alt="cloud" />
      <img className="cloud cloud--three" src="cloud.svg" alt="cloud" />
      <img className="cloud cloud--four" src="cloud.svg" alt="cloud" />

      <div className="leftSection__header">
        <Button variant="contained">Search for places</Button>
        <Fab size="small">
          {/* iconButton change color (secondary) based on current location is true or false */}
          <MyLocation fontSize="large" />
        </Fab>
      </div>

      <div className="leftSection__main">
        <img
          src="https://downloadfreesvgicons.com/icons/cloud-icons/svg-cloud-and-sun-icon-1/svg-cloud-and-sun-icon-1.svg"
          alt=""
        />

        {tempUnit === "fahrenheit" ? (
          <h4>
            <span>{celToFahr(15)}</span>℉
          </h4>
        ) : (
          <h4>
            <span>15</span>℃
          </h4>
        )}

        <h5>Shower</h5>
      </div>

      <div className="leftSection__date">
        <p>Today</p>
        <FiberManualRecord />
        <p>Fri, 5 Jun</p>
      </div>

      <div className="leftSection__location">
        <LocationOn />
        <p>Helsinki</p>
      </div>
    </div>
  );
}

export default LeftSection;
