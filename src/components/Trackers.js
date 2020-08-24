import React from "react"

function Trackers(props) {
    return(
        <div className="other">
            <img className="small-div" src={props.tracker.src} alt="Fitbit Tracker" />
            
            <div className="name">
                <h3>{props.tracker.title}</h3>
            </div>
            <div className="price">
                <span>{props.tracker.price}</span>
            </div>

        </div>
    )
}

export default Trackers