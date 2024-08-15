import React from 'react';
import a from '../Static/Images/a.png';
import b from '../Static/Images/b.jpeg';
import c from '../Static/Images/c.jpg';
import d from '../Static/Images/d.png';
import e from '../Static/Images/e.jpg';
import '../Static/CSS/Crousel.css' ;

function Crousel() {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={a} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={b} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={c} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={d} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={e} className="d-block w-100" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  );
}

export default Crousel;
