import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from '../Loader/Loader';
import Navigation from '../Navigation/Navigation';

/** Dynamic imports */
const HomePage = lazy(() =>
  import('../../pages/HomePage' /* webpackChunkName: "home-page" */),
);

const MoviesPage = lazy(() =>
  import('../../pages/MoviesPage' /* webpackChunkName: "movies-page" */),
);

const MovieDetailPage = lazy(() =>
  import(
    '../../pages/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);

const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage' /* webpackChunkName: "not-found-page" */),
);

const App = () => (
  <>
    <Navigation />

    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies/:movieId" component={MovieDetailPage} />
        <Route path="/movies" component={MoviesPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  </>
);

export default App;
