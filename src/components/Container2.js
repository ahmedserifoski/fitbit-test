import React from "react"

import Versa from "./Versa"
import Ionic from "./Ionic"
import Trackers from "./Trackers"
import SmartScales from "./SmartScales"

import versaData from "./VersaData"
import ionicData from "./IonicData"
import trackersData from "./TrackersData"
import smartScalesData from "./SmartScalesData"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons"
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons"
import { faPinterestSquare } from "@fortawesome/free-brands-svg-icons"
import { faYoutubeSquare } from "@fortawesome/free-brands-svg-icons"


function Container2(props) {

    const versaComponents = versaData.map(versa => <Versa key={versa.id} versa={versa}/>)

    const ionicComponents = ionicData.map(io => <Ionic key={io.id} io={io} />)

    const trackerComponents = trackersData.map(tracker => <Trackers key={tracker.id} tracker={tracker}/>)

    const smartScaleComponents = smartScalesData.map(scale => <SmartScales key={scale.id} scale={scale}/>)

    return(
        <div className="container2">

            <p className="from-smartwatches">From smartwatches and trackers to accessories and more, everything you need to find your fit is right here.</p>
            <h1 className="smartwatches">Smartwatches</h1>
            
            <h2 id="smartwatches" className="versa-title">Versa Family </h2>
            <div className="versa">
                {versaComponents}
            </div>
            

            <h2 className="ionic-title">Ionic Family</h2>
            <div className="ionic">
            {ionicComponents}
            </div>
            

            <h2 id="trackers" className="trackers-title">Trackers</h2>
            <div className="trackers">
                {trackerComponents}
            </div>

            <h2 id="smart-scales" className="services-title">Services</h2>
            <div className="trackers">

                <div className="other">
                    <img className="small-div" src={require("../Images/services.webp")} alt="Fitbit Ionic" />
                    
                    <div className="name">
                        <h3>Fitbit Premium Membership</h3>
                    </div>
                    <div className="price">
                        <span>$9.95 / mo</span>
                    </div>

                </div>

            </div>

            <h2 className="smart-scales-title">Smart Scales</h2>
            <div className="smart-scales">
                {smartScaleComponents}
                
            </div>

            <div className="model-images">

                <div className="bottom-image1">
                    <p className="image-p">Shop Fitbit Versa Family Woven Reflective Accessory Bands</p>
                </div>
            
                <div className="bottom-image2">
                    <p className="image-p">Shop Fitbit + Kim Shui</p>
                </div>

            </div>

            <div className="footer">
                <div className="contact">

                    <h3 className="get">Get the inside scoop on all things Fitbit.</h3>
                    <input type="email" name="email" className="email" placeholder="Enter your email address" />

                </div>
                
            

                <div className="social">
                    <h3 className="follow get">Follow Us</h3>
                    <div className="icons">

                        
                    <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
                    <FontAwesomeIcon icon={faInstagramSquare} size="lg" />
                    <FontAwesomeIcon icon={faTwitterSquare} size="lg" />
                    <FontAwesomeIcon icon={faPinterestSquare} size="lg" />
                    <FontAwesomeIcon icon={faYoutubeSquare} size="lg" />

                    </div>

                    <div className="language">

                        <img src={require("../Images/USA-flag.png")} alt="USa Flag" />
                        <h4 className="united">United States</h4>
                    </div>

                    
                </div>

                <div className="rights">

                    <p>2020 made by Ahmed Serifoski</p>

                </div>

                
            </div>
            
            

        </div>
    )
}

export default Container2