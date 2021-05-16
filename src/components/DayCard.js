import React from "react";
import { useSelector } from "react-redux";
import "./DayCard.scss";

function DayCard({ day, icon, maxTemp, minTemp }) {
  const tempUnit = useSelector((state) => state.tempUnit.tempUnit);

  const celToFahr = (celsius) => {
    const fahrenheit = Math.round((celsius * 9) / 5 + 32);
    return fahrenheit;
  };

  return (
    <div className="dayCard">
      <h4>{day}</h4>

      <img src={icon} alt="" />

      <div className="dayCard__temp">
        <p>
          {tempUnit === "fahrenheit"
            ? `${celToFahr(maxTemp)}℉`
            : `${Math.round(maxTemp)}℃`}
        </p>

        <p className="dayCard__temp--min">
          {tempUnit === "fahrenheit"
            ? `${celToFahr(minTemp)}℉`
            : `${Math.round(minTemp)}℃`}
        </p>
      </div>
    </div>
  );
}

export default DayCard;
