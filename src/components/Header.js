import React, { Component } from 'react';

class Header extends Component {
  // ========================== ALL METHODS AND STATE CODE HERE ============================== //
  constructor(props) {
    super(props);
    this.state = { movieQuery: '' };
  }

  onInputChange(movieQuery) {
    this.props.onMovieSearch(movieQuery);
    this.setState({ movieQuery: movieQuery });
  }

  // ========================================================================================= //

  render() {
    return (
      <nav className="navbar navbar-light bg-dark justify-content-between">
        <a href="/" className="navbar-brand text-white">
          Movie Search | React.js
        </a>
        <div className="d-inline">
          <input
            id="searchInput"
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search Movies, Series"
            aria-label="Search"
            onChange={e => this.onInputChange(e.target.value)}
          />
        </div>
      </nav>
    );
  }
}
export default Header;
