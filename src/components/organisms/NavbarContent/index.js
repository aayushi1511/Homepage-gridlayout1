import React, { useState } from "react";
import "./NavbarContent.scss";
import { NavList } from "../../molecules/NavList";
import { SidebarData } from "./SidebarData";
import { NavProfile } from "../../molecules/NavProfile";
import profile from '../../../assets/profile.jpg';

const NavigationContent = () => {

  return (
    <>
       <div className='nav--outer'>
            {SidebarData.map((item, index) => {
              return (
                <NavList
                  key={index}
                  className={item.cName}
                  image={item.icon}
                  name={item.title}
                />
              );
            })}
             </div>
    </>
  );
}

export default NavigationContent;
