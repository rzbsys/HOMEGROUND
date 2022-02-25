import React from "react";
import "styles/Title.scss";
import SepImage from "images/Polygon.svg";

function SectionTitle({KorTitle, EngTitle}) {
    return (
        <div className="SectionTitle" id={EngTitle.replaceAll(" ", "")}>
            <img src={SepImage} alt="별별" height="100%"/>
            <div className="SectionTitleText">
                <h1>{KorTitle}</h1>
                <h5 className="w_2">{EngTitle}</h5>
            </div>
            <img src={SepImage} alt="별별" height="100%"/>
        </div>
    )
}

export default SectionTitle;