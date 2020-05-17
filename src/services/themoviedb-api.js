import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '9fa4665f2507db381929fa4018205168';
// api_key=9fa4665f2507db381929fa4018205168

export const fetchDailyTrendingMovies = () => {
  return axios
    .get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`)
    .then(responce => responce.data);
};

export const fetchMovieById = movieId => {
  return axios
    .get(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`)
    .then(responce => responce.data);
};

export const fetchMovieCredits = movieId => {
  return axios
    .get(`${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`)
    .then(responce => responce.data)
    .then(data => data.cast);
};

export const fetchMovieReviews = movieId => {
  return axios
    .get(`${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`)
    .then(responce => responce.data)
    .then(data => data.results);
};
