import React, { Component } from 'react'
import NavBar from './NavBar';
import '../CSS_styling/ErrorBoundary.css'
import { NavLink } from 'react-router-dom'


class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false
    }
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true
    }
  }

  render() {
    if(this.state.hasError) {
      return (
        <div className='error-boundary-div'>
          <h1>{this.state.error}</h1>
          {console.log("here", this.props)}
            <NavLink to="/">
              <button>Back To Main Page</button>
            </NavLink>
            <h6 className='error-msg'> Something went wrong. Go back to main page.</h6>
            <img src="https://wallpapercave.com/wp/wp5950960.jpg"></img>
        </div>
      )
    } else {
      return this.props.children
    }
  }
}

export default ErrorBoundary;
