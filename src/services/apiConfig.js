import axios from "axios";

let apiUrl;

const apiUrls = {
  production: "https://manfredjoa-plants-api-56ca2fc58166.herokuapp.com/api/",
  development: "https://manfredjoa-plants-api-56ca2fc58166.herokuapp.com/api/",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
