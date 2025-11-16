import { Carousel } from "antd";
import { useNavigate } from "react-router-dom";
import "../static/css/MovieCarousel.css";

const MovieCarousel = () => {

  const navigate = useNavigate();

  return (
    <div className="carousel-wrapper">
      <Carousel autoplay autoplaySpeed={3500} dots={true}>

        <div key={'index'} className="carousel-slide" onClick={()=>{
          navigate("/movie/tt2168910")
        }}>
            <img src={`https://img.airtel.tv/unsafe/fit-in/1600x0/filters:format(webp)/https://xstreamcp-assets-msp.streamready.in/assets/EROSNOW/MOVIE/6822b1121d349f37dad5923a/images/LANDSCAPE_169/Cocktail_1280x720.jpg?o=production`} alt={`Slide ${'index'}`} className="carousel-image" />
          </div>


        <div key={'index'} className="carousel-slide" onClick={()=>{
          navigate("/movie/tt1022603")
        }}>
            <img src={`https://lumiere-a.akamaihd.net/v1/images/500days_coverart_1600x686_2933cf4b.jpeg?region=0,0,1600,686&width=960`} alt={`Slide ${'index'}`} className="carousel-image" />
          </div>

          <div key={'index'} className="carousel-slide" onClick={()=>{
          navigate("/movie/tt1130884")
        }}>
            <img src={`https://images2.alphacoders.com/127/1279480.jpg`} alt={`Slide ${'index'}`} className="carousel-image" />
          </div>

          <div key={'index'} className="carousel-slide" onClick={()=>{
          navigate("/movie/tt1288558")
        }}>
            <img src={`https://v3img.voot.com/v3Storage/assets/16x9-1702285094448.jpg`} alt={`Slide ${'index'}`} className="carousel-image" />
          </div>

          
      </Carousel>
    </div>
  );
};

export default MovieCarousel;
