import React, { useEffect, useState } from "react";
import Title from "components/Title";
import "styles/Activities.scss";
import Video, {LoadVideo} from "./Video";


function Activities({ GetYoutubeVideos, SetIsModelOpen, SetModalInfo }) {
    const [NowPage, SetNowPage] = useState(1);
    const [NextPageToken, SetNextPageToken] = useState();
    const [VideoData, SetVideoData] = useState([]);
    const [Load, SetLoad] = useState(true);
    const [ViewPart, SetViewPart] = useState(0);
    
    const PlaylistID = { 0: ["UUhAQLKsbqUGwdFbhBe2C7qg"] }

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