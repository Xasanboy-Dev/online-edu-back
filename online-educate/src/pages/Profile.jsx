import React, { useState } from 'react'
import { MdOutlineKeyboardDoubleArrowDown , MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md'

const Profile = () => {
    const [show, setShow] = useState(false)
    const [tabsToggle, setTabsToggle] = useState(1)

    const tabToggle = (index) => {
        setTabsToggle(index)
    }
  return (
    <div className='w-full h-full text-gray-500 font-semibold'>
        
        <div className={`w-full relative gradient rounded-b-xl border-b-4 border-cyan-600 ${show ? 'h-1/2' : ''}`}>
                <article className='w-full h-min px-2 pt-2 pb-4 '>
                    <h1>To'lov puli: 250 sum</h1>
                    <h1>Qarzdorlik: -250 sum</h1>
                    <h1>Boshlash va tugash vaqti: 14:00/16:00</h1>
                </article>
                {
                    show ? 
                    <div className='w-full flex flex-col justify-center items-center'>
                    <div className='w-full p-2'>
                        <h1>Zona: 12</h1>
                        <p className='text-sm'>Gruh boshlash va tugash sanasi: 12.01.2023/12.07.2023</p>
                        <p className='text-sm'>Gruh arhivlash sanasi: 7-oy/12-iyul</p>

                    </div>    
                    <h1 className='pb-1 px-4 border-b-2'>Online To'lov</h1>
                    <div className='w-full p-4 pt-7'>
                        <div className='w-full flex justify-around items-center pb-7'>
                            
                            <div className='w-16 h-16 rounded-full bg-white justify-center flex items-center'>
                                <img src="public/payme-01.png" className='scale-110 bg-center bg-contain' alt="" />
                            </div>
                            
                             <div className='w-16 h-16 rounded-full bg-white justify-center flex items-center'>
                                <img src="public/Click-01.png" className='scale-110 bg-center bg-contain' alt="" />
                            </div>
                       
                        </div>
                        <div className='w-full flex justify-around items-center'>
                            
                            <div className='w-16 h-16 rounded-full bg-white justify-center flex items-center'>
                                <img src="public/logo-horizontal-black-colored.png" className='scale-110 bg-center bg-contain' alt="" />
                            </div>
                            
                             <div className='w-16 h-16 rounded-full  bg-white justify-center flex items-center'>
                               <h1 className='w-16 text-sm flex flex-col items-center justify-center font-bold text-black/70'>Humo/<span>UzCard </span></h1>
                            </div>
                       
                        </div>
                       
                    </div>
                </div>
                    : <></>
                }

                <div className='w-full flex justify-between pb-2 px-4  font-bold'>
                    <button onClick={() => setShow(true)} className={`${show ? 'hidden' : 'block'} text-3xl`}><MdOutlineKeyboardDoubleArrowDown/></button>
                    <button onClick={() => setShow(true)} className={`${show ? 'hidden' : 'block'} text-3xl`}><MdOutlineKeyboardDoubleArrowDown/></button>
                </div>

        </div>
                <div className='relative w-full h-8'>
                <div className='w-full flex justify-between pb-2 px-4 absolute -top-9 font-bold'>
                    <button onClick={() => setShow(false)} className={`${show ? 'block' : 'hidden'} text-3xl`}><MdOutlineKeyboardDoubleArrowUp/></button>                    
                    <button onClick={() => setShow(false)} className={`${show ? 'block' : 'hidden'} text-3xl`}><MdOutlineKeyboardDoubleArrowUp/></button>                    
                </div>

                <button className='absolute -top-9 bg-black border-4 border-cyan-600 rounded-full h-16 w-16 mx-auto left-0 right-0'>
                    <img src="public/prikolnaya-avatarka-dlya-patsanov.jpg" className='rounded-full' alt="" />
                </button>
                
                </div>


                <div className='w-full flex flex-col justify-center items-center '>
                    <h1 className='mb-4'>Akrom Abdullayev</h1>
                    
                    <div className='w-full mb-4'>
                        <p className='w-full text-center'>Likes: 4235432</p>
                        <div className='w-full flex justify-center items-center gap-4'>
                            <p>Comments: 263564</p>
                            <p>Saved: 33564</p>  
                        </div>
                    </div>
                
                </div>
                
                <div className='w-full flex gap-6 justify-center px-2 h-8'>
                    <div onClick={() => tabToggle(1)} className={`border-r-4 cursor-pointer px-6 ${tabsToggle === 1 ? 'border-b-4' : ''}`}>Posts</div>
                    <div onClick={() => tabToggle(2)} className={`px-4 cursor-pointer ${tabsToggle === 2 ? 'border-b-4' : ''}`}>Like</div>
                    <div onClick={() => tabToggle(3)} className={`border-l-4 cursor-pointer px-6 ${tabsToggle === 3 ? 'border-b-4' : ''}`}>Saved</div>
                </div>

                <div>

                    <div className={`px-6 ${tabsToggle === 1 ? 'block' : 'hidden'}`}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, asperiores suscipit qui facere eum, itaque sapiente perferendis molestias quod saepe consequuntur, expedita commod
                        </p>
                    </div>
                    <div className={`px-6 ${tabsToggle === 2 ? 'block' : 'hidden'}`}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, asperiores suscipit qui facere eum, itaque sapiente 
                        </p>
                    </div>
                    <div className={`px-6 ${tabsToggle === 3 ? 'block' : 'hidden'}`}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, asperiores suscipit qui facere eum, itaque sapiente perferendis molestias quod saepe consequuntur, expedita commodi! Recusandae porro mollitia eligendi sunt tempora deserunt?
                        </p>
                    </div>

                </div>

    </div>
  )
}

export default Profile