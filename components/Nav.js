import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
    return (
        <div className="nav">
            <FontAwesomeIcon icon= {faEarthAmericas} className="nav-icon" />
            <p>my travel journal</p>
        </div>
    )
}