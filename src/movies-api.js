import axios from "axios";

const baseURL = "https://api.themoviedb.org/3";

const accestoken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhM2Q1ZmEwNmRlZTgzNWQ0M2FhNzgxN2FjOTk0NjJiZiIsIm5iZiI6MTc0NTAwNDE2Ni4xMDYsInN1YiI6IjY4MDJhNjg2NTU3MGNiYTllMWFjZjYwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._U-8r6cta4Lwc9E1XjwZCASDWVJ1x08yxD8RWKNKp3Q";

const options = {
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${accestoken}`,
    },
  };
  
export const fetchTrendingMovies = async () => {
  const response = await axios.get (`${baseURL}/trending/movie/day?language=en-US`, options);
  return response.data.results;
};
export const fetchMoviesDetails = async (movieId) => {
  const response = await axios.get (`${baseURL}/movie/${movieId}?language=en-US`, options);
  return response.data;
};
export const fetchMoviesCast = async (movieId) => {
  const response = await axios.get (`${baseURL}/movie/${movieId}/credits?language=en-US`, options);
  return response.data.cast;
};
export const fetchMoviesReviews = async (movieId) => {
  const response = await axios.get (`${baseURL}/movie/${movieId}/reviews?language=en-US`, options);
  return response.data.results;
};
export const fetchMoviesByQuery = async (query) => {
  const url = `${baseURL}/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`;
  const response = await axios.get(url, options);
  return response.data.results;
}
