import axios from "axios"
import { useContext } from "react"
import { HostContext } from "../useContext/default"
const host = useContext(HostContext)
const PORT = 8080
export async function RegisterAuth(name: string, lastname: string, password: string, phoneNumber: string) {
    if (name && lastname && password && phoneNumber && name.length >= 3 && lastname.length >= 3 && password.length >= 6 && phoneNumber.includes("+998")) {
        const result = await axios.post(`http://${host}:${PORT}/user/register`, { name, lastname, phoneNumber, password })
        console.log(result.data)
    } else {
        return false
    }
}

export async function LoginAuth(phoneNumber: string, password: string) {
    if (phoneNumber && password) {

    } else {
        return false
    }
}