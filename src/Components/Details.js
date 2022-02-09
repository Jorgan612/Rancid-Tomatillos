import { React, Component } from 'react';
import '../CSS_styling/Details.css';
import {getSingleMovie} from '../apiCalls';

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
            {this.state.movie.tagline && <h3 className='tagline'>"{this.state.movie['tagline']}"</h3>}
            <h3 className='summary'>Summary:</h3> 
            {this.state.movie.overview ? <p className='over-view'>{this.state.movie['overview']}</p> :
            <p>No information available at this time. Come back soon.</p>}
            <h3 className='genre'>{this.state.movie['genre']}</h3>
            <h3 className='run-time-header'>Runtime:</h3>
            {this.state.movie.runtime ? <p className='run-time'>{this.state.movie['runtime']} minutes</p> :
            <p>No information available at this time. Come back soon.</p>}
          </div>
     )
  }
}

//img, tagline, title, overview, genre, runtime
//Tagline needs conditional

// "release_date": "2020-07-02",
// "overview": "A black ops assassin is forced to fight for her own survival after a job goes dangerously wrong.",
// "genres": [
// "Action",
// "Crime",
// "Drama",
// "Thriller"
// ],
// "budget": 0,
// "revenue": 152812,
// "runtime": 96,
// "tagline": "Kill. Or be killed.",
// "average_rating": 5.142857142857143

export default Details;

//The button updates the state, so the method is going to have to live on the App,
//the poster has a button that is going to take in a function, 
//and so we are going to have to add the function to a prop key attribute when we invoke movies
//Ex <Movie attribute1=whatever showDetails={this.showDetails}
//In our movies component, also call showDetails in the dconstructed form 
//to be able to pass it into the poster for a method on click

//METHOD
//iunno????
//Lives in the app
//needs to reset the state based on a find
//event.target.id 
//method needs to take in id as a parameter
//if event.target id matches the id being put in the parameter
//find that movie and then render those details BASED on the data found