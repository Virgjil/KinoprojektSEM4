import React, { Component } from "react";
import "../style.css";
import ReactPlayer from "react-player";

// this.props.match.params.title

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      videos: [],
      isLoaded: false,
    };
  }

  async componentDidMount() {
    this._isMounted = true;
    if (this._isMounted) {
      //GET
      const url = `https://api.themoviedb.org/3/movie/${this.props.match.params.filmID}?api_key=378f51590133f0544713171eead446bf`;
      const url2 =
        `https://api.themoviedb.org/3/movie/${this.props.match.params.filmID}/videos?api_key=378f51590133f0544713171eead446bf`;
      const response = await fetch(url);
      const response2 = await fetch(url2);
      const data = await response.json();
      const data2 = await response2.json();
      this.setState({
        movie: data,
        videos: data2.results,
      });
      }

    }
  

  render() {
    var { movie, videos } = this.state;
    console.log("Results", videos)

    
    //videos.map(video => 
    //  console.log(video.key))

    //for (let index = 0; index < videos.length; index++) {
   //   const element = videos[index];
   //   console.log(element.key)  
  //  }

    return (
      <div className="background container">
        <div className="row">
          <div style={{margin: "auto"}}>
            <img
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              alt={movie.title}
              style={{ marginTop: "30px", marginBottom: "20px"}}
              width="300"
              height="420"
            />
          </div>
          <div style={{color: "black"}} >
          <div  style={{color: "black"}} className=" ml-4">
            <h1 style={{padingTop: "50px", margin: "auto" }}>FILMDETAILS</h1>
            <p >Titel: {movie.title}</p>
            <p >Overview: {movie.overview} </p>
            <p >Dauer: {movie.runtime}</p>
            <p >Erscheinungsdatum: {movie.release_date}</p>
            <p>Beliebtheit: {movie.popularity} </p>
            <p >Voting:    {movie.vote_average}</p>

            <br />
            <br />
          </div>
         </div> 
          
        </div>
          {videos.map(video => 

              <ReactPlayer
              url={`https://www.youtube.com/watch?v=${video.key}`}
              controls
              playbackRate={1}
              width="1040px"
              height="700px"
              style={{paddingTop: "20px", margin: "auto", textAlign: "center"}}
              />
             
              
          )}

      </div>
      
    );
  }
}

export default MovieDetails;