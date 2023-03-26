import { Request, Response } from 'express'
import { VerifyToken } from '../database/Auth/token'
import {
    createChat,
    editChat,
    getAllChats,
    getOneChatById,
    removeChat,
} from '../database/chat'
import { chat, Type } from '@prisma/client'

export async function findChatById(req: Request, res: Response) {
    try {
        const token = req.headers.authorization
        const { chatId } = req.params
        if (token && chatId) {
            const ValidateToken = VerifyToken(token)
            const chat = await getOneChatById(+chatId)
            if (chat) {
                return res.status(200).json({ message: 'All right', chat })
            } else {
                return res
                    .status(404)
                    .json({ message: 'Your chat is not exist!' })
            }
        } else {
            return res.status(404).json({ message: 'You must to login!' })
        }
    } catch (error: any) {
        console.log(error.message)
        res.status(500).json({ message: 'Internal error' })
    }
}

export async function findAllChats(req: Request, res: Response) {
    try {
        const token = req.headers.authorization
        const { chatId } = req.params
        if (token && chatId) {
            const ValidateToken = VerifyToken(token)
            const chats = await getAllChats()
            return res.status(200).json({ message: 'All chats', chats })
        } else {
            return res.status(404).json({ message: 'You must to login!' })
        }
    } catch (error: any) {
        console.log(error.message)
        res.status(500).json({ message: 'Internal error' })
    }
}

export async function addChat(req: Request, res: Response) {
    try {
        const token = req.headers.authorization
        const { type }: { type: Type } = req.body
        const { users }: { users: number[] } = req.body
        if (token && type && users) {
            const ValidateToken = VerifyToken(token)
            let createdChat: chat
            if (type == 'group') {
                createdChat = await createChat('group', users)
            } else {
                createdChat = await createChat('chat', users)
            }
            return res.status(201).json({
                message: `${type} has created succesfully`,
                chat: createdChat,
            })
        } else {
            return res
                .status(401)
                .json({ message: 'You must to fill all the gaps!' })
        }
    } catch (error: any) {
        console.log(error.message)
        res.status(500).json({ message: 'Internal error' })
    }
}

export async function editChatById(req: Request, res: Response) {
    try {
        const token = req.headers.authorization
        const { chatId } = req.params
        const { messages, users } = req.body
        if (token && chatId) {
            const ValidateToken = VerifyToken(token)
            const chat = await getOneChatById(+chatId)
            if (chat) {
                let updatedChat: chat = await editChat(
                    messages ? messages : chat.messages,
                    users ? users : chat.users,
                    chat.id
                )
                return res.status(200).json({
                    message: `${chat.type} updated succesfully!`,
                    chat: updatedChat,
                })
            } else {
                return res.status(404).json({ message: 'Chat is not found!' })
            }
        } else {
            return res.status(401).json({ message: 'You must to login!' })
        }
    } catch (error: any) {
        console.log(error.message)
        res.status(500).json({ message: 'Internal error' })
    }
}

export async function deleteChat(req: Request, res: Response) {
    try {
        const token = req.headers.authorization
        const { chatId } = req.params
        if (token && chatId) {
            const ValidateToken = VerifyToken(token)
            const chat = await getOneChatById(+chatId)
            if (chat) {
                const deletedChat = await removeChat(chat.id)
                return res.status(200).json({ message: 'Chat has deleted!' })
            } else {
                return res
                    .status(404)
                    .json({
                        message: 'Your chat is not found! with id ' + chatId,
                    })
            }
        } else {
            return res.status(401).json({ message: 'You must to login!' })
        }
    } catch (error: any) {
        console.log(error.message)
        res.status(500).json({ message: 'Internal error' })
    }
}
