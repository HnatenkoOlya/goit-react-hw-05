import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMoviesCast } from "../../movies-api";

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMoviesCast(movieId).then(setCast).catch(console.error);
  }, [movieId]);

  if (!cast.length) return <p>No cast information found.</p>;

  

  return (
    <ul>
      {cast.map(actor => {
        const photo = actor.profile_path
          ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
          : 'https://via.placeholder.com/100x150?text=No+Photo';

        return (
          <li key={actor.cast_id}>
            <img src={photo} alt={actor.name} width="100" />
            <p><strong>{actor.name}</strong> as {actor.character}</p>
          </li>
        );
      })}
    </ul>
  );
}