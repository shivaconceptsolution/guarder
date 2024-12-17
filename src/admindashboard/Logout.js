import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
export default function Logout()
{
    const navigate = useNavigate(undefined)
    useEffect(()=>{
        localStorage.removeItem("loggedin")
        navigate("/login")
    },[]);

    return(<div>

    </div>)
}