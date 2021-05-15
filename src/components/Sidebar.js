import { IconButton } from "@material-ui/core";
import { Close, Search } from "@material-ui/icons";
import React from "react";
import "./Sidebar.scss";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../features/SidebarToggleSlice";
import LocationSelect from "./LocationSelect";
import { useForm } from "react-hook-form";

function Sidebar() {
  const sidebarToggle = useSelector((state) => state.sidebarToggle.sidebar);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const onSubmit = ({ location }, e) => {
    console.log(location);
    e.target.reset();
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

      <LocationSelect location="London" />
      <LocationSelect location="Barcelona" />
      <LocationSelect location="Long Beach" />
    </div>
  );
}

export default Sidebar;
