import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import "./Navbar.scss";
import { IconContext } from "react-icons";
import { NavProfile } from "../../molecules/NavProfile";
import NavigationContent from '../../organisms/NavbarContent';
import profile from '../../../assets/profile.jpg';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <FaIcons.FaBars onClick={showSidebar} />
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <NavProfile image={profile} name='Name'/>
            </li>
             <NavigationContent />
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
