/* eslint-disable react/static-property-placement */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { fetchMovieById } from '../services/themoviedb-api';
import Movie from '../Components/MovieDetails/MovieDetails';

const getMovieIdFromProps = props => props.match.params.movieId;

export default class MovieDetailsPage extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      state: PropTypes.shape({
        from: PropTypes.string,
      }),
    }),
  };

  static defaultProps = {
    location: {},
  };

  state = {
    movie: null,
  };

  componentDidMount() {
    const currentMovieId = getMovieIdFromProps(this.props);

    fetchMovieById(currentMovieId).then(movie => this.setState({ movie }));
  }

  handleGoBack = () => {
    if (this.props.location.state) {
      this.props.history.push(this.props.location.state.from);

      return;
    }

    this.props.history.push('/');
  };

  render() {
    const { movie } = this.state;

    return <>{movie && <Movie item={movie} onGoBack={this.handleGoBack} />}</>;
  }
}
