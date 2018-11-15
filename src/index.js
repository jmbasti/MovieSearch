import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// COMPONENTS
import Header from './components/Header';
import Carousel from './components/Carousel';
import SideBar from './components/SideBar';
import MovieLists from './components/MovieLists';
import Footer from './components/Footer';

// MOVIE DATA KEY
const API_KEY = '884adedda3f5ecdef1950055646b0f34';

class App extends Component {
  // ========================== ALL METHODS AND STATE CODE HERE ============================== //
  constructor(props) {
    super(props);
    this.state = { movies: [] };
    this.movieSearch('Avengers');
  }

  movieSearch(movieQuery) {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${movieQuery}&api_key=${API_KEY}`
      )
      .then(res => {
        // console.log(res.data.results);
        const movies = res.data.results;

        this.setState({ movies: movies });
      });
  }

  // ========================================================================================= //
  render() {
    // ============================== ALL JAVASCRIPT CODE HERE =============================== //
    const movieSearch = _.debounce(movieQuery => {
      this.movieSearch(movieQuery);
    }, 500);
    // ======================================================================================= //
    return (
      <div className="App">
        <Header onMovieSearch={movieSearch} />
        <Carousel />
        <div className="container  py-5">
          <h2 className="text-center pb-5">
            Find the best movies on{' '}
            <span style={{ color: '#4BBF73' }}>Movie Search</span>
          </h2>
          <div className="row">
            <div className="col-md-4">
              <SideBar />
            </div>
            <div className="col-md-8">
              <MovieLists movies={this.state.movies} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
