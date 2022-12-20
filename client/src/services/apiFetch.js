import axios from "axios";

const BASE_URL = "http://localhost:5000/";

export const baseRequest = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    // headers: {
    //     'Content-type': 'application/json',
    // },
});
