import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuthenticated = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (token === null) {
            navigate("/login")
        }
    }, [navigate])
}

export default useAuthenticated