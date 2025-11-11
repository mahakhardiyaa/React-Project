import { Card, Button } from "antd";
import { useDispatch, useSelector } from "react-redux"; 
import { addToFavorites, removeFromFavorites } from "../features/favorites/favoritesSlice";
import "../index.css";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.movies);

  const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(movie.imdbID)); 
    } else {
      dispatch(addToFavorites(movie)); 
    }
  };

  return (
    <Card
      className="custom-card"
      style={{
        width: 280,
        margin: "10px auto",
        fontFamily: "Sans-serif",
        backgroundColor: "black",
        color: "white",
      }}
      cover={
        movie.Poster && movie.Poster !== "N/A" ? (
          <img
            alt={movie.Title}
            src={movie.Poster}
            style={{ height: 400, objectFit: "cover" }}
          />
        ) : (
          <div
            style={{
              height: 300,
              background: "#f0f0f0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            No Image
          </div>
        )
      }
    >
      <h3>{movie.Title || "No Title"}</h3>
      <p>Year: {movie.Year || "N/A"}</p>
      <Button
        type={isFavorite ? "primary" : "default"}
        block
        onClick={handleToggleFavorite}
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </Button>
    </Card>
  );
};

export default MovieCard;
