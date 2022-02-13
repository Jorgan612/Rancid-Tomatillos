import React from 'react'
import FilteredPoster from './FilteredPoster';
import '../CSS_styling/FilteredMovies.css';

const FilteredMovies = ({movies, searchPhrase}) => {
  let searchedMovie = movies.filter((movie) => {

    let lowerCasePropPhrase = searchPhrase.toLowerCase()
    let lowerCaseTitle = movie['title'].toLowerCase()

    if (lowerCaseTitle && lowerCaseTitle.includes(lowerCasePropPhrase)) {
      return movie
  }
}).map(singleMovie => {
    return (
      <FilteredPoster 
        key={singleMovie["id"]}
        id={singleMovie["id"]}
        image={singleMovie["poster_path"]}
        title={singleMovie["title"]}
        rating={singleMovie["average_rating"]}
        releaseDate={singleMovie["release_date"]}
      />
    )
  })
  let noMovie = searchedMovie.length > 0 ? searchedMovie : <h4>Sorry for the inconvenience. Try to find another movie.</h4>
  return (
    <div className='filtered-movies'>
      {noMovie}
    </div>
  )



}

export default FilteredMovies;