import React, { useEffect, useState } from "react";
import Title from "components/Title";
import "styles/Activities.scss";
import Selector from "./Selector";
import Video, {LoadVideo} from "./Video";


function Activities({ GetYoutubeVideos, SetIsModelOpen, SetModalInfo }) {
    const [NowPage, SetNowPage] = useState(1);
    const [NextPageToken, SetNextPageToken] = useState();
    const [VideoData, SetVideoData] = useState([]);
    const [Load, SetLoad] = useState(true);
    const [ViewPart, SetViewPart] = useState(0);
    
    const PlaylistID = { 0: ["UUEkO64sYQRgwhH63HgOxjkw"], 1: ["PLd-EvOMssdSzmCIIOSGIqXP7eUaXoO0G8"], 2: ["PLd-EvOMssdSz0prGqzDY_exMJ2E_CHwFb"], 3: ["PLd-EvOMssdSzAg8Jzm3UhwAQV-xtK58y6"], 4: ["PLd-EvOMssdSz1swFaTQjAtU6yuayjVrt6"], 5: ["PLd-EvOMssdSyPGbl-a3tEuDw2t2MoXSTE"], 6: ["PLd-EvOMssdSyeJ1f6QAY2HYpFzdyY2HHL"] }
    const OptionList = ["전체", "썰툰", "게임&영화 더빙", "애니더빙", "만화&소설더빙", "창작더빙", "기타소식"];

    async function VideoControllFunction(init = false) {
        if (init) {
            await SetNowPage(1);
            const Res = await GetYoutubeVideos("", PlaylistID[ViewPart]);
            SetVideoData([...Res.item]);
            SetNextPageToken(Res.PageToken);
            if (NowPage < Res.MaxPage) {
                SetLoad(false);
            } else {
                SetLoad(true);
            }

        } else {
            await SetNowPage(NowPage + 1);
            const Res = await GetYoutubeVideos(NextPageToken, PlaylistID[ViewPart]);
            SetVideoData([...VideoData, ...Res.item]);
            SetNextPageToken(Res.PageToken);
            if (NowPage < Res.MaxPage) {
                SetLoad(false);
            } else {
                SetLoad(true);
            }
        }
        

    }

    useEffect(() => {
        VideoControllFunction(true);
    }, [ViewPart]);


    return (
        <>
            <Title KorTitle="활동 내용" EngTitle="Activities"></Title>
            <Selector ViewPart={ViewPart} SetViewPart={SetViewPart} names={OptionList} groupname="Activities" center={true}></Selector>
            <div className="ActivitiesGrid">
                {VideoData
                    && VideoData.map((info, index) => {
                        return (
                            <Video SetModalInfo={SetModalInfo} SetIsModelOpen={SetIsModelOpen} key={index} info={info}></Video>
                        )
                    })
                }
                <LoadVideo></LoadVideo>
                <div className="VideoShadow"></div>
                {!Load
                    && <button className="VideoExtendButton w_4" onClick={() => { SetLoad(true); VideoControllFunction(); }}>더보기</button>
                }
            </div>
        </>
    )
}

export default Activities;