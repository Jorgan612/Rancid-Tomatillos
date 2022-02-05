import React, { Component } from 'react'
import '../CSS_styling/App.css';
import Movies from './Movies';
import NavBar from './NavBar';
import Details from './Details'
import { fetchMovies } from '../apiCalls';

class App extends Component {
  constructor() {
   super()
   this.state = {
     movieInfo: []
   }
   console.log("this.state.movieInfo here---", this.state.movieInfo)
  }

  componentDidMount = () => {
    fetchMovies()
    .then(data => (this.setState({movieInfo: data.movies})))
  }

  displayMainPage = () => {
    this.componentDidMount()
  }

  //we need to utilize the id (event.target.id)
  //and then pass it through a fetch call to make it dynamic
  //and then do 2 .thens
  //and then reset the state with that individual movi
  //and then re-do our details poster thing with more info

  findDetails = (event) => {
    let id = Number(event.target.id)
    console.log("number", id)
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => response.json())
    .then(data => console.log("it's the data!", data))
    .catch(err => console.log("an error!", err))
    // this.state.movieInfo.find(movie => {
    //   let id = Number(event.target.id)
    //   if (movie.id === id) {
    //   this.setState({movieInfo: [movie]})
    //   return movie;
    //   }
    // })
  }

  render() {
    return (
      <>
        <NavBar showMain={this.displayMainPage}/>
        <main className='main-container'>
        {this.state.movieInfo.length < 2 ? <Details movieInfo={this.state.movieInfo} /> :
        <Movies movieInfos={this.state.movieInfo} findDetails={event => this.findDetails(event)}/>}
        </main>
      </>
    )
  }
}

export default App;

