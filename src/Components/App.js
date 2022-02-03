import React, { Component } from 'react'
import '../CSS_styling/App.css';
import movieData from '../movie-data';
import Movies from './Movies';
import NavBar from './NavBar';
import Details from './Details'

class App extends Component {
  constructor() {
   super()
   this.state = {
     movieInfo: movieData.movies
   }
   console.log(this.state.movieInfo)
  }

  showDetails = (id) => {
    if (event.target.id === id) {
      return (
        <Details 
          movieInfo={this.state.movieInfo}
          id={id}
          />
      )
    }
  }

  render() {
    return (
      <>
        <NavBar />
        <main>
          <Movies movieInfos={this.state.movieInfo} showDetails={this.showDetails}/>
        </main>
      </>
    )
  }
}

export default App;
