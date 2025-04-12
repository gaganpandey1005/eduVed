import axios from "axios";

const apirequest = axios.create({
  baseURL: "https://eduved-backend-tpos.onrender.com/api",
  withCredentials: true,
});
export default apirequest;
