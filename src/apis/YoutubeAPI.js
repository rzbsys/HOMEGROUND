import axios from "axios";

// const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const API_KEY = "AIzaSyDWjn61PhRZTszuTLRT8jnUp_xwUAkVWeA";
const CHANELL_ID = "UCEkO64sYQRgwhH63HgOxjkw";

async function GetYoutubeVideos(NextPageToken) {
    if (!NextPageToken) {
        NextPageToken = "";
    }
    const Respond = await axios.get(`https://www.googleapis.com/youtube/v3/search?channelId=${CHANELL_ID}&part=snippet&maxResults=6&key=${API_KEY}&order=date&pageToken=${NextPageToken}`);
    return {item:Respond.data.items, PageToken:Respond.data.nextPageToken};
}


export {GetYoutubeVideos};