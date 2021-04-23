import React, { Component } from "react";
import { Link } from "react-router-dom";



class Footer extends Component {
    state = {  }
    render() {
        return ( <table  width="1200px" style={{ paddingLeft: "50px", paddingTop: "50px", color: "white", margin: "auto"}}>             
             <tr>
             <td sytle={{marginLeft: "10px"}}>
             <Link to={`/Datenschutz/`}>
                 <h1 className="datens">Datenschutz</h1>
                         
                          
                        </Link>
          
                 </td>      
             <td sytle={{marginLeft: "10px"}}>
             <Link to={`/Nutzungsbedingungen/`}>
                 <h1 ClassName= "nb22">Nutzungsbedingungen</h1>
                         
                         
                        </Link>
                 </td>     
             <td sytle={{marginLeft: "10px"}}>
             <Link to={`/Ueber/`}>
                 <h1 className= "Überuns1">Über uns</h1>
                         
                         
                        </Link>
            
                 </td>                         
            <td sytle={{marginLeft: "10px"}}>
            <Link to={`/Impressum/`}>
                 <h1 className= "impressum">Impressum</h1>
                         
                    
                        </Link>
                </td>
            </tr>
</table>           
        );
    }
}

export default Footer;