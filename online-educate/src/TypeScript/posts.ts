import axios from "axios"
const host = "localhost"
const port = 8080

export async function getAllPosts(){
    const allPosts = axios.get(`http://${host}:${port}//`)
}