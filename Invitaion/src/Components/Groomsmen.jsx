import React, { forwardRef, useState } from "react";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { LiaLinkedin } from "react-icons/lia";
import "../css/Groomsmen.css";

import img1 from "../img/card/m1.jpg";
import img2 from "../img/card/m2.jpg";
import img3 from "../img/card/m3.jpg";
import img4 from "../img/card/m4.jpg";
import img5 from "../img/card/f1.jpg";
import img6 from "../img/card/f2.jpg";
import img7 from "../img/card/f3.jpg";
import img8 from "../img/card/f4.jpg";

const Groomsmen=forwardRef((props,ref)=> {
  const [activeSection, setActiveSection] = useState("men");

  const menData = [
    { Name: "Rohan Rai", Relationship: "Friend", imgUrl: img1 },
    { Name: "Amit Sharma", Relationship: "Brother", imgUrl: img2 },
    { Name: "Vikas Gupta", Relationship: "Cousin", imgUrl: img3 },
    { Name: "Siddharth Mehta", Relationship: "College Friend", imgUrl: img4 },
  ];

  const maidData = [
    { Name: "Priya Sharma", Relationship: "Sister", imgUrl: img5 },
    { Name: "Neha Verma", Relationship: "Best Friend", imgUrl: img6 },
    { Name: "Anjali Singh", Relationship: "Cousin", imgUrl: img7 },
    { Name: "Ritika Kapoor", Relationship: "Childhood Friend", imgUrl: img8 },
  ];

  const BluePrint = ({ data }) => (
    <div className="cardContainer" data-aos="zoom-out" data-aos-duration="500">
      {data.map((person) => (
        <div className="personCard" key={person.Name}>
          <div className="personImg">
            <img src={person.imgUrl} alt={person.Name + " image"} />
            <div className="sicons">
              <FaFacebook className="gIcon facebook" size={25} />
              <BsTwitter className="gIcon twitter" size={25} />
              <ImInstagram className="gIcon instagram" size={25} />
              <LiaLinkedin className="gIcon linkedin" size={25} />
            </div>
          </div>
          <h3 className="personName">{person.Name}</h3>
          <span className="relation">{person.Relationship}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="menMainContainer" ref={ref}>
      <h1 className="MainTopic" data-aos="fade-down">GroomsMen & BridesMaid</h1>
      <div className="btns" data-aos="fade-up">
        <button onClick={() => setActiveSection("men")} className={activeSection === "men" ? "active" : ""}>Groomsmen</button>
        <button onClick={() => setActiveSection("maid")} className={activeSection === "maid" ? "active" : ""}>Bridesmaid</button>
      </div>
      {activeSection === "men" && <BluePrint data={menData} />}
      {activeSection === "maid" && <BluePrint data={maidData} />}
    </div>
  );
})

export default Groomsmen;
