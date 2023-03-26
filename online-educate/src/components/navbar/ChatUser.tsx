import React, { useContext } from 'react'
import userInfo from '../../mock/UserData'
import { currentUser } from '../../useContext/default'
import { useState } from 'react'
import { useEffect } from 'react'
import { getChatByID } from '../../TypeScript/Chat'
import { useNavigate } from 'react-router-dom'

const ChatUser = (chattingUserId: number) => {
    const navigate = useNavigate()
    const token = localStorage.getItem('allowed?')
    let [userChats, setCHats] = useState<any[]>()
    if (token) {
        const user = useContext(currentUser)
        let chats = user?.connectedChats
        useEffect(() => {
            const result = getChatByID(chats, token)
            result.then((res) => {
                setCHats(res)
            })
        }, [chats])
    } else {
        navigate('/login')
        return
    }
    if (userChats)
        return (
            <div className='w-full  justify-between  items-center text-white   pb-2'>
                {userChats.map((chat) => {
                    return (
                        <>
                            <div className='w-full justify-between border-b-[3px] flex items-center text-white/80'>
                                <div className='flex items-center '>
                                    <img
                                        src={`${chat.imageURL}`}
                                        alt='Your image'
                                        className='rounded-full h-12 m-2'
                                    />
                                    <div className='text-sm'>
                                        <h1 className='text-white/80'>
                                            {chat.name}
                                        </h1>
                                        <p className='text-xs text-white/40'>
                                            {chat.lastMessage}
                                        </p>
                                    </div>
                                </div>
                                <p className='text-white/80 text-xs self-start pt-4'>
                                    {'Mon'}
                                </p>
                            </div>
                        </>
                    )
                })}
            </div>
        )
}

export default ChatUser
