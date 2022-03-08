import React, { useEffect, useState } from 'react'

import './searchBar.css';
class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
     // alert('A name was submitted: ' + this.state.value);
     console.log(this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div >
            <h2 style={{textAlign:"center"}}>Search the lyrics of a song</h2>
        <form onSubmit={this.handleSubmit}>
          <label className='mainSearchBar'>
            <input className='searchBar'  placeholder="sddf" type="text" value={this.state.value} onChange={this.handleChange} />
            <input className='button' type="submit" value="Submit" />
          </label>

        </form>
        </div>
      );
    }
  }
  export default SearchBar;
//   ReactDOM.render(
//     <NameForm />,
//     document.getElementById('root')
//   );