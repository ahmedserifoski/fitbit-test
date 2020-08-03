import React from "react"

function SmartScales(props) {
    return(
        <div id="smart-scales" className="other">
            <img className="small-div" src={props.scale.src} alt="Fitbit Ionic" />
            
            <div className="name">
                <h3>{props.scale.title}</h3>
            </div>
            <div className="price">
                <span>{props.scale.price}</span>
            </div>

        </div>
    )
}

export default SmartScales