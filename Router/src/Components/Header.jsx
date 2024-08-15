import React from "react";
import { NavLink } from "react-router-dom";
import '../static/css/Header.css'
const NavLinks = () => {
  return (
    <header>
      <div className="logo"><span>Port</span><span>Folio</span></div>

      <nav>
      <ul>
        <li>
          <NavLink  to="/" className={({isActive})=> isActive ? 'active-link' : ''} exact>Home</NavLink>
        </li>
        <li>
          <NavLink to="/skills" className={({isActive})=> isActive ? 'active-link' : ''} exact>Skills</NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({isActive})=> isActive ? 'active-link' : ''} exact>Project</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({isActive})=> isActive ? 'active-link' : ''} exact>About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({isActive})=> isActive ? 'active-link' : ''} exact>Contact</NavLink>
        </li>
      </ul>
      </nav>
    </header>
  );
};

export default NavLinks;
