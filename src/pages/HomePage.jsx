import { useEffect, useState } from 'react';
import {fetchTrendingMovies} from '../movies-api';
import MovieList from '../components/movieList/MovieList'

export default function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchTrendingMovies().then(setMovies).catch(console.error);
    }, []);

    return (
        <div>
            <h1>Trending today</h1>
            <MovieList movies={movies} />
        </div>
    )
}