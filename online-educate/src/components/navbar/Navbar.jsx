import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {

    const navItems = [{name:'Guruh'},{name:'Qarzdorlar'},{name:'Oylik kiritsh'},{name:"Oylik"},{name:'Chat'}]
    const {pathname} = useLocation()
    const [arr, setArr] = useState([])
    
    useEffect(() => {
        const path = pathname.split('/')[1]
        setArr(navItems.filter((i => i.name !== path)))
    },[])
    console.log(arr, navItems);
  return (
    <nav className='fixed w-full bottom-0 h-16 bg-transparent border-t-2 border-black flex justify-center items-center text-white/80'>
        <ul className='flex justify-center items-center gap-6'>
            {
                arr.map(a => {
                    return <li>
                        <NavLink to={a.name}>{a.name}</NavLink>
                    </li>   
                })
            }
        </ul>
    </nav>
  )
}

export default Navbar