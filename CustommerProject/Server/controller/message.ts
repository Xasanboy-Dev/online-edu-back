import { Request, Response } from 'express'
import { VerifyToken } from '../database/Auth/token'
import {
    createmessage,
    getAllMessages,
    getOneMessageById,
    removeMessageWithId,
    updateMessage,
} from '../database/message'
import { editUser, getOneUserById } from '../database/user'
import { message } from '@prisma/client'
import { getUserById } from './user'

export async function findAllMessages(req: Request, res: Response) {
    try {
        const token = req.headers.authorization
        if (!token) {
            return res.status(401).json({ message: 'You must to login!' })
        } else {
            const ValidateToken = VerifyToken(token)
            const messages = await getAllMessages()
            return res.status(200).json({ message: 'All messages', messages })
        }
    } catch (error: any) {
        console.log(error.message)
        res.status(500).json({ message: 'Internal error' })
    }
}

export async function findOneMessageById(req: Request, res: Response) {
    try {
        const token = req.headers.authorization
        const { messageID } = req.params
        if (!token || !messageID) {
            return res.status(401).json({ message: 'You must to login!' })
        } else {
            const ValidateToken = VerifyToken(token)
            const message = await getOneMessageById(+messageID)
            if (message) {
                return res
                    .status(200)
                    .json({ message: 'All right', text: message })
            } else {
                return res.status(404).json({
                    message: 'Your message is not found with ID ' + messageID,
                })
            }
        }
    } catch (error: any) {
        console.log(error.message)
        res.status(500).json({ message: 'Internal error' })
    }
}

export async function addMessage(req: Request, res: Response) {
    try {
        const token = req.headers.authorization
        const {
            text,
            ownerId,
            recieverId,
        }: {
            text: string
            ownerId: number
            recieverId: number
        } = req.body
        if (!token) {
            return res.status(401).json({ message: 'You must to login!' })
        } else {
            const ValidateToken = VerifyToken(token)
            const owner = await getOneUserById(ownerId)
            const reciever = await getOneUserById(recieverId)
            let createdMessage: message | null
            if (owner && reciever) {
                createdMessage = await createmessage(
                    text,
                    owner.name,
                    owner.id,
                    recieverId,
                    reciever.name
                )
                if (createdMessage) {
                    let messages = owner.messages
                    messages = [...messages, createdMessage.id]
                    let reMessages = reciever.messages
                    reMessages = [...reMessages, createdMessage.id]
                    const updatedUser = await editUser(
                        owner.id,
                        owner.name,
                        owner.lastname,
                        owner.phoneNumber,
                        messages,
                        owner.connectedChats,
                        owner.password,
                        owner.comments,
                        owner.posts
                    )
                    const UpdateRecieverUser = await editUser(
                        reciever.id,
                        reciever.name,
                        reciever.lastname,
                        reciever.phoneNumber,
                        reMessages,
                        reciever.connectedChats,
                        reciever.password,
                        reciever.comments,
                        owner.posts
                    )
                    if (updatedUser && UpdateRecieverUser) {
                        return res.status(201).json({
                            message: 'Your message created succesfully',
                            text: createdMessage,
                        })
                    }
                } else {
                    return res.status(500).json({ message: 'Internal error' })
                }
            }
        }
    } catch (error: any) {
        console.log(error.message)
        res.status(500).json({ message: 'Internal error' })
    }
}

export async function editMessage(req: Request, res: Response) {
    try {
        const token = req.headers.authorization
        const {
            messageID,
            letter,
            ownerID,
            recieverId,
        }: {
            messageID: number
            letter: string
            ownerName: string
            ownerID: number
            recieverId: number
            recieverName: string
        } = req.body
        if (!token) {
            return res.status(401).json({ message: 'You must to login!' })
        } else {
            const message = await getOneMessageById(messageID)
            const owner = await getOneUserById(ownerID)
            const reciever = await getOneUserById(recieverId)
            const ValidateToken = VerifyToken(token)
            if (owner && reciever && ValidateToken && message !== null) {
                const updatedMessage = await updateMessage(
                    message.id,
                    letter ? letter : message.text,
                    owner.name,
                    owner.id,
                    reciever.id,
                    reciever.name
                )
                if (updatedMessage) {
                    return res.status(200).json({
                        message:
                            'Message create dsuccesfully with ID ' + messageID,
                        updatedMessage,
                    })
                } else {
                    return res
                        .status(404)
                        .json({ message: 'You have some probelems!' })
                }
            } else {
                return res.status(500).json({ message: 'Internal error' })
            }
        }
    } catch (error: any) {
        console.log(error.message)
        res.status(500).json({ message: 'Internal error' })
    }
}

export async function deleteMessage(req: Request, res: Response) {
    try {
        const token = req.headers.authorization
        const { messageID } = req.params
        if (!token || !messageID) {
            return res.status(401).json({ message: 'You must to login!' })
        } else {
            const ValidateToken = VerifyToken(token)
            const messageExist = await getOneMessageById(+messageID)
            if (messageExist) {
                const owner = await getOneUserById(messageExist.ownerId)
                const reiever = await getOneUserById(messageExist.reciever!)
                if (owner && reiever) {
                    console.log(messageExist.id)
                    let messages = owner.messages
                    let reMessages = reiever.messages
                    messages.filter((id: number) => {
                        id != messageExist.id
                    })
                    reMessages.filter((id: number) => {
                        id != messageExist.id
                    })
                    const updatedUser = await editUser(
                        owner.id,
                        owner.name,
                        owner.lastname,
                        owner.phoneNumber,
                        messages,
                        owner.connectedChats,
                        owner.password,
                        owner.comments,
                        owner.posts
                    )
                    const recieverUser = await editUser(
                        reiever.id,
                        reiever.name,
                        reiever.lastname,
                        reiever.phoneNumber,
                        reMessages,
                        reiever.connectedChats,
                        reiever.password,
                        reiever.comments,
                        owner.posts
                    )
                    const deletedMessage = await removeMessageWithId(+messageID)
                    if (deletedMessage && recieverUser && updatedUser) {
                        return res.status(200).json({
                            message: 'Deleted succesfully',
                            deletedMessage,
                        })
                    } else {
                        return res.status(404).json({
                            message: 'Owner or Reciever is not exist!',
                        })
                    }
                } else {
                    return res.status(500).json({ message: 'Internal error' })
                }
            } else {
                return res.status(404).json({
                    message: 'You have some problems!',
                })
            }
        }
    } catch (error: any) {
        console.log(error.message)
        res.status(500).json({ message: 'Internal error' })
    }
}
