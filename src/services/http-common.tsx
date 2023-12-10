import axios from "axios";

// Create an axios instance
const AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        "Content-type": "application/json"
    },
    timeout: 30000,
    timeoutErrorMessage: "The server is not responding."
});

export default AxiosInstance;
