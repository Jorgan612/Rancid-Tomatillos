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
     movieInfo: [],
     error: ''
   }
   console.log("this.state.movieInfo here---", this.state.movieInfo)
  }

  componentDidMount = () => {
    fetchMovies()
    .then(data => this.setState({movieInfo: data.movies}))
    .catch(error => this.handleError(error))
  }

  handleError = (error) => {
    console.log('error param-----', error)
    // if (error === 404) {
      this.setState({error: `Oops! Something went front. Error reading: ${error}`})
    // }
    console.log('what is the error?', error)
  }

  displayMainPage = () => {
    this.componentDidMount()
  }

  findDetails = (event) => {
    let id = Number(event.target.id)
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => response.json())
    .then(data => this.setState({movieInfo: [data.movie]}))
  }

  render() {
    return (
      <>
        <NavBar showMain={this.displayMainPage}/>
        {this.state.error && <h1>{this.state.error}</h1>}
        <main className='main-container'>
        {this.state.movieInfo.length < 2 ? <Details movieInfo={this.state.movieInfo} /> :
        <Movies movieInfos={this.state.movieInfo} findDetails={event => this.findDetails(event)}/>}
        </main>
      </>
    )
  }
}

export default App;

