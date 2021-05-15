import { Fab } from "@material-ui/core";
import React from "react";
import DayCard from "./DayCard";
import Hightlight from "./Hightlight";
import "./RightSection.scss";
import { useDispatch, useSelector } from "react-redux";
import { ChangeToCelsius, changeToFahrenheit } from "../features/TempUnitSlice";
import { closeSidebar } from "../features/SidebarToggleSlice";

function RightSection() {
  const tempUnit = useSelector((state) => state.tempUnit.tempUnit);
  const dispatch = useDispatch();

  return (
    <div onClick={() => dispatch(closeSidebar())} className="rightSection">
      <div className="rightSection__units">
        <Fab
          onClick={() => dispatch(changeToFahrenheit())}
          color={tempUnit === "fahrenheit" ? "primary" : "default"}
          size="small"
        >
          ℉
        </Fab>
        <Fab
          onClick={() => dispatch(ChangeToCelsius())}
          color={tempUnit === "celsius" ? "primary" : "default"}
          size="small"
        >
          ℃
        </Fab>
      </div>

      <div className="rightSection__days">
        <DayCard
          day="Tomorrow"
          icon="https://downloadfreesvgicons.com/icons/cloud-icons/svg-cloud-and-sun-icon-1/svg-cloud-and-sun-icon-1.svg"
          maxTemp="16"
          minTemp="11"
        />
        <DayCard
          day="Sun. 7 Jun"
          icon="https://downloadfreesvgicons.com/icons/cloud-icons/svg-cloud-and-sun-icon-1/svg-cloud-and-sun-icon-1.svg"
          maxTemp="16"
          minTemp="11"
        />
        <DayCard
          day="Mon. 8 Jun"
          icon="https://downloadfreesvgicons.com/icons/cloud-icons/svg-cloud-and-sun-icon-1/svg-cloud-and-sun-icon-1.svg"
          maxTemp="16"
          minTemp="11"
        />
        <DayCard
          day="Tue. 9 Jun"
          icon="https://downloadfreesvgicons.com/icons/cloud-icons/svg-cloud-and-sun-icon-1/svg-cloud-and-sun-icon-1.svg"
          maxTemp="16"
          minTemp="11"
        />
        <DayCard
          day="Wed. 10 Jun"
          icon="https://downloadfreesvgicons.com/icons/cloud-icons/svg-cloud-and-sun-icon-1/svg-cloud-and-sun-icon-1.svg"
          maxTemp="16"
          minTemp="11"
        />
      </div>

      <div className="rightSection__hightlights">
        <h3>Today's Hightlights</h3>

        <div className="rightSection__hightlights--grid">
          <Hightlight
            title="Wind Status"
            wind="7"
            windDirection="261.36100044750697"
          />
          <Hightlight title="Humidity" humidity="85.9" />
          <Hightlight title="Visibility" visibility="6.4" />
          <Hightlight title="Air Pressure" airPressure="1010.0" />
        </div>
      </div>

      <p className="rightSection__createBy">
        created by <span className="rightSection__userName">trca1996</span> -
        devChallenges.io
      </p>
    </div>
  );
}

export default RightSection;
