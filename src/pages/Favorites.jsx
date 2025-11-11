import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites.movies);

  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ color: "white" }}>❤️ Your Favorites</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {favorites.length > 0 ? (
          favorites.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        ) : (
          <p style={{ color: "gray" }}>No favorites yet!</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
