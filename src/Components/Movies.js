import React from "react";
import Poster from "./Poster";
import '../CSS_styling/Movies.css';


const Movies = ({movieInfos}) => {
console.log(movieInfos)

let allPosters = movieInfos.map(movie => {
  return (
    <Poster 
      image={movie["poster_path"]}
      title={movie["title"]}
      rating={movie["average_rating"]}
      releaseDate={movie["release_date"]}
      />
  )
})
  return (
    <div className="movie-container">
      {allPosters}
    </div>
  )
}

export default Movies;