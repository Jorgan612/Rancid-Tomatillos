import { React,  Component } from "react";
import '../CSS_styling/NavBar.css';
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      searchedWord: '' || undefined
    }
  }

  clearInput = () => {
    this.setState({searchedWord: ''})
  }

  submitWord = (event) =>  {
    const searchPhrase = {...this.state}
    this.props.searchMovie(searchPhrase)
    this.clearInput()
  }
  
  handleChange = (event) => {
    this.setState({searchedWord: event.target.value})
  }


render() {
  return (
      <nav className="nav-bar">
        <h1>Rancid Tomatillos</h1>
        <div className="search-field-div">
        <input
        id="inputBox"
        type="text" 
        name='search-box' 
        value={this.state.searchedWord}
        placeholder="Search by title..." 
        onChange={event => this.handleChange(event)}
        required
        />
        <NavLink to="/filtered">
          <button className="search-button" onClick={event => this.submitWord(event)}>Find A Movie</button>
        </NavLink>
        </div>
      </nav>
    )
  }
}

export default NavBar;