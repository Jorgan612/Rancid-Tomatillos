import React from "react";
import '../CSS_styling/Poster.css'

const Poster = ({image, title, rating, releaseDate}) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} />
      <h6>{rating}</h6>
      <h6>{releaseDate}</h6>
    </div>
  )
}

export default Poster;