import axios from "axios";

export default axios.create({
  baseURL: "https://db-server-meshoo.onrender.com/",
  // baseURL: "https://db-server-meshoo.onrender.com/",

  // baseURL:"http://localhost:8000/"
});
