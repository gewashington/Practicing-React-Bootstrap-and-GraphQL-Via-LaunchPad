import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Movie from './Movie';

const Movies = () => (
  <Query query={gql`
    {
      movies(subString: "Rings", limit:15) {
      movieId
      title
      year
      plot
      poster
      imdbRating
      genres
      }
    }
  `}
  >
  {({loading, error, data}) => {
    if (loading) return <p>Loading!</p>;
    if (error) return <p>Problem getting movies</p>;

    console.log(data)
    return data.movies.map((currentMovie) => (
        <Movie movie={currentMovie} /> 
    ));

  }}
  </Query>
);

export default Movies;

