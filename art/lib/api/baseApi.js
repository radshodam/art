import axios from "axios";
import { ART_SERVER } from "lib/constant/servers";

const baseAPI = axios.create({
  baseURL: ART_SERVER,
  headers: {
    "Content-Type": "application/json",
  },
});

baseAPI.interceptors.request.use((config) => {
  response => response,
  error => {
    console.log("Error", error);
    return Promise.reject(error);
  }
});


export default baseAPI;
