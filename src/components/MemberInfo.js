import React, { useEffect, useState } from "react";
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
                {data["Image"]
                    ? <img src={`https://cdn.jsdelivr.net/gh/zawook/hgweb@master/PeridotStudio/MemberImage/${data["Image"].replaceAll(" ", "%20")}`} alt="" onError={(e) => { e.target.src = ErrImage; e.target.style["marginTop"] = "0px"; }} />
                    : <img src={ErrImage} alt="" style={{ marginTop: "0px" }} />
                }            
            </div>
            <div className="MemberText">
                <h4 className="w_2">{data["Position"]}</h4>
                <h1>{data["Name"]}</h1>
            </div>
        </div>
    )
}


function MemberInfo({ SetMemberModalInfo, SetIsMemberModalOpen, GetMemberInfo }) {

    const [ViewPart, SetViewPart] = useState(0);
    const [MemberList, SetMemberList] = useState();
    const [SelectorNames, SetSelectorNames] = useState([]);
    const [IsLoading, SetIsLoading] = useState(true);
    async function GetMemberInfoAsync() {
        const Res = await GetMemberInfo();
        var keys = [];
        var values = [];
        for (var key in Res) {
            keys.push(key);
            values.push(Res[key]);
        }
        SetSelectorNames(keys);
        SetMemberList(values);
        SetIsLoading(false);
    }

    useEffect(() => {
        GetMemberInfoAsync();
    }, []);

    return (
        <>
            <Title KorTitle="팀원 소개" EngTitle="Member Infomation"></Title>
            {!IsLoading
                ? <>
                    <div className="MemberInfoGrid" style={{marginTop:"80px"}}>
                        {MemberList[ViewPart].map((data, index) => {
                            return (
                                <Member key={ViewPart + index} data={data} SetMemberModalInfo={SetMemberModalInfo} SetIsMemberModalOpen={SetIsMemberModalOpen}></Member>
                            )
                        })}
                    </div>
                </>
                : <h1>로딩중</h1>
            }


        </>
    )
}

export default MemberInfo;