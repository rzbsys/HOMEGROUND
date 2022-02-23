import React, { useState } from "react";
import NavBar from "components/NavBar";
import TopBackground from "components/TopBackground";
import Section from "components/Section";
import TeamInfo from "components/TeamInfo";
import MemberInfo from "components/MemberInfo";
import Activities from "components/Activities";
import Footer from "components/Footer";
import Contact from "components/Contact";
import YoutubeModal from "components/YoutubeModal";


import { GetYoutubeVideos } from "apis/YoutubeAPI";
import {ImageList, MemberList, YoutubeLink} from "apis/PeridotStudio";

function PeridotStudio() {
    const [IsModelOpen, SetIsModelOpen] = useState(false);
    const [ModalInfo, SetModalInfo] = useState([]);
    return (
        <>
            <NavBar></NavBar>
            <TopBackground ImageList={ImageList}></TopBackground>
            <Section>
                <h1 className="w_4" style={{color:"#ADDDC5"}}>안녕하세요.</h1>
                <h1 className="w_4" style={{color:"#85DFB2"}}>페리도트 스튜디오입니다.</h1>
                <h1 className="w_4" style={{color:"#40CD85"}}>소개페이지에 오신것을 환영합니다!</h1>
            </Section>
            <TeamInfo YoutubeLink={YoutubeLink}></TeamInfo>
            <hr />
            <MemberInfo MemberList={MemberList}></MemberInfo>
            <hr />
            <Activities SetIsModelOpen={SetIsModelOpen} SetModalInfo={SetModalInfo} GetYoutubeVideos={GetYoutubeVideos}></Activities>
            <hr />
            <Contact></Contact>
            <Footer></Footer>
            {IsModelOpen
                && <YoutubeModal SetIsModelOpen={SetIsModelOpen} ModalInfo={ModalInfo}></YoutubeModal>
            }
        </>
    )
}

export default PeridotStudio;