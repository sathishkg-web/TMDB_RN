import {api} from './axios';

export const getPopularMovies = () =>
  api.get('/movie/popular');

export const getTopRatedMovies = () =>
  api.get('/movie/top_rated');

export const getUpcomingMovies = () =>
  api.get('/movie/upcoming');

export const getNowPlayingMovies = () =>
  api.get('/movie/now_playing');

export const getMovieDetails = (id: number) =>
  api.get(`/movie/${id}`);

export const searchMovies = (query: string) =>
  api.get('/search/movie', {
    params: {
      query,
    },
  });