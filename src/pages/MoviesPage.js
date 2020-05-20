/* eslint-disable react/static-property-placement */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { Link } from 'react-router-dom';

import { fetchMoviesByQuery } from '../services/themoviedb-api';
import SearchForm from '../Components/SearchForm/SearchForm';

const getQueryStringFromProps = props =>
  queryString.parse(props.location.search).query;

const mapper = items => {
  return items.map(
    ({
      id,
      poster_path: posterPath,
      title,
      overview,
      release_date: releaseDate,
      ...props
    }) => ({
      id,
      posterPath,
      title,
      overview,
      releaseDate,
      props,
    }),
  );
};

export default class MoviesPage extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  };

  state = {
    movies: [],
  };

  componentDidMount() {
    /**
     * При первом посещении страницы получаем queryString из пропов (location)
     * и если он есть делаем запрос на API
     */
    const query = getQueryStringFromProps(this.props);

    if (query) {
      fetchMoviesByQuery(query).then(data => {
        this.setState({ movies: mapper(data.results) });
      });
    }
  }

  handleSearch = ({ query }) => {
    fetchMoviesByQuery(query).then(data => {
      this.setState({ movies: mapper(data.results) });
    });

    /** Каждый раз при обработке поиска необходимо обновлять URL используя метод history.push
     * для добавления новой записи в журнал истории
     *
     * Берем текущее значение location.pathname и обновляем search добавляя в него query
     *
     * */
    if (query) {
      this.props.history.push({
        pathname: this.props.location.pathname,
        search: `query=${query}`,
      });

      return;
    }

    this.props.history.push({
      pathname: this.props.location.pathname,
      search: ``,
    });
  };

  render() {
    const { movies } = this.state;
    const { location } = this.props;
    // Получаем queryString из пропов, для передачи начального состояния сёрч инпута форме поиска
    const query = getQueryStringFromProps(this.props);

    return (
      <>
        <h1>Movies page</h1>

        <SearchForm onSearch={this.handleSearch} searchQuery={query} />

        {movies.length > 0 && (
          <>
            <ul>
              {movies.map(movie => (
                <li key={movie.id}>
                  <Link
                    to={{
                      pathname: `/movies/${movie.id}`,
                      state: { from: location },
                    }}
                  >
                    {movie.title}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </>
    );
  }
}
