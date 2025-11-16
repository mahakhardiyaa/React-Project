import { useParams } from "react-router-dom";
import { useState } from "react"
import { useQuery } from "@tanstack/react-query";
import { fetchMovieDetails } from "../api/service";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../features/favorites/favoritesSlice";
import { Button } from "antd";
import Navbar from "../components/Navbar";
import "../static/css/MovieDetails.css";
import defaultPlaceholder from "./assets/default.jpg";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.movies);

  const [posterError, setPosterError] = useState(false);

  const isFavorite = favorites.some((fav) => fav.imdbID === id);

  const { data: movie, isLoading } = useQuery({
    queryKey: ["movieDetails", id],
    queryFn: () => fetchMovieDetails(id),
  });

  const handleToggleFavorite = () => {
    isFavorite ? dispatch(removeFromFavorites(movie.imdbID)) : dispatch(addToFavorites(movie));
  };

  if (isLoading) {
    return <p style={{ textAlign: "center", color: "#fff" }}>Loading...</p>;
  }

  if (!movie) {
    return <p style={{ textAlign: "center", color: "#fff" }}>Movie not found.</p>;
  }

  const isValidPoster = movie.Poster && movie.Poster !== "N/A";
  const imgSrc = isValidPoster && !posterError ? movie.Poster : defaultPlaceholder;        

  return (
    <>
      <Navbar />
      <div className="movie-details-container">
        <div className="poster-section">
          <img
            src={imgSrc}
            alt={movie.Title}
            className="poster-image"
            onError={() => setPosterError(true)}
          />
        </div>

        <div className="info-section">
          <h1 className="movie-title">{movie.Title}</h1>
          <p className="movie-meta">
            {movie.Year} • {movie.Genre} • {movie.Runtime}
          </p>

          <div className="movie-rating">
            ⭐ IMDb: <span>{movie.imdbRating}</span>/10
          </div>

          <p className="movie-plot">{movie.Plot}</p>

          <div className="movie-crew">
            <p><strong>Director:</strong> {movie.Director}</p>
            <p><strong>Actors:</strong> {movie.Actors}</p>
          </div>

          <Button
            type={isFavorite ? "primary" : "default"}
            onClick={handleToggleFavorite}
            className="details-favorite-btn"
          >
            {isFavorite ? "💔 Remove from Favorites" : "💖 Add to Favorites"}
          </Button>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;
