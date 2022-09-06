import { useEffect, useState } from "react";
import axios from "axios";

export const useRequestData = (url) => {
    let [data, setData] = useState(undefined)
    let [isLoading, setIsLoading] = useState(undefined)
    let [errorMsg, setErrorMsg] = useState(undefined)

    useEffect(() => {
        setIsLoading(true)
        axios.get(url).then(response => {
            setIsLoading(false)
            setData(response.data.trips)
        }).catch(error => {
            setIsLoading(false)
            setErrorMsg(error.message)
        })
    }, [url])

    return [data,isLoading,errorMsg]
}

export default useRequestData