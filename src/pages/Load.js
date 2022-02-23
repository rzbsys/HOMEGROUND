import React from "react";
import "styles/Loading.scss";
import Logo from "images/logo300.png";

function Loading({LoadingRef}) {
    return (
        <div className="Loading" ref={LoadingRef}>
            <div className="BounceEffect">
                <img src={Logo} alt="Logo" />
            </div>
            <h1>페리도트 스튜디오</h1>
            <p style={{color:"#A9A9A9", fontSize:"20px"}}>Peridot Studio</p>
        </div>
    )
}

export default Loading;