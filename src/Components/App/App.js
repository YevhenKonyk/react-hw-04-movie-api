import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';

import HomePage from '../../pages/HomePage';
import MoviesPage from '../../pages/MoviesPage';
import MovieDetailPage from '../../pages/MovieDetailsPage';
import NotFoundPage from '../../pages/NotFoundPage';
// import MovieCreditsPage from '../../pages/MovieCreditsPage';
// import MovieReviewsPage from '../../pages/MovieReviewsPage';

export default class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Navigation />
        <Switch>
          <Route path="/" exact component={HomePage} />
          {/* <Route path="/movies/:movieId/credits" component={MovieCreditsPage} /> */}
          {/* <Route path="/movies/:movieId/reviews" component={MovieReviewsPage} /> */}
          <Route path="/movies/:movieId" component={MovieDetailPage} />
          <Route path="/movies" component={MoviesPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </>
    );
  }
}
