import React from 'react';
import uuid from 'uuid';
// Component
import MovieListItem from './MovieListItem';

const MovieLists = props => {
  // ============================== ALL JAVASCRIPT CODE HERE =============================== //
  const movies = props.movies.map(movie => {
    return <MovieListItem movie={movie} key={uuid.v4()} />;
  });
  // console.log(movies);
  // ======================================================================================= //

  return <div>{movies}</div>;
};

export default MovieLists;
