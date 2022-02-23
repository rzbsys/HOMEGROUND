import React, { Fragment, useState } from "react";
import Title from "components/Title";
import "styles/MemberInfo.scss";
import ErrImage from "images/ready.png";

function Member({ data }) {
    return (
        <div className="Member">
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

function RadioButtons({ names, ViewPart }) {
    return (
        <>
            {
                names.map((name, index) => {
                    return (
                        <Fragment key={index}>
                            <input id={name} type="radio" name="membersel" value={index} defaultChecked={ViewPart===index} />
                            <label htmlFor={name} className="MemberSelText w_3">{name}</label>
                        </Fragment>
                    )
                })
            }
        </>
    )
}


function MemberInfo({ MemberList }) {
    const [ViewPart, SetViewPart] = useState(0);

    function ViewPartOnChange(e) {
        SetViewPart(parseInt(e.target.value));
    }

    return (
        <>
            <Title KorTitle="팀원 소개" EngTitle="Member Infomation"></Title>
            <div className="MemberInfoSelector">
                <fieldset onChange={ViewPartOnChange}>
                    <RadioButtons names={["운영진", "트레이너", "성우부", "일러부", "작가/연출부", "작곡/음향부"]} ViewPart={ViewPart}></RadioButtons>
                </fieldset>
            </div>
            <div className="MemberInfoSelectorLeftShadow"></div>
            <div className="MemberInfoSelectorRightShadow"></div>

            <div className="MemberInfoGrid">
                {MemberList[ViewPart].map((data, index) => {
                    return (
                        <Member key={ViewPart+index} data={data}></Member>
                    )
                })}

            </div>
        </>
    )
}

export default MemberInfo;