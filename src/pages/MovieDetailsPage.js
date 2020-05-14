import React, { Component } from 'react';

const getMovieIdFromProps = props => props.match.params.movieId;

export default class MovieDetailsPage extends Component {
  state = {};

  render() {
    return (
      <>
        Movie Details Page
        {getMovieIdFromProps(this.props)}
      </>
    );
  }
}
