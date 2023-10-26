import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

/* 
  Created Instance of Axios with Base url
*/

const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;