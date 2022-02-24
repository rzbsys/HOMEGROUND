import axios from "axios";
async function GetMemberInfo() {
    const Res = await axios.get("https://cdn.jsdelivr.net/gh/zawook/hgweb@master/PeridotStudio/MemberInfo/Member.json");
    return Res.data;
} 

export default GetMemberInfo;