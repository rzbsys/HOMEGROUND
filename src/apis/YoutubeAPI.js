import axios from "axios";
import testres from "./DebugApi";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

async function GetYoutubeVideos(NextPageToken, PlayListID) {

    let qstring = `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${PlayListID}&key=${API_KEY}&part=snippet&maxResults=6`;

    if (NextPageToken) {
        qstring += `&pageToken=${NextPageToken}`;   
    }
    const Respond = await axios.get(qstring);
    return {item:Respond.data.items, PageToken:Respond.data.nextPageToken, MaxPage:parseInt(Respond.data.pageInfo.totalResults / Respond.data.pageInfo.resultsPerPage) + 1};
}


// async function GetYoutubeVideos(NextPageToken, searchQ) {
//     return {item:testres.items, PageToken:testres.nextPageToken};
// }

export default GetYoutubeVideos;