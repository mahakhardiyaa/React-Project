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
      <h2 className="homepage-title">Your personal blockbuster collection🔥</h2>
      <div className="movies-grid">
        {favorites.length > 0 ? (
          favorites.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        ) : (
          <p style={{ color: "gray" }}>Oops… no favorites yet! Let’s fix that❤️</p>
        )}
      </div>
    </div>
    </>
  );
};

export default FavoritesPage;
