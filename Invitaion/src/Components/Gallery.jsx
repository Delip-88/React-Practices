import React, { useState, useEffect } from "react";
import w1 from "../img/wedding/w1.jpg";
import w2 from "../img/wedding/w2.jpg";
import w3 from "../img/wedding/w3.jpg";
import w4 from "../img/wedding/w4.jpg";
import w5 from "../img/wedding/w5.jpg";
import w6 from "../img/wedding/w6.jpg";
import w7 from "../img/wedding/w7.jpg";
import w8 from "../img/wedding/w8.jpg";
import "../css/Gallery.css";

function Gallery() {
  const imgData = [
    { imgUrl: w1, type: "wedding" },
    { imgUrl: w2, type: "party" },
    { imgUrl: w3, type: "engagement" },
    { imgUrl: w4, type: "wedding" },
    { imgUrl: w5, type: "party" },
    { imgUrl: w6, type: "engagement" },
    { imgUrl: w7, type: "wedding" },
    { imgUrl: w8, type: "party" },
  ];

  const [activeSection, setActiveSection] = useState("all");
  const [filteredData, setFilteredData] = useState(imgData);
  const [modalImage, setModalImage] = useState(null); // State for modal image

  const handleImageClick = (imgUrl) => {
    setModalImage(imgUrl);
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };

  useEffect(() => {
    if (activeSection === "party") {
      setFilteredData(imgData.filter((img) => img.type === "party"));
    } else if (activeSection === "wedding") {
      setFilteredData(imgData.filter((img) => img.type === "wedding"));
    } else if (activeSection === "engagement") {
      setFilteredData(imgData.filter((img) => img.type === "engagement"));
    } else {
      setFilteredData(imgData);
    }
  }, [activeSection]);

  return (
    <div className="GalleryContainer">
      <h1 className="MainTopic">Our Gallery</h1>
      <div className="btns">
        <button
          onClick={() => setActiveSection("all")}
          className={activeSection === "all" ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => setActiveSection("wedding")}
          className={activeSection === "wedding" ? "active" : ""}
        >
          Wedding
        </button>
        <button
          onClick={() => setActiveSection("engagement")}
          className={activeSection === "engagement" ? "active" : ""}
        >
          Engagement
        </button>
        <button
          onClick={() => setActiveSection("party")}
          className={activeSection === "party" ? "active" : ""}
        >
          Party
        </button>
      </div>
      <div className="imageContainer">
        {filteredData.map((img, index) => (
          <div
            className="imagecover"
            key={index}
            onClick={() => handleImageClick(img.imgUrl)}
          >
            <img src={img.imgUrl} alt={`${img.type} img`} />
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalImage && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <span className="closeBtn" onClick={handleCloseModal}>
              &times;
            </span>
            <img src={modalImage} alt="Modal View" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
