import React, { Component } from 'react'
import '../CSS_styling/App.css';
import Movies from './Movies';
import NavBar from './NavBar';
import Details from './Details'
import { fetchMovies, getSingleMovie } from '../apiCalls';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
   super()
   this.state = {
     movieInfo: [],
     error: ''
   }
  }

  componentDidMount = () => {
    fetchMovies()
    .then(data => this.setState({movieInfo: data.movies}))
    .catch(error => this.handleError(error))
  }

  handleError = (error) => {
      this.setState({error: `Oops! Something went front. Error reading: ${error}`})
  }

  displayMainPage = () => {
    this.componentDidMount()
  }

  findDetails = (event) => {
    let id = Number(event.target.id)
    getSingleMovie(id)
    .then(data => this.setState({movieInfo: [data.movie]}))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <>
        <NavBar showMain={this.displayMainPage}/>
        <Route exact path="/" render={() => <Movies movieInfos={this.state.movieInfo} findDetails={event => this.findDetails(event)} />} />
        <Route exact path="/movies/:id" render={({match}) => {

          const movieToRender = this.state.movieInfo.find(movie => movie.id === parseInt(match.params.id));
          return <Details movieInfo={movieToRender} />
        }}
        /> 
        {this.state.error && <h1>{this.state.error}</h1>}
        <main className='main-container'>
        {/* {this.state.movieInfo.length < 2 ? <Details movieInfo={this.state.movieInfo} /> :
        <Movies movieInfos={this.state.movieInfo} findDetails={event => this.findDetails(event)}/>} */}
        </main>
      </>
    )
  }
}

export default App;

