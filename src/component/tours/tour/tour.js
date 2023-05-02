import React, { useState } from "react";
import "./tour.css";

function Tour(props) {
    const { tour } = props;
    const [showFullInfo, setShowFullInfo] = useState(false);

    const toggleInfo = () => {
        setShowFullInfo(!showFullInfo);
    }

    const infoPreview = tour.info.slice(0, 235);

    return (
        <div className="tour-display" onClick={toggleInfo}>
            <p>{tour.name}</p>
            <img src={tour.image} alt={tour.name} />
            <section>
                <p>{showFullInfo ? tour.info : infoPreview}</p>
                {!showFullInfo && tour.info.length > 200 && (
                    <button onClick={toggleInfo}>See More</button>
                )}
            </section>
            <hr />
        </div>
    );
}

export default Tour;
