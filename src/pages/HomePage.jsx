import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../api/service";
import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar";

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("christmas");

  const { data: movies = [], isLoading, refetch } = useQuery({
    queryKey: ["movies", searchTerm],
    queryFn: () => fetchMovies(searchTerm),
    enabled: false,
  });

  const handleSearch = () => {
    if(searchTerm.trim() !== ""){
            refetch();
        }
    };

  useEffect(()=>{
    const handler = setTimeout(()=>{
        if(searchTerm.trim() !== ""){
            refetch();
        }
    }, 500)

    return ()=> clearTimeout(handler);
  }, [searchTerm, refetch])

  return (
    <>
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      <div style={{ padding: "20px" }}>

        {isLoading ? (
          <p style={{ textAlign: "center", color: "white" }}>
            Loading...</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px"
            }}
          >
            {movies.map((movie, index) => (
              <MovieCard
                key={index}
                movie={movie}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default HomePage;
