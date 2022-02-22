import React from "react";
import Title from "components/Title";
import "styles/MemberInfo.scss";
import ErrImage from "images/ready.png";

function Member({ data }) {
    return (
        <div className="Member">
            <div className="MemberProfileImage" style={{ backgroundColor: data["Color"] }}>
                <img src={data["Image"]} alt="이미지 없음" onError={(e) => {e.target.src = ErrImage; e.target.style["marginTop"]="0px";}} />
            </div>
            <div className="MemberText">
                <h4 className="w_2">{data["Position"]}</h4>
                <h1>{data["Name"]}</h1>
            </div>
        </div>
    )
}

function MemberInfo({ MemberList }) {
    return (
        <>
            <Title KorTitle="팀원 소개" EngTitle="Member Infomation"></Title>
            <div className="MemberInfoSelector">

                <input id="운영진" type="radio" name="membersel" value="운영진" />
                <label htmlFor="운영진" className="MemberSelText w_3">운영진</label>

                <input id="트레이너" type="radio" name="membersel" value="트레이너" />
                <label htmlFor="트레이너" className="MemberSelText w_3">트레이너</label>

                <input id="성우부" type="radio" name="membersel" value="성우부" />
                <label htmlFor="성우부" className="MemberSelText w_3">성우부</label>

                <input id="일러부" type="radio" name="membersel" value="일러부" />
                <label htmlFor="일러부" className="MemberSelText w_3">일러부</label>

                <input id="작가/연출부" type="radio" name="membersel" value="작가/연출부" />
                <label htmlFor="작가/연출부" className="MemberSelText w_3">작가/연출부</label>

                <input id="작곡부" type="radio" name="membersel" value="작곡부" />
                <label htmlFor="작곡부" className="MemberSelText w_3">작곡부</label>
            </div>
            <div className="MemberInfoSelectorLeftShadow"></div>
            <div className="MemberInfoSelectorRightShadow"></div>

            <div className="MemberInfoGrid">
                {MemberList.map((data, index) => {
                    return (
                        <Member key={index} data={data}></Member>
                    )
                })}

            </div>
        </>
    )
}

export default MemberInfo;