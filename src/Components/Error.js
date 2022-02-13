import React from 'react'
import { NavLink } from 'react-router-dom';



const Error = () => {
  return (
    <div>
      <h1>Error 404. Something went wrong please return to the home page.</h1>
      <NavLink to="/">
          <button className='error-return-home-button'>Return to main page</button>
        </NavLink>
        <img src="https://wallpapercave.com/wp/wp5950960.jpg" alt="error page"></img>
    </div>
  )
}

export default Error;