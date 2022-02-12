import React from "react";
import { NavLink } from "react-router-dom";
import '../CSS_styling/FilteredPoster.css'

const FilteredPoster = ({image, title, rating, releaseDate, id}) => {
  return (
    <div className="poster">
      {console.log("hello hello!")}
      <img className='poster-img' src={image} alt={title} />
      <div className="poster-info">
        <h4>Release Date:</h4>
         <p>{releaseDate}</p>
        <h5 className='poster-rating'>Rating: {rating.toFixed(1)}</h5>
      </div>
      <div className="poster-button-div">
        <NavLink to={`/movies/${id}`}>
          <button className='poster-button' id={id}>i</button>
        </NavLink>
      </div>
    </div>
  )
}

export default FilteredPoster;