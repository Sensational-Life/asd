import React from "react";
import Bookmark from "./Bookmark";
import { BsDownload } from "react-icons/bs";
import "./CardComponent.css";

export default function CardComponent({ card }) {
    return (
        <div className="card-container" key={card.id}>
        <div className="card-header">{card.title}</div>
        <div className="card-items">
            <div className="card-description">
                <p>Suitable for age: {card.age}</p>
                <p>Quantity: {card.quontity}</p>
            </div>
            <div className="card-image-container">
                <img src={card.thumbnail} alt={card.alt} />
            </div>
            <div className="timetable-icon-container">
                <Bookmark card={card} />
                <a href={card.pdflink}>
                    <BsDownload className="timetable-icon-download" />
                </a>
            </div>
        </div>
    </div>
    );
}

export { CardComponent };