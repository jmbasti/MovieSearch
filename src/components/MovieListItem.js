import React from 'react';

const MovieListItem = props => {
  // ============================== ALL JAVASCRIPT CODE HERE =============================== //
  // IMAGE PATH
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500';
  // MOVIE PATH
  const MOVIE_PATH = 'https://www.themoviedb.org/movie/';
  const movie = props.movie;
  const posterPath = movie.poster_path;
  const movieId = movie.id;
  const moviePath = `${MOVIE_PATH}${movieId}`;
  console.log(moviePath);
  const image1 = `${IMAGE_PATH}${movie.poster_path}`;
  const image2 = `https://www.themoviedb.org/assets/1/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg`;
  const title = movie.title;
  const plot = movie.overview;
  console.log(movie);

  let imageAlt = posterPath !== null ? image1 : image2;

  // ======================================================================================= //
  return (
    <div className="card my-3">
      <div className="row p-4">
        <div className="col-md-3">
          <img
            src={imageAlt}
            alt=""
            className="img-fluid mb-4"
            style={{ boxShadow: '1px 1px 3px 0 rgba(0,0,0,.3)' }}
          />
        </div>
        <div className="col-md-7">
          <div className="d-flex">
            <h5 className="mr-auto">{title}</h5>
            <small />
          </div>
          <p className="text-justify">{plot}</p>
          <a
            href={moviePath}
            className="btn btn-info btn-sm mb-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Movie Info
          </a>
        </div>
        <div className="col-md-2" />
      </div>
    </div>
  );
};
export default MovieListItem;
