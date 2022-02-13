export const fetchMovies = () => {
  return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies/")
  .then(response => {
    if(!response.ok) {
      if(response.status >= 500) {
        throw new Error(`${response.status} ${response.messageText}. I am so sorry for the inconvenience! 
        The server is down. Please try again, later.`)
      } else if (response.status === 404) {
        throw new Error(`${response.status} ${response.messageText}. We apologize for the inconvenience.
        Please try again, or go back to the Main Page.`)
      } else {
        throw new Error(`${response.status} ${response.messageText}. We apologize for the inconvenience.
        Please try again later.`)
      }
    }
  })
}

export const getSingleMovie = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => response.json())
}
