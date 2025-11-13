import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar";
import "../static/css/HomePage.css";

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites.movies);

  return (
    <>
    <Navbar/>
     <div style={{ padding: 20 }}>
      <h2 style={{ color: "white" }}>❤️ Your Favorites</h2>
      <div className="movies-grid">
        {favorites.length > 0 ? (
          favorites.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        ) : (
          <p style={{ color: "gray" }}>No favorites yet!</p>
        )}
      </div>
    </div>
    </>
  );
};

export default FavoritesPage;
