import { Navigation } from "@material-ui/icons";
import React from "react";
import "./Hightlight.scss";
import d2d from "degrees-to-direction";
import { Fab } from "@material-ui/core";

function Hightlight({
  title,
  wind,
  windDirection,
  humidity,
  visibility,
  airPressure,
}) {
  return (
    <div className="hightlight">
      <h4>{title}</h4>

      {wind ? (
        <p>
          <span>{Math.round(wind)}</span>mph
        </p>
      ) : null}

      {humidity ? (
        <p>
          <span>{Math.round(humidity)}</span>%
        </p>
      ) : null}

      {visibility ? (
        <p>
          <span>{Math.round(visibility * 10) / 10}</span>miles
        </p>
      ) : null}

      {airPressure ? (
        <p>
          <span>{Math.round(airPressure)}</span>mb
        </p>
      ) : null}

      {windDirection ? (
        <div className="hightlight__windDirection">
          <Fab disableRipple size="small">
            <Navigation
              fontSize="large"
              style={{ transform: `rotate(${windDirection}deg)` }}
            />
          </Fab>
          {d2d(Math.round(windDirection))}
        </div>
      ) : null}

      {humidity ? (
        <div className="hightlight__humidity">
          <div className="hightlight__percent">
            <p className="hightlight__percent--zero">0</p>
            <p>50</p>
            <p className="hightlight__percent--hundred">100</p>
          </div>
          <div className="hightlight__proggresLabel">
            <div
              style={{ width: `${humidity}%` }}
              className="hightlight__proggres"
            ></div>
          </div>
          <p className="hightlight__humidity--p">%</p>
        </div>
      ) : null}
    </div>
  );
}

export default Hightlight;
