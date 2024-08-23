import React, { forwardRef } from "react";
import love from "../img/love.png";
import '../css/homepage.css'
const HomePage=forwardRef((props,ref)=> {
  return (
    <main ref={ref}>
      <div className="intro" data-aos="fade-up">
        <h1>Mamta & Kakashi</h1>
        <h3>WE ARE GETTING MARRIED</h3>
        <div className="loveWrapper">
          <img src={love} alt="i=love image" />
        </div>
        <span className="date">19th july , 2024</span>
      </div>
    </main>
  );
})

export default HomePage;
