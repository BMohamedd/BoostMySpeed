import axios from "axios";

<<<<<<< HEAD
const mobileUrl =
  "https://pagespeedonline.googleapis.com/pagespeedonline/v5/runPagespeed?key=AIzaSyBF4t5ZpUfX5g82nb7zpEYX1KOP4j3liCI&category=ACCESSIBILITY&category=BEST_PRACTICES&category=PERFORMANCE&category=SEO&strategy=MOBILE&url=";
const disktopUrl =
  "https://pagespeedonline.googleapis.com/pagespeedonline/v5/runPagespeed?key=AIzaSyBF4t5ZpUfX5g82nb7zpEYX1KOP4j3liCI&category=ACCESSIBILITY&category=BEST_PRACTICES&category=PERFORMANCE&category=SEO&strategy=DESKTOP&url=";
=======
const backEndUrl = "https://speed-speed-speed.herokuapp.com/report?url=";
>>>>>>> 5486a3e46dc238a88169a96fd6f8a2a2ab9d6e5e

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
  return axios.get(mobileUrl + url);
};
export const requestAnalizeDesktop = (url) => {
  return axios.get(disktopUrl + url);
};
