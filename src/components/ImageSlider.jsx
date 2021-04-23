import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext} from "pure-react-carousel"; 
import "react-slideshow-image/dist/styles.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Link } from "react-router-dom";

// Examples Slider
// https://express-labs.github.io/pure-react-carousel/
// Check other Examples

class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: [],
      isLoaded: false,
    };
  }
 
  componentDidMount() {     

    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=378f51590133f0544713171eead446bf",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          company: json.results,
        });
        console.log("Results", json.results)
        
      });

      
  }

  render() {
   
    var { company } = this.state;
    console.log(company)

    return (
      <>
        <CarouselProvider
          naturalSlideWidth={320}
          naturalSlideHeight={400}
          totalSlides={8}
          step={1.3333}
          visibleSlides={2}
          isIntrinsicHeight={true}
          infinite
        >
          <div className="container___1Fze8" style={{ marginTop: "7%" }}>
            <div
              className="horizontalSlider__281Ls carouselslider carousel_slider--horizontal"
              aria-live="polite"
              tabIndex="0"
              role="listbox"
            >
              <div className="carousel_slider-tray-wrapper carousel_slider-tray-wrap--horizontal">
                <Slider>
                  {company.map((movie) => (
                    <Slide index={movie.id} key={movie.id}>
                      <div className="container___2072F">
                      <Link to={`/MovieDetails/${movie.id}`}>
                          <img
                            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                            alt={movie.title}
                            width="375px"
                            height="468.75px"
                          />
                        </Link>
                         
                        
                      </div>
                    </Slide>
                  ))}



                </Slider>
                <ButtonBack className="buttonBack___1CZiv" style={{marginTop: "-220px", backgroundColor: "transparent", color: "white", fontWeight: "bold"}}> {"<"}
                         </ButtonBack>
                <ButtonNext className="buttonNext___3qSx2" style={{marginTop: "-220px", backgroundColor: "transparent", color: "white", fontWeight: "bold"}}> {">"} </ButtonNext>
              </div>
            </div>
          </div>
        </CarouselProvider>
      </>
    );
  }
}

export default ImageSlider;