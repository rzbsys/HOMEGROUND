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
import MemberModal from "components/MemberModal";

import "styles/Animation.scss";
import { AnimationOnScroll } from 'react-animation-on-scroll';

import GetYoutubeVideos from "apis/YoutubeAPI";
import ImageList from "apis/PictureAPI";
import GetMemberInfo from "apis/MemberAPI";


function PeridotStudio() {
    const [IsModelOpen, SetIsModelOpen] = useState(false);
    const [VideoModalInfo, SetModalInfo] = useState([]);
    const [MemberModalInfo, SetMemberModalInfo] = useState([]);
    const [IsMemberModalOpen, SetIsMemberModalOpen] = useState(false);
    return (
        <>
            <NavBar></NavBar>
            <AnimationOnScroll animateIn="fadeInDown" offset={50} delay={1000} animateOnce >
                <TopBackground ImageList={ImageList}></TopBackground>
            </AnimationOnScroll>



            <Section>
                <AnimationOnScroll animateIn="fadeInDown" offset={50} >
                    <h1 className="w_4" style={{ color: "#ADDDC5" }}>안녕하세요.</h1>
                </AnimationOnScroll>

                <AnimationOnScroll animateIn="fadeInDown" offset={50} delay={200} >
                    <h1 className="w_4" style={{ color: "#85DFB2" }}>레인 스튜디오입니다.</h1>
                </AnimationOnScroll>

                <AnimationOnScroll animateIn="fadeInDown" offset={50} delay={400} >
                    <h1 className="w_4" style={{ color: "#40CD85" }}>스크롤하여 정보를 확인해보세요!</h1>
                </AnimationOnScroll>

            </Section>

            <AnimationOnScroll animateIn="fadeInDown" offset={100}>
                <TeamInfo></TeamInfo>
            </AnimationOnScroll>
            <hr />

            <AnimationOnScroll animateIn="fadeInDown" offset={100}>
                <MemberInfo GetMemberInfo={GetMemberInfo} SetIsMemberModalOpen={SetIsMemberModalOpen} SetMemberModalInfo={SetMemberModalInfo}></MemberInfo>
            </AnimationOnScroll>
            
            <hr />
            <AnimationOnScroll animateIn="fadeInDown" offset={100}>
                <Activities SetIsModelOpen={SetIsModelOpen} SetModalInfo={SetModalInfo} GetYoutubeVideos={GetYoutubeVideos}></Activities>
            </AnimationOnScroll>
            
            <hr />
            <AnimationOnScroll animateIn="fadeInDown" offset={100}>
                <Contact></Contact>
            </AnimationOnScroll>
            
            <Footer></Footer>
            {IsModelOpen
                && <YoutubeModal SetIsModelOpen={SetIsModelOpen} VideoModalInfo={VideoModalInfo}></YoutubeModal>
            }
            {IsMemberModalOpen
                && <MemberModal SetIsMemberModalOpen={SetIsMemberModalOpen} MemberModalInfo={MemberModalInfo}></MemberModal>
            }
        </>
    )
}

export default PeridotStudio;