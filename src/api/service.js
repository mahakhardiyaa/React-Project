const apiKey = "a1a34ae5";

export async function fetchMovieDetails(id) {
  const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`);
  const data = await res.json();
  console.log(data);
  if (data.Response === "False") throw new Error(data.Error);
  return data;
}

export async function fetchMovies(searchTerm, page = 1) {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}&page=${page}`
  );

  const data = await res.json();

  if (data.Response === "False") {
    return { movies: [], error: data.Error };
  }

  return {
    movies: data.Search,
    totalResults: data.totalResults,
    error: null,
  };
};

