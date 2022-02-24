import React, { useEffect, useRef } from "react";
import "styles/YoutubeModal.scss";
import CloseBtn from "images/close.svg";

function YoutubeModal({SetIsModelOpen, VideoModalInfo}) {
    const ModalRef = useRef();
    function ModalClose() {
        ModalRef.current.style.overflow = "hidden";
        ModalRef.current.scrollTop = 0;
        ModalRef.current.classList.add("CloseModal");
        document.body.style.overflow = "auto";

        setTimeout(() => {
            SetIsModelOpen(false);
        }, 800);
    }

    useEffect(() => {
        document.body.style.overflow = "hidden";
        ModalRef.current.classList.remove("CloseModal");
        ModalRef.current.style.overflow = "auto";
    }, []);

    return (
        <div className="YoutubeModal CloseModal" ref={ModalRef}>
            <div className="YoutubeModalClose" onClick={ModalClose}>
                <img src={CloseBtn} alt="CloseBtn" />
            </div>
            <div className="YoutubeVideo">
                <iframe src={`https://www.youtube-nocookie.com/embed/${VideoModalInfo[3]}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <br />
            <div className="YoutubeText">
                <h1>{VideoModalInfo[0]}</h1>
                <div className="CustomHR"></div>
                <h4 className="UploadDate">{VideoModalInfo[1]}</h4>
                <p>{VideoModalInfo[2]}</p>
            </div>
        </div>
    )
}

export default YoutubeModal;