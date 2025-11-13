import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../api/service";
import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import "../static/css/HomePage.css";

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("mean");

  const { data = {}, isLoading, refetch } = useQuery({
    queryKey: ["movies", searchTerm],
    queryFn: () => fetchMovies(searchTerm),
    enabled: false,
  });

  const movies = data.movies || [];
  const error = data.error;

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      refetch();
    }
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchTerm.trim() !== "") {
        refetch();
      }
    }, 500);

    return () => clearTimeout(handler);
  }, [searchTerm, refetch]);

  return (
    <>
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      <div className="homepage-container">
        {isLoading ? (
          <p className="loading-text">Loading...</p>
        ) : error ? (
          <h3 className="loading-text">{error}</h3>
        ) : movies.length === 0 ? (
          <h3 className="loading-text">No Results found!</h3>
        ) : (
          <>
          <div className="homepage-title">
            <h3>Now Streaming!</h3>
          </div>
            <div className="movies-grid">
              {movies.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
              ))}
            </div>
          </>
        )}
      </div>
      <Footer/>
    </>
  );
}

export default HomePage;
