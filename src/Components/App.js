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
   console.log("this.state.movieInfo here---", this.state.movieInfo)
  }

  findDetails = (event) => {
    this.state.movieInfo.find(movie => {
      let id = Number(event.target.id)
      if (movie.id === id) {
      this.setState({movieInfo: [movie]})
      return movie;
      }
    })
  }

  render() {
    return (
      <>
        <NavBar />
        <main className='main-container'>
        {this.state.movieInfo.length < 2 ? <Details movieInfo={this.state.movieInfo} /> :
        <Movies movieInfos={this.state.movieInfo} findDetails={event => this.findDetails(event)}/>}
        </main>
      </>
    )
  }
}

export default App;

//TO INVESTIGATE AFTER DINNER BREAK !!!
// Make additional property for single movie details 
// use findDetails method to find single movie details pass that as a prop to Details component to render single movie details on DOM. 
