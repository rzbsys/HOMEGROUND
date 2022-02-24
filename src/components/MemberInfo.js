import React, { Fragment, useState } from "react";
import Title from "components/Title";
import "styles/MemberInfo.scss";
import ErrImage from "images/ready.png";
import Selector from "./Selector";


function Member({ data, SetMemberModalInfo, SetIsMemberModalOpen }) {
    function MemberOnclick() {
        SetIsMemberModalOpen(true);
        SetMemberModalInfo(data);
        
    }
    
    return (
        <div className="Member" onClick={MemberOnclick}>
            <div className="MemberProfileImage" style={{ backgroundColor: data["Color"] }}>
                <img src={data["Image"]} alt="이미지 없음" onError={(e) => { e.target.src = ErrImage; e.target.style["marginTop"] = "0px"; }} />
            </div>
            <div className="MemberText">
                <h4 className="w_2">{data["Position"]}</h4>
                <h1>{data["Name"]}</h1>
            </div>
        </div>
    )
}


function MemberInfo({ MemberList, SetMemberModalInfo, SetIsMemberModalOpen }) {

    const [ViewPart, SetViewPart] = useState(0);
    

    return (
        <>
            <Title KorTitle="팀원 소개" EngTitle="Member Infomation"></Title>

            <Selector ViewPart={ViewPart} SetViewPart={SetViewPart} groupname="MemberInfo" names={["성우부", "운영진", "일러부", "작가연출부", "작곡음향", "트레이너"]}></Selector>
            <div className="MemberInfoGrid">
                {MemberList[ViewPart].map((data, index) => {
                    return (
                        <Member key={ViewPart+index} data={data} SetMemberModalInfo={SetMemberModalInfo} SetIsMemberModalOpen={SetIsMemberModalOpen}></Member>
                    )
                })}

            </div>
        </>
    )
}

export default MemberInfo;