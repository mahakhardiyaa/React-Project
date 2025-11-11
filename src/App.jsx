import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/Favorites';
import './index.css'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="/favorites" element={ <FavoritesPage/> }/>
      </Routes>
    </Router>
    </>
    
  );
}

export default App;
