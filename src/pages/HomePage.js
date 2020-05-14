import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as MoviesAPI from '../services/themoviedb-api';

export default class HomePage extends Component {
  state = { trendingMovies: null };

  componentDidMount() {
    MoviesAPI.fetchDailyTrendingMovies().then(({ results: trendingMovies }) =>
      this.setState({ trendingMovies }),
    );
  }

  render() {
    const { trendingMovies } = this.state;

    return (
      <>
        <h1>Trending today</h1>
        {/* TODO: Rewrite to component */}
        {trendingMovies && (
          <ul>
            {trendingMovies.map(movie => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
