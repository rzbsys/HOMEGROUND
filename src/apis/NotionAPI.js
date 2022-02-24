import axios from "axios";
const BaseURL = "https://notion-api.splitbee.io/v1/page/";

async function GetNotionPage(PageCode) {
    var qstring = BaseURL + PageCode;
    const Res = await axios.get(qstring);
    return Res.data;
}

export default GetNotionPage;