import axios from "axios";

const _URL = "https://api.escuelajs.co/api/v1"

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