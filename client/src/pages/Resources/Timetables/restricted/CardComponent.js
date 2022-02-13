import React, { useState } from "react";
import Bookmark from "./Bookmark";
import { BsDownload } from "react-icons/bs";

import { Document, Page, pdfjs } from "react-pdf";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import "./CardComponent.css";

export default function CardComponent({ card }) {
    const [pageNumber, setPageNumber] = useState(1);
    pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

    function onDocumentLoadSuccess() {
        setPageNumber(1);
    }

    return (
        <div className="card-container" key={card.id}>
        <div className="card-header">{card.title}</div>
        <div className="card-items">
            <div className="card-description">
                <p>Suitable for age: {card.age}</p>
                <p>Quantity: {card.quontity}</p>
            </div>
            <div className="card-image-container">
                <Document
                    className="card-image"
                    file="./Age 2-4.pdf"
                    renderMode="canvas"
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
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