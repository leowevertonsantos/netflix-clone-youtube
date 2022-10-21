import axios from "axios";

export const AxiosHttpClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
