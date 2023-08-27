import axios from "axios";
const baseURL = "https://dummyjson.com/";
export default axios.create({
    baseURL,
    // headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Credentials": "true",
    //     "Content-Type": "application/json",
    //     "Accept": "application/json",
    // },
});