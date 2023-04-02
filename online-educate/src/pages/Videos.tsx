import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import Navbar from '../components/navbar/Navbar'

const Videos = () => {
    let user = {
        name: "Xasanoy",
        lastname: "Abdurasulov",
        photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfAP2jrN8ErgqG6xQbp55uXOUMiYUG1tbQeSDVCVCH9VRIhHlMWXgsD08opCf6NLqdzME&usqp=CAU"
    }
    const [showInput, setShowInput] = useState(false)
    return (
        <div className='bg-black/80 w-full h-full text-white'>
            <div className='w-full'>
                <Navbar />
                <div className='p-2 bg-black/50'>
                    <h1 className='px-2 text-2xl'>
                        <i className="bi bi-camera"></i> Foto/Video
                    </h1>
                    <div className='flex gap-2 items-center text-xl p-2'>
                        <img src={`${user.photoUrl}`} className='w-12 rounded-full' alt="" />
                        <h1>{user.lastname} {user.name}</h1>
                    </div>
                </div>
                <div className='w-full flex max-sm:justify-center sm:justify-around max-sm:gap-12 bg-black/30 items-center p-4'>
                    <h1 className='p-1 text-2xl border border-white px-2 py-2 rounded-full'><i className="bi bi-messenger"></i> Popular Posts</h1>
                    <h1 className='px-6 text-2xl border-x-2 border-white/70  border border-white px-2 py-2 rounded-full'> <i className="bi bi-film"></i> Course lessons</h1>
                    <div className=' text-2xl md:w-36 sm:w-10 max-sm:w-5 max-sm:hidden '>
                        {
                            showInput ?
                                <form onSubmit={() => setShowInput(false)} className='flex gap-2'>
                                    <input className=' bg-transparent rounded-2xl border-2 px-2 max-sm:w-16 text-sm' placeholder='Search.......' type="text" />
                                    <button onClick={() => setShowInput(false)} className='max-sm:hidden px-4 p-1 bg-transparent border-2 rounded'><MdDone /></button>
                                </form>
                                :
                                <button onClick={() => setShowInput(true)} className='px-4 p-1 bg-transparent rounded-2xl border-2'><AiOutlineSearch /></button>
                        }
                    </div>
                </div>
                <div style={{ height: innerHeight }}>
                    <div style={{ height: innerHeight - 350 }}>
                        
                        
                        All videos in here
                    
                    </div>  
                </div>  

            </div>
        </div>
    )
}

export default Videos