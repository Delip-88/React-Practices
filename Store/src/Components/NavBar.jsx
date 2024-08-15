import React from "react";
import '../Static/CSS/Navbar.css'

function NavBar(props) {
  return (
    <>
      <nav className="Navbar">
        <div className="Logo">
          <strong>{props.LogoTitle}</strong>
        </div>
        <div className="searchbar">
          <form action="">
          <input type="text" name="search" id="search" placeholder="Enter keyword here" />
          <button type="submit" id="submit">Search</button>
          </form>
        </div>
        <div className="Cart">
          <div>CartIcon</div>
          <p>100</p>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
