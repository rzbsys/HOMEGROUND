import React from "react";
import { HashRouter, Routes, Route,  } from "react-router-dom";
import PeridotStudio from "./PeridotStudio";


function RouterApp() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<PeridotStudio></PeridotStudio>} />
                <Route path="/about" element={<h1>아니 점 돼라고 ㅁㅊ럼아</h1>}/>
            </Routes>
        </HashRouter>
    )
}

export default RouterApp;