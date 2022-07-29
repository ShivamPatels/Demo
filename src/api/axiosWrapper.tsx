import axios from "axios";

import Urls from "./urls";

const getAxiosInstance = () => {
    return axios.create({
        baseURL: Urls.BASE_URL,
        timeout: 10000,
    });
};

export default getAxiosInstance;
