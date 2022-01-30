import axios from "axios";

const KEY = "AIzaSyAFRxtS74XwBAyr8yvPGODP7XxsOJ2VBAQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
