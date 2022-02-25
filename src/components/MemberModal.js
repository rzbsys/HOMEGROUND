import "styles/MemberModal.scss";
import React, { useEffect, useRef, useState } from "react";
import CloseBtn from "images/close.svg";
import GetNotionPage from "apis/NotionAPI";
import { NotionRenderer } from "react-notion";
import 'react-notion/src/styles.css'
import ErrImage from "images/ready.png";


function MemberModal({ SetIsMemberModalOpen, MemberModalInfo }) {
    const ModalRef = useRef();
    const [NotionPage, SetNotionPage] = useState();


    function ModalClose() {
        ModalRef.current.style.overflow = "hidden";
        ModalRef.current.scrollTop = 0;
        ModalRef.current.classList.add("CloseModal");
        document.body.style.overflow = "auto";
        setTimeout(() => {
            SetIsMemberModalOpen(false);
        }, 800);
    }

    async function GetNotion() {
        const Res = await GetNotionPage(MemberModalInfo["NotionPage"]);
        SetNotionPage(Res);
    }

    useEffect(() => {
        document.body.style.overflow = "hidden";
        ModalRef.current.classList.remove("CloseModal");
        ModalRef.current.style.overflow = "auto";

        GetNotion();
    }, []);

    return (
        <div className="YoutubeModal CloseModal" ref={ModalRef}>
            <div className="YoutubeModalClose" onClick={ModalClose}>
                <img src={CloseBtn} alt="CloseBtn" />
            </div>
            <div className="YoutubeVideo MemberProfile" style={{ backgroundColor: MemberModalInfo["Color"] }}>
                {MemberModalInfo["Image"]
                    ? <img src={`https://cdn.jsdelivr.net/gh/zawook/hgweb@master/PeridotStudio/MemberImage/${MemberModalInfo["Image"].replaceAll(" ", "%20")}`} alt="" onError={(e) => { e.target.src = ErrImage; e.target.style["marginTop"] = "0px"; }} />
                    : <img src={ErrImage} alt="" style={{marginTop:"0px"}}/>
                }
            </div>
            <br />
            <div className="YoutubeText MemberModalText">
                <h4 className="UploadDate">{MemberModalInfo["Position"]}</h4>
                <h1>{MemberModalInfo["Name"]}</h1>
                <div className="CustomHR"></div>
                <span className="MemberNotion">
                    {NotionPage
                        ? <NotionRenderer blockMap={NotionPage} darkMode={true}></NotionRenderer>
                        : <>
                            <h1 className="Imoticon">😥</h1>
                            <h3 className="NotionNotFound">노션페이지가 존재하지 않습니다.</h3>
                        </>
                    }
                </span>
            </div>
        </div>
    )
}

export default MemberModal;