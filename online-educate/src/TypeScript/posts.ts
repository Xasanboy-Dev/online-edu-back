import axios from 'axios'
const host = 'localhost'
const port = 8080

export async function getAllPosts() {
    const allPosts = axios.get(`http://${host}:${port}//`)
}

export async function sendComment(text: string, token: string, userId: number) {
    const result = await axios.post(`http://${host}:${port}/comment`, {
        token,
        ownerId: userId,
        text,
    })
    if (result.status == 201) {
        return true
    } else {
        return false
    }
}
