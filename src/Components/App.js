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
     movieInfo: movieData.movies,
     movieDetails: {}
   }
   console.log(this.state.movieInfo)
  }

  findDetails = (event) => {
    let foundMovie = this.state.movieInfo.find(movie => {
      if (event.target.id === movie["id"]) {
       this.setState({movieInfo: [movie]})
      }
      return movie;
    })
    return (
      <Details movieDetails={foundMovie} />
        )
  }

  // showDetails = (event) => {
  //   if (event.target.id === id) {
  //     return (
  //       <Details 
  //         movieInfo={this.state.movieInfo}
  //         id={id}
  //         />
  //     )
  //   }
  // }

  //we're thinking about two functions
  //METHOD 1
  //resets the state to the found movie based on the id passed in when clicked
  //if id === movie["id"] {
  //this.setState({movie})

  // METHOD 2
  //takes new state and renders found information with more details on details car
  

  render() {
    return (
      <>
        <NavBar />
        <main>
          {this.state.movieInfo.length < 2 && <Details />}
          <Movies movieInfos={this.state.movieInfo} findDetails={event => this.findDetails(event)}/>
        </main>
      </>
    )
  }
}

export default App;

//TO INVESTIGATE AFTER DINNER BREAK !!!
// Make additional property for single movie details 
// use findDetails method to find single movie details pass that as a prop to Details component to render single movie details on DOM. 
