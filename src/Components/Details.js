import { React, Component } from 'react';
import '../CSS_styling/Details.css';
import {getSingleMovie} from '../apiCalls';
import {NavLink} from 'react-router-dom'

class Details extends Component {
  constructor() {
    super();
    this.state = {
      movie: {}
    }
  }

  componentDidMount() {
    let id = parseInt(this.props.movieToRender.id)
    getSingleMovie(id)
    .then(data => {console.log("here we goooo!", data)
      this.setState({movie: data.movie})})
    .catch(error => console.log(error))
  }

  render() {
    return (
          <div className='details-div'>
            {this.state.movie['backdrop_path'] ? <img className='details-img' src={this.state.movie['backdrop_path']} alt={this.state.movie['title']}/> :
            <img className='details-img' src={this.state.movie['poster_path']} alt={this.state.movie['title']} />}
            <h1 className="movie-title">{this.state.movie['title']}</h1>
            {this.state.movie.tagline ? <h3 className='tagline'>Tagline: "{this.state.movie['tagline']}"</h3> : <h3 className='tagline'>Tagline: none.</h3>}
            <h3 className='summary'>Summary:</h3> 
            {this.state.movie.overview ? <p className='over-view'>{this.state.movie['overview']}</p> :
            <p>No information available at this time. Come back soon.</p>}
            <h3 className='genre'>{this.state.movie['genre']}</h3>
            <div className='runtime-mainpage-button-div'>
              <h3 className='run-time-header'>Runtime:</h3>
              {this.state.movie.runtime ? <p className='run-time'>{this.state.movie['runtime']} minutes</p> :
              <p>No information available at this time. Come back soon.</p>}
              <div className="nav-button-div">
                <NavLink to="/">
                  <button>Main Page</button>
                </NavLink>
              </div>
            </div>
          </div>
     )
  }
}


export default Details;
