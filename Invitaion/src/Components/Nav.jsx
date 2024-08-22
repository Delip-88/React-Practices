import React, { useEffect, useState } from "react";
import "../css/Nav.css";
import { FaBars } from "react-icons/fa";

function Nav() {
  const [navStyle, setNavStyle] = useState({
    backgroundColor: "transparent",
    color: "white",
  });

  const expandStyle = {
    display: "flex",
    gap: "30px",
    margin: "0",
    alignItems: "center",
    height: "100%",
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY + 100 > window.innerHeight) {
        setNavStyle({
          backgroundColor: "white",
          color: "black",
        });
      } else {
        setNavStyle({
          backgroundColor: "transparent",
          color: "white",
        });
      }
    };
    window.addEventListener("load",handleScroll)
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setToggle(true);
      } else {
        setToggle(false);
        setexpand(false)
      }
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("load",handleResize)
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [expand, setexpand] = useState(false);
  const [toggle, setToggle] = useState(false);
  const comp = [
    { Name: "Home", Link: "#" },
    { Name: "Couple", Link: "#" },
    { Name: "Story", Link: "#" },
    { Name: "Events", Link: "#" },
    { Name: "People", Link: "#" },
    { Name: "Gallery", Link: "#" },
    { Name: "RSPV", Link: "#" },
    { Name: "Blog", Link: "#" },
  ];

  const NAV = (CN = "expandbar") => {
    return (
      <ul style={expandStyle} className={CN}>
        {comp.map((item) => (
          <li key={item.Name}>
            <a href={item.Link} className="navlink" style={navStyle}>
              {item.Name}
            </a>
          </li>
        ))}
      </ul>
    );
  };
  const showElements = () => {
    setexpand(!expand);
  };
  const Collapse = () => {
    return (
      <span className="burger" onClick={showElements}>
        <FaBars size={20} className="bars" />
      </span>
    );
  };
  const DropdownBar = () => {
    return (
      <>
        {NAV(`collapsebar ${expand ? "expand" : ""}`)}
      </>
    );
  };
  
  return (
    <nav
      className="solidnavbar"
      style={{ backgroundColor: navStyle.backgroundColor }}
    >
      <span className="logo" style={{ color: navStyle.color }}>
        Logo
      </span>
      {toggle ? <Collapse /> : <NAV />}

{(expand && toggle) ? <DropdownBar /> : ''}
    </nav>
  );
}

export default Nav;
