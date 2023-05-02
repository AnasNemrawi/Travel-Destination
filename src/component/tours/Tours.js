
import React from "react";
import "./tours.css";
import Tour from "./tour/tour";

function Tours(props) {
    let { data } = props;
    return (
        <div className="tours">
            {data.map((item) => (
                <Tour key={item.id} tour={item} />
            ))}
        </div>
    );
}

export default Tours;
