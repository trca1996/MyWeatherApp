import { IconButton } from "@material-ui/core";
import { Close, Search } from "@material-ui/icons";
import React from "react";
import "./Sidebar.scss";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../features/SidebarToggleSlice";
import LocationSelect from "./LocationSelect";
import { useForm } from "react-hook-form";
import { getSearchWoeid } from "../features/CurrentLocationSlice";

function Sidebar() {
  const sidebarToggle = useSelector((state) => state.sidebarToggle.sidebar);
  const { searchLocation } = useSelector((state) => state.currentLocation);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const onSubmit = ({ location }, e) => {
    dispatch(getSearchWoeid(location));
    e.target.reset();
  };

  const renderLocationSelect = (data) => {
    return data.map(({ title, woeid }) => {
      return <LocationSelect location={title} key={woeid} woeid={woeid} />;
    });
  };

  return (
    <div className={`sidebar ${sidebarToggle ? "sidebar__open" : ""}`}>
      <div onClick={() => dispatch(closeSidebar())} className="sidebar__close">
        <IconButton color="inherit">
          <Close fontSize="large" />
        </IconButton>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="sidebar__search">
        <div className="sidebar__input">
          <Search />
          <input
            autoComplete="off"
            {...register("location", { required: true })}
            type="text"
            placeholder="search location"
          />
        </div>
        <button type="submit">Search</button>
      </form>

      {searchLocation ? renderLocationSelect(searchLocation) : null}
      {searchLocation?.length === 0 ? (
        <div className="sidebar__message">
          <p>We don't have info about that location 😥</p>
          <p>Try another one 😁</p>
        </div>
      ) : null}
    </div>
  );
}

export default Sidebar;
