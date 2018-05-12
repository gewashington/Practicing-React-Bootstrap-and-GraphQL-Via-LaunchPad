import React from 'react';

const Movie = (props) => (
<div className="card text-center" style={{"width": "18em"}}>
<div class="card-header">{props.movie.title}</div>
    <img class="card-img-top" src={props.movie.poster} alt={props.movie.title} />
    <div className="card-body">
      <h5 class="card-title">{props.movie.title}</h5>
        <p class="card-text">{props.movie.plot}</p>
    </div>
    <div class="card footer"><strong>IMDB Rating:</strong> {props.movie.imdbRating}</div>
  </div>
);

export default Movie;
