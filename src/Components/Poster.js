import React from "react";
import '../CSS_styling/Poster.css'

const Poster = ({image, title, rating, releaseDate, findDetails, id}) => {
  return (
    <div className="poster">
      <img className='poster-img' src={image} alt={title} />
      <div className="poster-info">
        <h4>Release Date:</h4>
         <p>{releaseDate}</p>
        <h5 className='poster-rating'>Rating: {rating.toFixed(1)}</h5>
      </div>
      <div className="poster-button-div">
        <button className='poster-button' id={id} onClick={event => findDetails(event)}>i</button>
      </div>
    </div>
  )
}

export default Poster;