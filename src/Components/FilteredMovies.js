import React from 'react'
import Poster from './Poster';
import '../CSS_styling/Movies.css';

// left off trying to figure out why it's not working 
const FilteredMovies = ({movies, searchPhrase}) => {
  const searchedMovie = movies.find((movie) => {
    if(movie['title'].includes(searchPhrase)) {
      return (
        <Poster 
        key={movie["id"]}
        id={movie["id"]}
        image={movie["poster_path"]}
        title={movie["title"]}
        rating={movie["average_rating"]}
        releaseDate={movie["release_date"]}
        />
      )
    }
  })
  
  return (
    <div>
      {searchedMovie}
    </div>
  )



}

export default FilteredMovies;