import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMoviesReviews } from  '../../movies-api';
import css from './MovieReviews.module.css'

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
        <li key={review.id} className={css.rewLi}>
          <h4>Author: {review.author}</h4>
          <p className={css.p}>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}