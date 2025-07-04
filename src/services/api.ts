import axios from "axios";

const _URL = "https://678e5c09a64c82aeb12019cb.mockapi.io/api/v1";

const getHeaders = (token?: string) => ({
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
});

export const GetRequest = async (path: string, token?: string) => {
    try {
        const response = await axios.get(_URL + path, {
            headers: getHeaders(token),
            maxBodyLength: Infinity,
        });
        return response;
    } catch (error: any) {
        return error.response?.data || error.message;
    }
};

export const PostRequest = async (path: string, data: any, token?: string) => {
    try {
        const response = await axios.post(_URL + path, data, {
            headers: getHeaders(token),
            maxBodyLength: Infinity,
        });
        return response;
    } catch (error: any) {
        return error.response?.data || error.message;
    }
};

export const PutRequest = async (path: string, data: any, token?: string) => {
    try {
        const response = await axios.put(_URL + path, data, {
            headers: getHeaders(token),
            maxBodyLength: Infinity,
        });
        return response;
    } catch (error: any) {
        return error.response?.data || error.message;
    }
};

export const DeleteRequest = async (path: string, token?: string) => {
    try {
        const response = await axios.delete(_URL + path, {
            headers: getHeaders(token),
            maxBodyLength: Infinity,
        });
        return response;
    } catch (error: any) {
        return error.response?.data || error.message;
    }
};
