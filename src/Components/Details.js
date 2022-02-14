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
    let id = parseInt(this.props.movieDetails.id)
    console.log("this", id)
    getSingleMovie(id)
    .then(data => {
    if(!data.movie.tagline) {
      data.movie.tagline = "Tagline: none"
    } 
    if (!data.movie.overview) {
      data.movie.overview = 'No information available at this time. Come back soon.'
    } 
    if (!data.movie.runtime) {
      data.movie.runtime = 'No information available at this time. Come back soon.'
    }
    if(data.movie['backdrop_path'].includes('NoPhotoAvailable')) {
      data.movie['backdrop_path'] = data.movie['poster_path']
    }
      this.setState({movie: data.movie})
    })
    .catch(error => console.log(error))
  }
 
  render() {
    
    return (
      <div className='details-div'>
            <img className='details-img' src={this.state.movie['backdrop_path']} alt={this.state.movie['title']} />
            <h1 className="movie-title">{this.state.movie['title']}</h1>
            <h3 className='tagline'>"{this.state.movie['tagline']}"</h3>
            <h3 className='summary'>Summary:</h3> 
            <p className='over-view'>{this.state.movie.overview}</p>
            <h3 className='genre'>{this.state.movie['genre']}</h3>
            <div className='runtime-mainpage-button-div'>
              <div className='runtime-div'>
              <h3 className='run-time-header'>Runtime:</h3>
              <p className='run-time'>{this.state.movie['runtime']} minutes</p>
              </div>
              <div className="nav-button-div">
                <NavLink to="/">
                  <button className='return-to-main'>Main Page</button>
                </NavLink>
              </div>
            </div>
          </div>
     )
  }
}


export default Details;
