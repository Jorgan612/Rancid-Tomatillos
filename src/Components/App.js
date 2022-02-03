import React, { Component } from 'react'
import '../CSS_styling/App.css';
import movieData from '../movie-data';
import Movies from './Movies';
import NavBar from './NavBar';

class App extends Component {
  constructor() {
   super()
   this.state = {
     movieInfo: movieData.movies
   }
   console.log(this.state.movieInfo)
  }

  render() {
    return (
      <>
        <NavBar />
        <main>
          <Movies movieInfos={this.state.movieInfo}/>
        </main>
      </>
    )
  }
}

export default App;
