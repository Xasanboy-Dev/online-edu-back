import React, { useState } from 'react'
import { Worker } from '../mock/CardsData'
import { AiOutlineFieldNumber } from 'react-icons/ai'
import Navbar from '../components/navbar/Navbar'

const Salary = () => {
    const [show, setShow] = useState(false)
    const [value, setValue] = useState()
    const handlerShow = (e) => {
        e.preventDefault()
        setShow(!show)
    }
    return (
        <div className='w-full h-screen bg-gradient bg-cover bg-center text-gray-400 text-3xl'>
    
            <nav className='w-full p-6 text-gray-600 flex justify-center'>
                <form className=''>
                    <select onClick={() => setShow(false)} onChange={(e) => setValue(e.target.value)} value={value} className='mr-4 w-54 transiton-250 outline-none rounded bg-transparent border-2 border-white/30 '>
                        {
                            Worker.map((item, index) => (
                                <option value={item.id} key={index + 1} className='bg-gray-500'>
                                    {item.name}
                                </option>
                            ))
                        }
                    </select>

                    <button onClick={(e) => handlerShow(e)} className='pr-3 py-0.5 pl-1 hover:bg-black/20 transiton w-40 transiton duration rounded bg-transparent border-2 border-white/30'>{show ? 'Yashirish' : 'Hammasi'}</button>

                </form>
            </nav>

            <div className='p-4 w-full '>
                <div className='flex items-center'>
                    <li className='list-none pr-2 text-lg'><AiOutlineFieldNumber /></li>
                    <ul className='flex w-full justify-between'>
                        <li className='w-[180px]'>Name</li>
                        <li>Salary</li>
                        <li>Date</li>

                    </ul>
                </div>
                {
                    show ?
                        Worker.map((item, index) => (
                            <div className='flex w-full text-left'>
                                <p className='pr-2'>{index + 1}</p>
                                <div className='flex w-full justify-between'>
                                    <h1 className='w-[300px]'>{item.name}</h1>
                                    <p>{item.salary}</p>
                                    <p>{item.date}</p>
                                </div>
                            </div>

                        ))
                        : <div className='flex w-full justify-between'>
            
                                {Worker.filter((item) => {
                                    if (item.id === +value) {
                                        return item
                                    }
                                }).map((item, index) => (
                                    <div className='flex w-full text-left'>
                                        <p className='pr-2 flex'>{index + 1}</p>
                                        <div className='flex w-full justify-between'>
                                            <h1 className='w-[300px]'>{item.name}</h1>
                                            <p>{item.salary}</p>
                                            <p>{item.date}</p>
                                        </div>
                                    </div>

                                ))}
                          
                        </div>
                }
            </div>
        </div>
    )
}

export default Salary