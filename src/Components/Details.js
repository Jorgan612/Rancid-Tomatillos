import React from 'react';
import '../CSS_styling/Details.css';

const Details = ({movieDetails}) => {
    return (
        <div>
          <img src={movieDetails['backdrop_path']} alt={movieDetails['title']}/>
          <h2>{movieDetails['title']}</h2>
          <h3>{movieDetails['average_rating']}</h3>
        </div>
      )
}


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