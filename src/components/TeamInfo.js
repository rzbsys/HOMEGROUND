import React from "react";
import Title from "components/Title";
import "styles/TeamInfo.scss";
import Logo from "images/logo300.png";
import Youtube from "images/youtube.png";
import { TeamName, YoutubeLink } from "Config";

function TeamInfo() {
    return (
        <>
            <Title KorTitle="팀 소개" EngTitle="Team Infomation"></Title>
            <div className="TeamInfoFrame">
                <div className="TeamInfoLogo">
                    <img src={Logo} alt="Logo" height="250px" />
                    <h1>투렌드</h1>
                    <h2 className="w_2">{TeamName}</h2>
                </div>

                <div className="TeamInfoText">
                    <h1>고등학생 두명의 크리에이터 팀,<br/><span className="HighLight">신박함, 도전, 재미</span>를 키워드로<br/>한 영상을 업로드한다</h1>
                    <div className="TagBox">
                        <div className="Tag">#동아리</div>
                        <div className="Tag">#Youtube</div>
                        <div className="Tag">#스튜디오</div>
                        <div className="Tag">#온라인</div>
                    </div>
                    <div className="Youtube" onClick={() => {window.open(YoutubeLink, "_blank")}}>
                        <img src={Youtube} alt="Youtube" height="50px" />
                        <h4>유튜브 바로가기</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamInfo;