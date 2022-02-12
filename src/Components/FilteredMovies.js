import React from 'react'
import FilteredPoster from './FilteredPoster';
import '../CSS_styling/Movies.css';

// left off trying to figure out why it's not working 
const FilteredMovies = ({movies, searchPhrase}) => {
 
  
  let searchedMovie = movies.filter((movie) => {
    let lowerCasePropPhrase = searchPhrase.toLowerCase()
    let lowerCaseTitle = movie['title'].toLowerCase()
    if(lowerCaseTitle.includes(lowerCasePropPhrase)) {
      return movie
  }}).map(singleMovie => {
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
      {console.log("searchedMovie here", searchedMovie)}
      {console.log("i'm working")}
    </div>
  )



}

export default FilteredMovies;