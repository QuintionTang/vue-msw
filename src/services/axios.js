import axios from "axios";

const apiClient = axios.create({
    baseURL: "/api",
});

apiClient.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error || error.response);
    }
);

export const getArticle = async (articleId) => {
    const response = await apiClient.get(`/articles/${articleId}`);
    return response;
};
