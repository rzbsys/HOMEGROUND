import React, { useEffect, useState } from "react";
import Title from "components/Title";
import "styles/Activities.scss";

// 리덕스 쓸걸..
function Video({ info, SetIsModelOpen, SetModalInfo }) {
    const Title = info.snippet.title.replaceAll("&amp;", "&").replaceAll("&quot;", '"')
    const UploadTime = info.snippet.publishTime
    const Description = info.snippet.description
    const ID = info.snippet.thumbnails.high.url.split("/")[4]
    
    function VideoOnClick() {
        SetModalInfo([Title, UploadTime, Description, ID]);
        SetIsModelOpen(true);
    }

    return (
        <div className="VideoFrame" onClick={VideoOnClick}>
            <div className="Video">
                <img src={info.snippet.thumbnails.high.url} alt="" />
            </div>
            <h1>{Title}</h1>
            <p>{UploadTime}</p>
        </div>
    )
}

function LoadVideo() {
    return (
        <>
            <div className="VideoFrame" style={{gridRowStart:"0"}}>
                <div className="LoadVideo"></div>
            </div>
            <div className="VideoFrame Hide-mobile" style={{gridRowStart:"0"}}>
                <div className="LoadVideo"></div>
            </div>
            <div className="VideoFrame Hide-tablet" style={{gridRowStart:"0"}}>
                <div className="LoadVideo"></div>
            </div>
        </>
    )
}

function Activities({ GetYoutubeVideos, SetIsModelOpen, SetModalInfo }) {
    const [Page, SetPage] = useState(0);
    const [NextPageToken, SetNextPageToken] = useState();
    const [VideoData, SetVideoData] = useState([]);
    const [Load, SetLoad] = useState(true);

    const VideoControllFunction = async function () {
        const Res = await GetYoutubeVideos(NextPageToken);

        SetNextPageToken(Res.PageToken);
        SetVideoData([...VideoData, ...Res.item]);
        SetLoad(false);
    }

    useEffect(() => {
        VideoControllFunction();
    }, [Page]);

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
                    && <button className="VideoExtendButton w_4" onClick={() => { SetPage(Page + 1); SetLoad(true); }}>더보기</button>
                }
            </div>
        </>
    )
}

export default Activities;