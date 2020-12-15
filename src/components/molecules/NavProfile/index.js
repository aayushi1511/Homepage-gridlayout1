import React from "react";
import NavName from "../../atoms/NavName";
import { NavImage } from "../../atoms/NavImage";
import './NavProfile.scss';

export const NavProfile = (props) => {
  return (
    <div className='profileImg'>
      <NavImage image={props.image} profile />
      <NavName name={props.name} profile/>
    </div>
  );
};
