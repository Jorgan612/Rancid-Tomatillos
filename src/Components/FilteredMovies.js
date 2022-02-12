import React from 'react'
import FilteredPoster from './FilteredPoster';
import '../CSS_styling/FilteredMovies.css';

const FilteredMovies = ({movies, searchPhrase}) => {
  let searchedMovie = movies.filter((movie) => {
    let lowerCasePropPhrase = searchPhrase.toLowerCase()
    let lowerCaseTitle = movie['title'].toLowerCase()
    if (lowerCaseTitle.includes(lowerCasePropPhrase)) {
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
  
  return (
    <div className='filtered-movies'>
      {searchedMovie}
    </div>
  )



}

export default FilteredMovies;