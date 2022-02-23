import axios from "axios";
import testres from "./DebugApi";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

async function GetYoutubeVideos(NextPageToken, PlayListID) {

    let qstring = `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${PlayListID}&key=${API_KEY}&part=snippet&maxResults=6`;

    if (NextPageToken) {
        qstring += `&pageToken=${NextPageToken}`;   
    }
    const Respond = await axios.get(qstring);
    console.log(Respond);
    console.log(qstring);
    return {item:Respond.data.items, PageToken:Respond.data.nextPageToken};
}


// async function GetYoutubeVideos(NextPageToken, searchQ) {
//     return {item:testres.items, PageToken:testres.nextPageToken};
// }

export {GetYoutubeVideos};