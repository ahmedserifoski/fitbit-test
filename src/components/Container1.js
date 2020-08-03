import React from "react"

import '../App.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBraille } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';


class Container1 extends React.Component {
    state = {
      menu_class: ""
    }

    setToggleTopMenuClass = () => {
      if (this.state.menu_class === '') {
        this.setState({
          menu_class: 'active',
        })
      } else {
        this.setState({
          menu_class: '',
        })
      }
    }

    // <Link to="/some/path#with-hash-fragment">Link to Hash Fragment</Link>

    render () {
      let top_menu_class = `item ${this.state.menu_class}`
      return(
          <div className="container1">
            <Router>
          <nav>
              <ul className= "menu">
                <li className="logo"><a href="#menu"><FontAwesomeIcon icon={faBraille} size="lg" />fitbit</a></li>
                <li className={top_menu_class}><Link to="#smartwatches">Smartwatches</Link></li>
                <li className={top_menu_class}><Link to="#trackers">Trackers</Link></li>
                <li className={top_menu_class}><Link to="#smart-scales">Services</Link></li>
                <li className="toggle"><a href="#toggle"><FontAwesomeIcon icon={faBars} size="lg" onClick={this.setToggleTopMenuClass}/></a></li>
              </ul>
          </nav>
          </Router>
          <div className="three-watches">

              <h1>Versa family & Ionic</h1><br/>
              <p>Three advanced health & fitness smartwatches.</p><br/>
              <a href="#shop">Shop <FontAwesomeIcon icon={faArrowRight} size="lg" /></a>
          </div>
          
        </div>
      )
    }
    
}

export default Container1