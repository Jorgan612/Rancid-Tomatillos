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

