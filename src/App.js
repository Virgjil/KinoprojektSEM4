import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import ImageSlider from "./components/ImageSlider";
import Footer from "./components/Footer";
import Datenschutz from "./pages/Datenschutz"; 
import Impressum from "./pages/Impressum"; 
import UeberUns from "./pages/UeberUns"; 
import Nutzungsbedingungen from "./pages/Nutzungsbedingungen"; 




function App() {

 // var Background = "https://de.freepik.com/vektoren-premium/roter-theater-vorhanghintergrund-theater-oper-oder-kino-hintergrund-der-geschlossenen-szene-realistische-rote-vorhaenge-illustration_5123561.htm"
  return (
    <div
      style={{
        backgroundColor: "black",
        backgroundSize: "auto",
        backgroundAttachment: "fixed",
        //backgroundImage: `url("https://de.freepik.com/vektoren-premium/roter-theater-vorhanghintergrund-theater-oper-oder-kino-hintergrund-der-geschlossenen-szene-realistische-rote-vorhaenge-illustration_5123561.htm")`
      }}
    >
      
      <Router>

      <Link to="/"><h1 className="title ourh1" >Cinema Alibi</h1></Link>
        <Switch>
          <Route path="/" exact component={ImageSlider} />
          <Route exact path="/MovieDetails/:filmID"  
             component={MovieDetails} />
             <Route exact path="/Datenschutz"  
             component={Datenschutz} />
             <Route exact path="/Impressum"  
             component={Impressum} />
             <Route exact path="/Ueber"  
             component={UeberUns} />
             <Route exact path="/Nutzungsbedingungen"  
             component={Nutzungsbedingungen} />
              
        </Switch>
        <Footer/>
        
        </Router>
        
    </div>
  );
}

export default App;