import { useState } from "react";
import { Card, Button, Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../features/favorites/favoritesSlice";
import { useNavigate } from "react-router-dom";
import defaultPlaceholder from "./assets/default.jpg";
import "../static/css/index.css";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector((state) => state.favorites.movies);
  const [posterError, setPosterError] = useState(false);

  const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

  const handleFavorite = () => {
    isFavorite ? dispatch(removeFromFavorites(movie.imdbID)) : dispatch(addToFavorites(movie));
  };

  const handleClick = () => {
    navigate(`/movie/${movie.imdbID}`);
  };

  const renderImage = () => {
    const isValidPoster = movie.Poster && movie.Poster !== "N/A";
    const imgSrc = isValidPoster && !posterError ? movie.Poster : defaultPlaceholder;

    return (
      <img
        alt={movie.Title || "Placeholder"}
        src={imgSrc}
        className="movie-poster"
        onError={() => setPosterError(true)}
      />
    );
  };

  return (
  <Card className="movie-card" cover={renderImage()} onClick={handleClick} >
    <div className="movie-details" >

      <Tooltip title={movie.Title || "Untitled"}>
        <h3 className="movie-title">
          {movie.Title || "Untitled"}
        </h3>
      </Tooltip>
      
      <p className="movie-year">🎬 {movie.Year || "N/A"}</p>
    </div>

    <div className="movie-button-container"> 
      <Button
        type={isFavorite ? "primary" : "default"}
        block
        className="favorite-btn"
        onClick={(e) => {
          e.stopPropagation();
          handleFavorite();
        }}
      >
        {isFavorite ? "★ Remove from Favorites" : "☆ Add to Favorites"}
      </Button>
    </div>
  </Card>
);
};

export default MovieCard;
