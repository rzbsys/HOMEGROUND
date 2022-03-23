import React from "react";
import { HashRouter, Routes, Route,  } from "react-router-dom";
import PeridotStudio from "./PeridotStudio";


function RouterApp() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<PeridotStudio></PeridotStudio>} />
            </Routes>
        </HashRouter>
    )
}

export default RouterApp;