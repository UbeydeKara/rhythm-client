import axios from "axios";

// Create an axios instance
const AxiosInstance = axios.create({
    baseURL: "http://rhythm-LoadB-pcEKm8BIxs6R-799131672f5eb9fa.elb.eu-north-1.amazonaws.com:8080/api/v1",
    headers: {
        "Content-type": "application/json"
    },
    timeout: 10000,
    timeoutErrorMessage: "The server is not responding."
});

export default AxiosInstance;