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

  findDetails = (id) => {
    let foundMovie = this.state.movieInfo.find(movie => {
      if (id === movie["id"]) {
       this.setState({movieInfo: [movie]})
      }
      return movie;
      
    })
    console.log('foundMovie is?----', foundMovie)
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
          <Movies movieInfos={this.state.movieInfo} findDetails={this.findDetails}/>
        </main>
      </>
    )
  }
}

export default App;
