import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navigation from "./navigation/Navigation";

const HomePage = lazy(() => import("../pages/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage"));
const Cast = lazy(() => import("../components/movieCast/MovieCast"));
const Reviews = lazy(() => import("../components/movieReviews/MovieReviews"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

export default function App () {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navigation/>
      <main style={{ paddingTop: '80px' }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </main>
    </Suspense>
  );
}
