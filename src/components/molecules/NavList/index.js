import React from "react";
import NavName from "../../atoms/NavName";
import { NavImage } from "../../atoms/NavImage";
import './NavList.scss';

export const NavList = (props) => {
  return (
    <div>
      <li className="list">
        <NavImage image={props.image} />
        <span>
          <NavName name={props.name} />
        </span>
      </li>
    </div>
  );
};
