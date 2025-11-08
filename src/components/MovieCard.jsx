import { Card, Button } from "antd"; 
import "../index.css"; 

const MovieCard = ({ movie }) => {
  return (
    <Card 
      className="custom-card" 
      style={{ 
        width: 280, 
        margin: "10px auto", 
        fontFamily: "Sans-serif", 
        backgroundColor: "black", 
        color: "white" 
      }}
      cover={

        movie.Poster && movie.Poster !== "N/A" ? (
          <img 
            alt={movie.Title} 
            src={movie.Poster} 
            style={{ height: 400, objectFit: "cover" }} 
          />
        ) : (
          <div 
            style={{ 
              height: 300, 
              background: "#f0f0f0", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center" 
            }}
          >
            No Image
          </div>
        )
      }
    >
      <h3>{movie.Title || "No Title"}</h3>
      <p>Year: {movie.Year || "N/A"}</p>
      
      <Button 
        type="default" 
        block 
        onClick={() => alert(`Added ${movie.Title} to favorites`)}
      >
        Add to Favorites
      </Button>
    </Card>
  );
};

export default MovieCard;
