import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {fetchMoviesByQuery} from '../movies-api';
import MovieList from '../components/movieList/MovieList'

export default function MoviesPage () {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') || '';

    useEffect(() => {
        if (!query) return;
      
        async function fetchData() {
          try {
            const results = await fetchMoviesByQuery(query);
            setMovies(results);
          } catch (error) {
            console.error('Error fetching movies:', error);
          }
        }
      fetchData();
      }, [query]);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const value = form.elements.search.value;
        setSearchParams({ query });

        if (value.trim() === "") {
            alert("Please enter text to search for movies.");
            return;
        }
        setSearchParams({ query: value });
        form.reset();
    };

    return (
    <div>
      <form onSubmit={handleSubmit}>
       <input type="text" name="search" autoComplete="off" autoFocus
       placeholder="Search movies"/>
       <button type="submit">Search</button>
     </form>
     <MovieList movies={movies} />
    </div>
    )
} 