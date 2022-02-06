import React from "react";
import Poster from "./Poster";
import '../CSS_styling/Movies.css';


const Movies = ({movieInfos, findDetails}) => {

let allPosters = movieInfos.map(movie => {
  return (
    <Poster 
      key={movie["id"]}
      id={movie["id"]}
      image={movie["poster_path"]}
      title={movie["title"]}
      rating={movie["average_rating"]}
      releaseDate={movie["release_date"]}
      findDetails={findDetails}
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