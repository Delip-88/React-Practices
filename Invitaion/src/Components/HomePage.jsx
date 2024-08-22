import React from "react";
import img1 from "../img/img-1.jpg";
import img2 from "../img/img-2.jpg";
import img3 from "../img/img-3.jpg";
import love from "../img/love.png";
import '../css/homepage.css'
function HomePage() {
  return (
    <main>
      <div className="intro">
        <h1>Mamta & Kakashi</h1>
        <h3>WE ARE GETTING MARRIED</h3>
        <div className="loveWrapper">
          <img src={love} alt="i=love image" />
        </div>
        <span className="date">19th july , 2024</span>
      </div>
    </main>
  );
}

export default HomePage;
