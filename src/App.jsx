import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import MovieDetails from './pages/MovieDetails'
import FavoritesPage from './pages/Favorites';
import './static/css/index.css'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="/search" element={ <SearchPage/> }/>
        <Route path="/favorites" element={ <FavoritesPage/> }/>
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
