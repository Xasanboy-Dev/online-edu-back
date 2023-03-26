import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Chat() {
    const navigate = useNavigate()
    const token = localStorage.getItem('allowed?')
    if (!token) {
        navigate('/login')
        return
    }
  return (
        <div className='chat'>
            <div className='w-full text-'>
                <h1 className='border   border-white '>Hello World</h1>
            </div>
            <div>Hello World</div>
            <div>Hello World</div>
            <div>Hello World</div>
            <div>Hello World</div>
            <div>Hello World</div>
            <div>Hello World</div>
        </div>
    )
}
