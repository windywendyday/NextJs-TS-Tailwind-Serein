import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

const instance = axios.create({
    baseURL: "https://49.234.181.165:5001",
    timeout: 5000,
})

instance.interceptors.request.use(
    config => config,
    error => Promise.reject(error),
)

instance.interceptors.response.use(
    (res) => {
        if (!res || !res.data) {
            return Promise.reject(new Error("Invalid response format"));
        }
        return res;
    },
    error => Promise.reject(error),
)

export default instance;