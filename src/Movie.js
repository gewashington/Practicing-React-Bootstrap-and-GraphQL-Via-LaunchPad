import React from 'react';
import './Movie.css';
//import font awesome when done with css


const Movie = (props) => (
    <div className="card">
      <div className="poster">
        <img src={props.movie.poster} />
      </div>
      <div className="details">
        <h2>{props.movie.title}<br/><span>{props.movie.year}</span></h2>
        <div className="rating">
          IMDB Rating: <span>{props.movie.imdbRating}</span>
        </div>
        {props.movie.genres.map((genre) => (
          <div className="tags">genre</div>
        ))}
        <div className="info">{props.movie.plot}</div>
      </div>
    </div>
)


// const Movie = (props) => (

// <div className="card text-center" style={{"width": "50%"}}>
// <div class="card-header">{props.movie.title}</div>
//     <img class="card-img-top" src={props.movie.poster} alt={props.movie.title} />
//     <div className="card-body">
//       <h5 class="card-title">{props.movie.title}</h5>
//         <p class="card-text">{props.movie.plot}</p>
//     </div>
//     <div class="card footer"><strong>IMDB Rating:</strong> {props.movie.imdbRating}</div>
//   </div>

// );

export default Movie;
