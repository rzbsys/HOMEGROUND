import React, { useEffect, useState } from "react";
import Title from "components/Title";
import "styles/Activities.scss";
import Selector from "./Selector";

// 리덕스 쓸걸..
function Video({ info, SetIsModelOpen, SetModalInfo }) {
    const Title = info.snippet.title.replaceAll("&amp;", "&").replaceAll("&quot;", '"');
    const UploadTime = info.snippet.publishedAt;
    const Description = info.snippet.description;
    const ID = info.snippet.resourceId.videoId;
    function VideoOnClick() {
        SetModalInfo([Title, UploadTime, Description, ID]);
        SetIsModelOpen(true);
    }

    return (
        <div className="VideoFrame" onClick={VideoOnClick}>
            <div className="Video">
                {Description !== "This video is private."
                    && <img src={info.snippet.thumbnails.high.url} alt="" />
                }
            </div>
            <h1>{Title}</h1>
            <p>{UploadTime}</p>
        </div>
    )
}

function LoadVideo() {
    return (
        <>
            <div className="VideoFrame LoadVid">
                <div className="LoadVideo"></div>
            </div>
            <div className="VideoFrame Hide-mobile LoadVid">
                <div className="LoadVideo"></div>
            </div>
            <div className="VideoFrame Hide-tablet LoadVid">
                <div className="LoadVideo"></div>
            </div>
        </>
    )
}

function Activities({ GetYoutubeVideos, SetIsModelOpen, SetModalInfo }) {
    const [NextPageToken, SetNextPageToken] = useState();
    const [VideoData, SetVideoData] = useState([]);
    const [Load, SetLoad] = useState(true);
    const [ViewPart, SetViewPart] = useState(0);
    const PlaylistID = { 0: ["UUEkO64sYQRgwhH63HgOxjkw"], 1: ["PLd-EvOMssdSzmCIIOSGIqXP7eUaXoO0G8"], 2: ["PLd-EvOMssdSz0prGqzDY_exMJ2E_CHwFb"], 3: ["PLd-EvOMssdSzAg8Jzm3UhwAQV-xtK58y6"], 4: ["PLd-EvOMssdSz1swFaTQjAtU6yuayjVrt6"], 5: ["PLd-EvOMssdSyPGbl-a3tEuDw2t2MoXSTE"], 6: ["PLd-EvOMssdSyeJ1f6QAY2HYpFzdyY2HHL"] }

    async function VideoControllFunction(init = false) {
        if (init) {
            const Res = await GetYoutubeVideos("", PlaylistID[ViewPart]);
            SetVideoData([...Res.item]);
            SetNextPageToken(Res.PageToken);

        } else {
            const Res = await GetYoutubeVideos(NextPageToken, PlaylistID[ViewPart]);
            SetVideoData([...VideoData, ...Res.item]);
            SetNextPageToken(Res.PageToken);

        }
        SetLoad(false);
    }

    useEffect(() => {
        VideoControllFunction(true);
    }, [ViewPart]);


    return (
        <>
            <Title KorTitle="활동 내용" EngTitle="Activities"></Title>
            <Selector ViewPart={ViewPart} SetViewPart={SetViewPart} names={["전체", "썰툰", "게임&영화 더빙", "애니더빙", "만화&소설더빙", "창작더빙", "기타소식"]} groupname="Activities" center={true}></Selector>
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
                    && <button className="VideoExtendButton w_4" onClick={() => { VideoControllFunction(); SetLoad(true); }}>더보기</button>
                }
            </div>
        </>
    )
}

export default Activities;