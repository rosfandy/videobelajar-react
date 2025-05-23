import axios from "axios";

const _URL = "https://678e5c09a64c82aeb12019cb.mockapi.io/api/v1"

export const PostRequest = async (path: string, data: any) => {
    try {
        const response = await axios.post(_URL + path, data, {
            headers: {
                "Content-Type": "application/json",
            },
            maxBodyLength: Infinity,
        });

        return response;
    } catch (error: any) {
        return error
    }
};

export const PutRequest = async (path: string, data: any) => {
    try {
        const response = await axios.put(_URL + path, data, {
            headers: {
                "Content-Type": "application/json",
            },
            maxBodyLength: Infinity,
        });

        return response;
    } catch (error: any) {
        return error
    }
};

export const DeleteRequest = async (path: string) => {
    try {
        const response = await axios.delete(_URL + path, {
            headers: {
                "Content-Type": "application/json",
            },
            maxBodyLength: Infinity,
        });

        return response;
    } catch (error: any) {
        return error
    }
};


export const GetRequest = async (path: string, token?: string) => {
    try {
        const response = await axios.get(_URL + path, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            maxBodyLength: Infinity,
        });

        return response;
    } catch (error: any) {
        return error
    }
}