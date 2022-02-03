import React from "react";
import '../CSS_styling/Poster.css'

const Poster = ({image, title, rating, releaseDate, showDetails, id}) => {
  return (
    <div className="poster">
      <img src={image} />
      <div className="poster-info">
        <h4>Release Date:</h4>
         <p>{releaseDate}</p>
        <h5>Rating: {rating.toFixed(1)}</h5>
        <button id={id} onClick={showDetails(id)}>i</button>
      </div>
    </div>
  )
}

export default Poster;