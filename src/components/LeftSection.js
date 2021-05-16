import React from "react";
import "./LeftSection.scss";
import { FiberManualRecord, LocationOn, MyLocation } from "@material-ui/icons";
import { Button, CircularProgress, Fab } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { openSidebar } from "../features/SidebarToggleSlice";
var dateFormat = require("dateformat");

function LeftSection() {
  const tempUnit = useSelector((state) => state.tempUnit.tempUnit);
  const { currentLocation, todayWeather } = useSelector(
    (state) => state.currentLocation
  );

  const dispatch = useDispatch();

  const celToFahr = (celsius) => {
    const fahrenheit = Math.round((celsius * 9) / 5 + 32);
    return fahrenheit;
  };

  const tempDisplay = () => {
    if (tempUnit === "fahrenheit") {
      if (todayWeather) {
        return (
          <h4>
            <span>{celToFahr(todayWeather?.the_temp)}</span>℉
          </h4>
        );
      } else {
        <CircularProgress />;
      }
    }

    if (tempUnit === "celsius") {
      if (todayWeather) {
        return (
          <h4>
            <span>{Math.round(todayWeather?.the_temp)}</span>℃
          </h4>
        );
      } else {
        <CircularProgress />;
      }
    }
  };

  return (
    <div className="leftSection">
      <img className="cloud cloud--one" src="cloud.svg" alt="cloud" />
      <img className="cloud cloud--two" src="cloud.svg" alt="cloud" />
      <img className="cloud cloud--three" src="cloud.svg" alt="cloud" />
      <img className="cloud cloud--four" src="cloud.svg" alt="cloud" />

      <div className="leftSection__header">
        <Button onClick={() => dispatch(openSidebar())} variant="contained">
          Search for places
        </Button>
        <Fab size="small">
          {/* iconButton change color (secondary) based on current location is true or false */}
          <MyLocation fontSize="large" />
        </Fab>
      </div>

      <div className="leftSection__main">
        {todayWeather ? (
          <img
            src={`https://www.metaweather.com/static/img/weather/${todayWeather?.weather_state_abbr}.svg`}
            alt=""
          />
        ) : (
          <CircularProgress />
        )}

        {tempDisplay()}

        <h5>{todayWeather?.weather_state_name}</h5>
      </div>

      <div className="leftSection__date">
        <p>{dateFormat(todayWeather?.applicable_date, "DDDD")}</p>
        <FiberManualRecord />
        <p>{dateFormat(todayWeather?.applicable_date, " mmmm dS")}</p>
      </div>

      <div className="leftSection__location">
        <LocationOn />
        <p>{currentLocation}</p>
      </div>
    </div>
  );
}

export default LeftSection;
