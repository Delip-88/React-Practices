import React, { forwardRef } from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import groom from "../img/groom.jpg";
import bride from "../img/bride.jpg";
import "../css/Bride.css";

const Bride=forwardRef((props,ref)=> {
  const Card = ({ data }) => {
    const { userName, userInfo, imgUrl, ani} = data;
    return (
      <div className="card" data-aos ={ani} data-aos-delay="300ms" data-aos-offset="150">
        <div className="imgWrapper">
          <img src={imgUrl} alt={userName + " image"} />
        </div>
        <div className="infoContainer" >
          <div className="info" >
            <h3 className="userName">{userName}</h3>
            <span className="userInfo">{userInfo}</span>
            <div className="socialIcons">
              <FaFacebook className="icon facebook" size={35} />
              <BsTwitter className="icon twitter" size={35} />
              <BsInstagram className="icon instagram" size={35} />
              <LiaLinkedin className="icon linkedin" size={35} />
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="wrapper" ref={ref}>
      <h1 className="MainTopic" data-aos="fade-up">Groom & Bride</h1>
      <div className="cards">
        <Card
          data={{
            userName: "Hatake Kakashi",
            userInfo: `Hello, I am Hatake Kakashi. A dedicated shinobi with a love for books and a passion for mentoring the next generation. My journey is one of resilience, honor, and the quiet pursuit of excellence.`,
            imgUrl: groom,
            ani : "fade-right",
          }}
        />
        <Card
          data={{
            userName: "Mamta Shrestha",
            userInfo: `Hello, I am Mamta Shrestha. A creative soul with a heart full of kindness, embracing life's adventures with grace and optimism. My story is one of love, laughter, and finding beauty in the little things.`,
            imgUrl: bride,
            ani : "fade-left"

          }}
        />
      </div>
    </div>
  );
})

export default Bride;
