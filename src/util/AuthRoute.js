import axios from "axios";

const axiosWithAuth = () => {
    return axios.create({
        headers: {
            "Content-type": "application/json",
        },
        baseURL: "https://api.github.com",
    })
}

export default axiosWithAuth;