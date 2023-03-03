import axios from "axios";

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
  timeout: 20000,
});

export default httpClient;
