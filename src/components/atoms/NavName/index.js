import React from "react";
import "./style.scss";

export default function NavName(props) {
  return (
    <h2 className={props.profile ? "nav__profilename" : "nav__name"}>
      {props.name}
    </h2>
  );
}
