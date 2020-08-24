import React from "react"



function Versa(props) {
    return(
        <div className="watchesdiv">
            <img className="small-div" src={props.versa.src} alt="Fitbit Versa 2"/>

            <div className="name">
                <h3>{props.versa.title}</h3>
            </div>
            <div className="price">
                <span>{props.versa.price}</span>
            </div>

        </div>
    )
}

export default Versa