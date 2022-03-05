import React from "react";
import "styles/Footer.scss";
import HomegroundLogo from "images/homeground.svg";
import ProfileLogo from "images/war.png";

function Footer() {
    return (
        <>
            <div className="Footer">
                <img src={HomegroundLogo} alt="" />
                <div>
                    <h3>성남 홈그라운드</h3>
                    <h4>주소 : 경기도 성남시 중원구 산성대로 578 4층, 5층 홈그라운드</h4>
                    <h4>사업자등록번호 : 788-23-00910 </h4>
                    <h4>전화번호 : 010-6475-0221</h4>
                    <h4>이메일 : zawookmist@gmail.com</h4>
                </div>
            </div>

            <div className="Footer">
                <img src={ProfileLogo} alt="" />
                <div>
                    <h3>전민국</h3>
                    <h4>이메일 : resrzbsys@gmail.com</h4>
                    <h4>학교 : 대전대신고등학교</h4>
                    <h4><a href="https://github.com/rzbsys">Github 바로가기</a></h4>
                </div>
            </div>

        </>
    )
}

export default Footer;