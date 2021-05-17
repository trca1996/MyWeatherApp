import axios from "axios";

const api = axios.create({
  baseURL: "https://mycorsproxy-it.herokuapp.com/https://www.metaweather.com",
});

export default api;
