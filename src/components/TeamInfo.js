import React from "react";
import Title from "components/Title";
import "styles/TeamInfo.scss";
import Logo from "images/logo300.png";
import Youtube from "images/youtube.png";


function TeamInfo() {
    return (
        <>
            <Title KorTitle="팀 소개" EngTitle="Team Infomation"></Title>
            <div className="TeamInfoFrame">
                <div className="TeamInfoLogo">
                    <img src={Logo} alt="Logo" height="250px" />
                    <h1>레인 스튜디오</h1>
                    <h2 className="w_2">Rain Studio</h2>
                </div>

                <div className="TeamInfoText">
                    <h1>라디오드라마를 제작하며,<br /><span className="HighLight">‘성우’</span>를 양성하는 곳.</h1>
                    <div className="TagBox">
                        <div className="Tag">#Youtube</div>
                        <div className="Tag">#행사</div>
                        <div className="Tag">#강좌</div>
                    </div>
                    <div className="Youtube" onClick={() => {window.open("https://www.youtube.com/channel/UChAQLKsbqUGwdFbhBe2C7qg", "_blank")}}>
                        <img src={Youtube} alt="Youtube" height="50px" />
                        <h4>유튜브 바로가기</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamInfo;