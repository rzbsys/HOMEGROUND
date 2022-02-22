import axios from "axios";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const CHANELL_ID = "UCEkO64sYQRgwhH63HgOxjkw";

async function GetYoutubeVideos() {
    const Respond = await axios.get(`https://www.googleapis.com/youtube/v3/search?channelId=${CHANELL_ID}&part=snippet&maxResults=6&key=${API_KEY}`);
    return Respond.data.items;
}


export {GetYoutubeVideos};