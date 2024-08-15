import React, { useState, useEffect } from "react";

function CatGallery({ data }) {
  const [images, setImages] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imagesPromises = data.map(async (catData) => {
          const response = await fetch(
            `https://api.thecatapi.com/v1/images/search?breed_id=${catData.id}`
          );
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const result = await response.json();
          if (result.length > 0 && result[0].url) {
            return { id: catData.id, imageUrl: result[0].url };
          }
          return { id: catData.id, imageUrl: null };
        });

        const imageResults = await Promise.all(imagesPromises);
        const imageMap = imageResults.reduce((acc, { id, imageUrl }) => {
          acc[id] = imageUrl;
          return acc;
        }, {});
        setImages(imageMap);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchImages();
  }, [data]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      {data.map((cat) => (
        <div className="wrapper" key={cat.id}>
          {images[cat.id] ? (
            <img
              src={images[cat.id]}
              alt={`Cat breed ${cat.name}`}
            />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default CatGallery;
