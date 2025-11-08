export const fetchMovies = async (searchTerm) => {
  const apiKey = "a1a34ae5";
  const res = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`);
  const data = await res.json();
  // console.log(res);
  console.log("API Response:", data);
  return data.Search || [];
};
