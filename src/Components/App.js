import React, { Component } from 'react'
import '../CSS_styling/App.css';
import Movies from './Movies';
import NavBar from './NavBar';
import Details from './Details'
import { fetchMovies } from '../apiCalls';
import { Route, Switch} from 'react-router-dom';

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

  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => <Movies movieInfos={this.state.movieInfo} />} />
          <Route exact path="/movies/:id" render={({match}) => {
            const movieToRender = this.state.movieInfo.find(movie => movie.id === parseInt(match.params.id))
            return <Details movieToRender={movieToRender}/>
           }
          }
          /> 
        </Switch>  
        {this.state.error && <h1>{this.state.error}</h1>}
        <main className='main-container'>
        </main>
        {console.log('what is state?', this.state.movieInfo)}
      </>
    )
  }
}

export default App;

