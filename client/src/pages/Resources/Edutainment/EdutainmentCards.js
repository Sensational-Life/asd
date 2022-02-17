import React from "react";
import ResponsivePlayer from "react-player";
import EdutainmentMenuItems from "./EdutainmentCards.json";
import "./EdutainmentCards.css";

export default function EdutainmentCards() {
    return (
        <div className="edutainment-grid-container">
            <div className="edutainment-wrapper-color"></div>
            <div className="edutainment-main-container">
                {EdutainmentMenuItems.map((item, index) => (
                    <div className="edutainment-grid-item" key={index}>
                        <div className="video-wrapper">
                            <ResponsivePlayer
                                className="player"
                                url={item.link}
                                // playing={true}
                                controls={true}
                                width="100%"
                                height="100%"
                            />
                        </div>
                        <div className="edutainment-card-header">
                            <h4 className="edutainment-video-title">{item.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
