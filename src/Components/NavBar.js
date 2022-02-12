import { React,  Component } from "react";
import '../CSS_styling/NavBar.css';
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      searchedWord: ''
    }
  }

  submitWord = (event) =>  {
    const searchPhrase = {...this.state}
    this.props.searchMovie(searchPhrase)
  }
  
  handleChange = (event) => {
    this.setState({searchedWord: event.target.value})
  }


render() {
  return (
      <nav className="nav-bar">
        <h1>Rancid Tomatillos</h1>
        <div>
        <label>Find A Movie</label>
        <input 
        id="inputBox"
        type="text" 
        name='search-box' 
        value={this.state.searchedWord}
        placeholder="Search for a movie by title..." 
        onChange={event => this.handleChange(event)}
        />
        <NavLink to="/filtered">
          <button onClick={event => this.submitWord(event)}>Find A Movie</button>
        </NavLink>
        </div>
      </nav>
    )
  }
}

export default NavBar;