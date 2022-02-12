import { React,  Component } from "react";
import '../CSS_styling/NavBar.css';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      searchedWord: ''
    }
  }
  
  handleChange = (event) => {
    this.setState({searchedWord: event.target.value})
    console.log('this.state.searchedWord---',this.state.searchedWord)
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
      <button>Find A Movie</button>
      </div>
    </nav>
  )
}
}

export default NavBar;