import { Router } from 'express'
import {
    addChat,
    deleteChat,
    editChatById,
    findAllChats,
    findChatById,
} from '../controller/chatController'
const router = Router()

router.get('/:chatId', findChatById)
router.get('/:all', findAllChats)
router.post('/', addChat)
router.put('/:chatId', editChatById)
router.delete('/:chatId', deleteChat)

export default router
