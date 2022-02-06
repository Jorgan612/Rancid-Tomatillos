import React, { Component } from 'react'



class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      error: null;
    }
  }

  componentDidCatch(error, errorInfo)

  render() {
    return (
      <h1>Something went wrong.</h1>
    )
  }
}


// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// export default class ErrorBoundary extends Component {
//   state = {
//     error: '',
//     errorInfo: '',
//     hasError: false,
//   };
//   static getDerivedStateFromError(error) {
//     return { hasError: true, error };
//   }
//   componentDidCatch(error, errorInfo) {
//     // eslint-disable-next-line no-console
//     console.log({ error, errorInfo });
//     this.setState({ errorInfo });
//   }
//   render() {
//     // next code block goes here
//   return this.props.children;
//   }
// }
// ErrorBoundary.propTypes = {
//   children: PropTypes.oneOfType([ PropTypes.object, PropTypes.array ]).isRequired,
// };