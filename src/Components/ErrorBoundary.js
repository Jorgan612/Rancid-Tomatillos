import React, { Component } from 'react'
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
              <button className='return-button'>Back To Main Page</button>
            </NavLink>
            <h6 className='error-msg'> Something went wrong. Go back to main page.</h6>
        </div>
      )
    } else {
      return this.props.children
    }
  }
}

export default ErrorBoundary;
