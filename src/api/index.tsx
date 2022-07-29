import getAxiosInstance from "./axiosWrapper";

export const postRequest = (endPoint, data) => {
    const instance = getAxiosInstance();
    return instance
        .post(endPoint, data)
        .then((response) => response.data)
        .catch((e) => {
            throw e;
        });
};
