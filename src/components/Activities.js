import React from "react";
import Title from "components/Title";
import "styles/Activities.scss";

function Video({ info }) {
    return (
        <div className="VideoFrame">
            <div className="Video">
                <img src={info.snippet.thumbnails.high.url} alt="" />
            </div>
            <h1>{info.snippet.title.replaceAll("amp;", "")}</h1>
            <p>{info.snippet.publishTime}</p>
        </div>
    )
}

function LoadVideo() {
    return (
        <div className="VideoFrame">
            <div className="LoadVideo"></div>
        </div>  
    )
}

function Activities({ data, error, isLoading }) {
    return (
        <>
            <Title KorTitle="활동 내용" EngTitle="Activities"></Title>
            <div className="ActivitiesGrid">
                {isLoading
                    ? <h1>로딩중</h1>
                    : data.map((info, index) => {
                        return (
                            <Video key={index} info={info}></Video>
                        )
                    })
                }

                <LoadVideo></LoadVideo>
                <LoadVideo></LoadVideo>
                <LoadVideo></LoadVideo>
                <div className="VideoShadow"></div>
                <button className="VideoExtendButton w_4">더보기</button>
            </div>
        </>
    )
}

export default Activities;