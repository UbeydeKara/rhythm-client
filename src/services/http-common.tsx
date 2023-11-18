import axios from "axios";

// Create an axios instance
const AxiosInstance = axios.create({
    baseURL: "http://localhost:8080/api/v1",
    headers: {
        "Content-type": "application/json"
    },
    timeout: 10000,
    timeoutErrorMessage: "The server is not responding."
});

export default AxiosInstance;