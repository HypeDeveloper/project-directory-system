import { useEffect } from "react"
import { initAxios } from "../functions/axiosPrams"
import axios from "axios"


export function useFetch(options = {
    method: '',
    url: '',
    data: {},
    params: {}
}) {
    const [error, setError] = useState()
    const [loading, setLoading] = useState()
    const [data, setData] = useState()

    useEffect(() => {

        if (options.url) return

        setLoading(true)

        switch (options.method) {
            case 'get-auth':
                AUTH_axiosGET()
            case 'post-auth':
                AUTH_axiosPOST()
            case 'get':
                axiosGET()
            case 'post':
                axiosPOST()
            default:
                axiosGET()
        }
    }, [])


    async function AUTH_axiosGET() {
        await options.axiosAuth().get(options.url, {
            params: options.params
        }).
            then(res => {
                setData(res.data)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    async function AUTH_axiosPOST() {
        await options.axiosAuth().post(options.url, options.data).
            then(res => {
                setData(res.data)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }


    async function axiosGET() {
        await axios.get(options.url, {
            params: options.params
        }).
            then(res => {
                setData(res.data)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }
    async function axiosPOST() {
        await axios.post(options.url, options.data).
            then(res => {
                setData(res.data)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }
    return {error, loading, data}
}

