import React, { useEffect, useRef, useState } from "react";
import RouterApp from "pages/router";
import Loading from "pages/Load";
import "styles/index.scss";

function App() {
  const LoadingRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      LoadingRef.current.classList.add("LoadingEnd");
      setTimeout(() => {
        LoadingRef.current.style['display'] = "none";
      },300);

      document.body.style.overflow = "auto";
    }, 1000);
  }, []);

  return (
    <>
      <Loading LoadingRef={LoadingRef}></Loading>
      <RouterApp></RouterApp>
    </>
  )
}

export default App;