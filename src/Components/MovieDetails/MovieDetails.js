import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';

import MovieCreditsPage from '../../pages/MovieCreditsPage';
import MovieReviewsPage from '../../pages/MovieReviewsPage';

import styles from './MovieDetails.module.css';

const getMoviePosterUrl = path => `https://image.tmdb.org/t/p/w500/${path}`;
const getMovieReleaseYear = releaseDate => new Date(releaseDate).getFullYear();

const MovieDetails = ({ item, onGoBack }) => (
  <section>
    <h1>Movie Details Page</h1>

    {item && (
      <>
        <button type="button" onClick={onGoBack}>
          Go back
        </button>

        <div className={styles.movie}>
          <div className={styles.poster}>
            <img src={getMoviePosterUrl(item.poster_path)} alt="movie poster" />
          </div>

          <div className={styles.details}>
            <h2>
              {`${item.title} (${getMovieReleaseYear(item.release_date)})`}
            </h2>

            <p>{`User score: ${parseInt(item.popularity, 10)}%`}</p>

            <h3>Overwiew</h3>

            <p>{item.overview}</p>

            {item.genres && (
              <>
                <h4>Genres</h4>

                <ul className={styles.list}>
                  {item.genres.map(genre => (
                    <li className={styles.listItem} key={genre.id}>
                      {genre.name}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        <div className={styles.additionalInfo}>
          <h2>Additinal info</h2>

          <ul>
            <li>
              <Link to={`/movies/${item.id}/credits`}>Credits</Link>
            </li>
            <li>
              <Link to={`/movies/${item.id}/reviews`}>Rewievs</Link>
            </li>
          </ul>
        </div>
      </>
    )}
    {/* Вложенный раут */}
    <Route path="/movies/:movieId/credits" component={MovieCreditsPage} />
    <Route path="/movies/:movieId/reviews" component={MovieReviewsPage} />
  </section>
);

MovieDetails.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
  onGoBack: PropTypes.func.isRequired,
};

export default MovieDetails;
