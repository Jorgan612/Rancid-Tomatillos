import React, { Component } from 'react'
import '../CSS_styling/ErrorBoundary.css'


class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

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
        <div>
            <h1 className='error-msg'>Something went wrong.</h1>
        </div>
      )
    } else {
      return this.props.children
    }
  }
}

export default ErrorBoundary;
