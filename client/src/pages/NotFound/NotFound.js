import React, { useLayoutEffect } from "react";
import "./NotFound.css";

const NotFound = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div className="not-found-container">
            <h1 className="not-found-message">
                404
            </h1>
            <h1 className="not-found-message">
                Requested page was not found
            </h1>
            <p className="not-found-emoji">&#129322;</p>
        </div>
    );
};

export default NotFound;