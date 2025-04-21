import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMoviesReviews } from  '../../movies-api';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMoviesReviews(movieId).then(setReviews).catch(console.error);
  }, [movieId]);

  if (!reviews.length) return <p>No reviews available.</p>;

  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <h4>Author: {review.author}</h4>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}