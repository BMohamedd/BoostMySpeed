import axios from "axios";

const backEndUrl = "https://speed-speed-speed.herokuapp.com/report?url=";

export const finalUrlCheck = (url) => {
  // checks if the url exists
  if (!url) {
    return "http://example.com";
  }
  // checks if the url starts with
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return `http://${url}`;
  }
  return url;
};
export const requestAnalize = (url) => {
  return axios.get(backEndUrl + url);
};
