import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../api/service";
import MovieCard from "../components/MovieCard";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { Input, Button, Menu } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Pagination } from "antd";
import "../static/css/HomePage.css";

function SearchPage() {

  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("mean");
  const [debounced, setDebounced] = useState(searchTerm);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(searchTerm);
      setPage(1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const { data = {}, isFetching } = useQuery({
    queryKey: ["movies", debounced, page],
    queryFn: () => fetchMovies(debounced, page),
    enabled: debounced.trim() !== "",
    staleTime: 5 * 60 * 1000
  });

  const movies = data.movies || [];
  const error = data.error;
  const totalResults = data.totalResults ? Number(data.totalResults) : 0;

  const handlePageChange = (newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = () => {
    setDebounced(searchTerm);
    setPage(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar/>

      <div className="homepage-container">
         <div className="search-container">
          <Input
            placeholder="Search your next blockbuster"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onPressEnter={handleSearch}
            className="search-input"
            onClick={() => navigate("/search")}
          />
          <Button
            type="primary"
            icon={<SearchOutlined />}
            onClick={handleSearch}
            className="search-button"
          >
            Search
          </Button>
        </div>
        {isFetching && <p className="loading-text">Loading...</p>}

        {!isFetching && error && (
          <h3 className="loading-text">{error}</h3>
        )}

        {!isFetching && !error && movies.length === 0 && (
          <h3 className="loading-text">No Results found!</h3>
        )}

        {!isFetching && !error && movies.length > 0 && (
          <>
            <div className="movies-grid">
              {movies.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
              ))}
            </div>

            <div className="custom-pagination">
              <Pagination
                current={page}
                pageSize={10}
                total={totalResults}
                onChange={handlePageChange}
                showSizeChanger={false}
              />
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default SearchPage;
