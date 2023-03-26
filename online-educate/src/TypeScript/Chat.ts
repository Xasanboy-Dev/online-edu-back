import axios from 'axios'
import { host } from './Auth'
import { PORT } from './Auth'

export async function getChatByID(ids: number[], token: string) {
    try {
        const result = await axios.post(
            `http://${host}:${PORT}/user/chattingUsers`,
            { chattingUsers: ids },
            { headers: { Authorization: token } }
        )
        return result.data.users
    } catch (error: any) {
        return false
    }
}
