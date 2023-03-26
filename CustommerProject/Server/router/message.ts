import { Router } from 'express'
import {
    addMessage,
    deleteMessage,
    editMessage,
    findAllMessages,
    findOneMessageById,
} from '../controller/message'

const router = Router()

router.get('/all', findAllMessages)
router.get('/:messageID', findOneMessageById)
router.post('/', addMessage)
router.put('/', editMessage)
router.delete('/:messageID', deleteMessage)

export default router
