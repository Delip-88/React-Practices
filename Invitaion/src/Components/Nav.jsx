import React, { useEffect, useState } from "react";
import "../css/Nav.css";
import { FaBars } from "react-icons/fa";

function Nav({ homeRef, brideRef, storyRef, eventsRef, galleryRef, rspvRef, groomsmenRef }) {
  const [navStyle, setNavStyle] = useState({
    backgroundColor: "transparent",
    color: "white",
  });

  const [expand, setExpand] = useState(false);
  const [toggle, setToggle] = useState(false);

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
        setExpand(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (event, sectionRef) => {
    event.preventDefault();
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const comp = [
    { Name: "Home", Ref: homeRef },
    { Name: "Couple", Ref: brideRef },
    { Name: "Story", Ref: storyRef },
    { Name: "Events", Ref: eventsRef },
    { Name: "People", Ref: groomsmenRef }, // Assuming this should be galleryRef
    { Name: "Gallery", Ref: galleryRef },
    { Name: "RSPV", Ref: rspvRef },
  ];

  const NAV = (CN = "expandbar") => {
    return (
      <ul className={CN}>
        {comp.map((item) => (
          <li key={item.Name}>
            <a
              href={`#${item.Name}`}
              className="navlink"
              style={navStyle}
              onClick={(e) => scrollToSection(e, item.Ref)}
            >
              {item.Name}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  const showElements = () => {
    setExpand(!expand);
  };

  const Collapse = () => {
    return (
      <span className="burger" onClick={showElements}>
        <FaBars size={20} className="bars" />
      </span>
    );
  };

  const DropdownBar = () => {
    return <>{NAV(`collapsebar ${expand ? "expand" : ""}`)}</>;
  };

  return (
    <nav
      className="solidnavbar"
      style={{ backgroundColor: navStyle.backgroundColor }}
      data-aos="fade-down"
    >
      <span className="logo" onClick={()=>window.location.reload()}  style={{ color: navStyle.color, cursor :'pointer' }}>
        Logo
      </span>
      {toggle ? <Collapse /> : NAV()}
      {expand && toggle && <DropdownBar />}
    </nav>
  );
}

export default Nav;
