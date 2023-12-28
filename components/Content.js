import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"; // Import the correct icon



export default function Content(props) {
    return (
        <div className="content">
            <img src={props.img} className="photo" alt={`photo of ${props.destination}`}></img>
            <div className="text">
                <div className="location">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p className="nation">{props.nation.toUpperCase()}</p>
                    <a href={props.map} className="google-map" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                </div>
                <h1 className="destination">{props.destination}</h1>
                <p className="time">{`${props.startTime} - ${props.endTime}`}</p>
                <p className="main-text">{props.description}</p>
            </div>
        </div>
    );
}