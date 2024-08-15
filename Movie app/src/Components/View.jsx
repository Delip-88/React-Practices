import React from 'react'
import CR from '../CR.jpg'

function View({viewData}) {
const {Search, Response} = viewData
  // console.log(Search)
if(Response == 'False'){
  return <div>Not found...</div>
}
  return (
    <main>
        {Search.map((movie)=>{
            return(
            <div className="movieCard"  key={movie.imdbID}>
                <div className="imgWrapper">
                    <img src={movie.Poster !== "N/A" ? movie.Poster : CR } alt={movie.Title} />
                    <p className='year'>{movie.Year}</p>
                </div>
                <strong>{movie.Title}</strong>
            </div>
            )
        })}
    </main>
  )
}

export default View