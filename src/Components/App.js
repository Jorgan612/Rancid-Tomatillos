import React, { Component } from 'react'
import '../CSS_styling/App.css';
import Movies from './Movies';
import NavBar from './NavBar';
import Details from './Details'
import { fetchMovies, getSingleMovie } from '../apiCalls';
import { Route } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {
  constructor() {
   super()
   this.state = {
     movieInfo: [],
     error: '',
     searchedMovie: ''
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

  findMovie(matchId) {
    console.log("id", matchId)
    if(matchId) {
      console.log('test')
      const movieToRender = this.state.movieInfo.find(movie => movie.id === parseInt(matchId))
      console.log("movie", movieToRender)
      return (
            <Details movieDetails={movieToRender} />
       )
    } else {
      <ErrorBoundary />
    }
  }


  render() {
    const error =  this.state.error && <h1>{this.state.error}</h1>

    return (
      <>
        <NavBar showMain={this.displayMainPage}/>
          <Route exact path="/" render={() => <Movies movieInfos={this.state.movieInfo} />} />
          <Route exact path="/movies/:id" render={({match}) => {
            return this.findMovie(match.params.id)
           }
          }
          /> 
        {error}
        <main className='main-container'>
        </main>
      </>
    )
  }
}

export default App;

