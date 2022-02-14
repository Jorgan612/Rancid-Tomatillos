import React, { Component } from 'react'
import '../CSS_styling/App.css';
import Movies from './Movies';
import NavBar from './NavBar';
import Details from './Details'
import { fetchMovies } from '../apiCalls';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import FilteredMovies from './FilteredMovies';
import Error from './Error'

class App extends Component {
  constructor() {
   super()
   this.state = {
     movieInfo: [],
     error: '',
     searchedMovie: ''
   }
  }
  
  searchMovie = (title) => {
    this.setState({searchedMovie: title.searchedWord})
  }


  componentDidMount = () => {
    fetchMovies()
    .then(data => this.setState({movieInfo: data.movies}))
    .catch(error => this.handleError(error))
  }

  handleError = (error) => {
      this.setState({error: `Oops! Something went wrong! Error reading: ${error.message}`})
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
            <ErrorBoundary error={this.state.error}><Details movieDetails={movieToRender} /></ErrorBoundary>
       )
    } else {
      return (
      <h1>{this.state.error}</h1>
      )
    }
  }

  
  render() {
    
    const error =  this.state.error && <h1>{this.state.error}</h1>
    return (
      <>
        <NavBar searchMovie={this.searchMovie} />
        {error}
        <ErrorBoundary>
        <Switch>
          <Route exact path="/" render={() => <Movies movieInfos={this.state.movieInfo} />}></Route>
          <Route exact path="/filtered" render={() => <FilteredMovies movies={this.state.movieInfo} searchPhrase={this.state.searchedMovie} />}></Route>
          <Route exact path="/movies/:id" render={({match}) => {
            return this.findMovie(match.params.id)
            }
          }
            ></Route>
          <Route><Error /></Route>
        </Switch>
        </ErrorBoundary>
        </>
    )
  }
}

export default App;

