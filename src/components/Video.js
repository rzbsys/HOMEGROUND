import React from "react";

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



export default Video;
export {LoadVideo};