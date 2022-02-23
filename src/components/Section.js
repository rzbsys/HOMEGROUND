import React from "react";
import "styles/Section.scss";

function Section({ children }) {
    return (<div className="Section" id="Section">
        {children}
    </div>
    )
}

export default Section;