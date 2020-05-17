import React, { Component } from 'react';
import { fetchMovieReviews } from '../services/themoviedb-api';

const getMovieIdFromProps = props => props.match.params.movieId;

export default class MovieReviewsPage extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const movieId = getMovieIdFromProps(this.props);

    fetchMovieReviews(movieId).then(reviews => this.setState({ reviews }));
  }

  render() {
    const { reviews } = this.state;

    return (
      <>
        <h2>Movie Reviews Page</h2>

        {reviews.length > 0 && (
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <h2>Author: {review.author}</h2>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
