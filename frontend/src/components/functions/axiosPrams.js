import axios from 'axios'

export function initAxios(token) {
    if (!token) {
        return ({
            status: 'Error',
            message: 'no token'
        })
    }

    try {
        let axiosAuth = axios.create({
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return axiosAuth
    }
    catch (err) {
        return err
    }
}


export const axiosAdmin = initAxios(JSON.parse(localStorage.getItem("admin")).token);
export const axiosUser = initAxios(JSON.parse(localStorage.getItem("admin")).token);

const baseURL = 'http://localhost:8080'