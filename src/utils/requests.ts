import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

const instance = axios.create({
    baseURL: "http://49.234.181.165:5001/api/v1",
    timeout: 5000,
})

instance.interceptors.request.use(
    config => config,
    error => Promise.reject(error),
)

instance.interceptors.response.use(
    res => res,
    error => Promise.reject(error),
)

export default instance;