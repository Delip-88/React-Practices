import React, { useState } from 'react';
import CR from '../CR.jpg';
import APIKEY from '../Api';
import '../view.css'
function View({ viewData }) {
  const { Search, Response } = viewData;
  const sortedData = Search.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleMovieClick = async (imdbID) => {
    const url = `http://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=${APIKEY}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok!");
      }
      const result = await response.json();
      setData(result);
      console.log(result); // Log result directly
    } catch (err) {
      setError(err.message); // Update the error state
      console.log(err.message);
    }
  };

  if (Response === 'False') {
    return <div>Not found...</div>;
  }

  const handleClose =()=>{
    setData(null)
  }

  return (
    <main>
      {sortedData.map((movie) => {
        const { imdbID, Poster, Title, Year } = movie;
        return (
          <div className="movieCard" onClick={() => handleMovieClick(imdbID)} key={imdbID}>
            <div className="imgWrapper">
              <img src={Poster !== "N/A" ? Poster : CR} alt={Title} />
              <p className="year">{Year}</p>
            </div>
            <strong>{Title}</strong>
          </div>
        );
      })}
      {data && (
        <div className="movieDetails">
          <h2>{data.Title}</h2>
          <hr />
          <div className="details">
          <p>Genre : {data.Genre}</p>
          <p>Rating : {data.imdbRating}</p>
          <p>Time : {data.Runtime}</p>
          <p>Language : {data.Language}</p>
          <p>Year : {data.Year}</p>
          </div>
          <div className="img_plot">
          <div className="imgWrap">
            <img src={data.Poster} alt={data.Title} />
          </div>
          <p>{data.Plot}</p>
          </div>
         
         <button className='close' onClick={handleClose}>Close</button>
        </div>
      )}
      {error && <div className="error">{error}</div>} {/* Display error if any */}
    </main>
  );
}

export default View;
