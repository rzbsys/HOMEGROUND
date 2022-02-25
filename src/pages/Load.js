import React from "react";
import "styles/Loading.scss";
import Logo from "images/logo300.png";
import { TeamName } from "Config";

function Loading({LoadingRef}) {
    return (
        <div className="Loading" ref={LoadingRef}>
            <div className="BounceEffect">
                <img src={Logo} alt="Logo" />
            </div>
            <h1>투렌드</h1>
            <p style={{color:"#A9A9A9", fontSize:"20px"}}>{TeamName}</p>
        </div>
    )
}

export default Loading;