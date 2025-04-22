import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {fetchMoviesDetails} from '../movies-api';

export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/movies";
  
    useEffect(() => {
      fetchMoviesDetails(movieId).then(setMovie).catch(console.error);
    }, [movieId]);
  
    if (!movie) return <p>Loading movie...</p>;

    const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://placehold.co/100x150?text=No+Photo";

    const genres = movie.genres?.map(genre => genre.name).join(', ');
    const votePercentage = Math.round(movie.vote_average * 10);
    
    return (
      <div style={{ padding: '20px' }}>
        <Link to={backLinkHref}>Go back</Link>
        <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <img src={posterUrl} alt={`${movie.title} poster`} width="200" style={{ flexShrink: 0, borderRadius: '8px' }}/>
        <div> 
        <h2>{movie.title}</h2>
        <p><strong>User Score:</strong> {votePercentage}%</p>
        <p><strong>Genres:</strong> {genres}</p>
        <p>{movie.overview}</p>
        </div>
        </div>
        <ul>
          <li><Link to="cast" state={{ from: backLinkHref }}>Cast</Link></li>
          <li><Link to="reviews" state={{ from: backLinkHref }}>Reviews</Link></li>
        </ul>
        <Outlet />
      </div>
    );
  }

