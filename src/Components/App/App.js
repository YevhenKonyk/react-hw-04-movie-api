import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../../pages/HomePage';
import MoviesPage from '../../pages/MoviesPage';
import MovieDetailPage from '../../pages/MovieDetailsPage';
import NotFoundPage from '../../pages/NotFoundPage';

export default class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies/:movieId" component={MovieDetailPage} />
          <Route path="/movies" component={MoviesPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </>
    );
  }
}
