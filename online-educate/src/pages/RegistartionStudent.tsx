import React from 'react'
import { useState } from "react"
const RegistartionStudent = () => {
  let [name, setName] = useState("")
  let [lastname, setLastname] = useState("")
  let [phoneNumber, setPhoneNumber] = useState("")
  let [password, setPassword] = useState("")
  let [error, setError] = useState<Boolean>(false)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (name && lastname && password && phoneNumber && name.length >= 3 && lastname.length >= 3 && password.length >= 6 && phoneNumber.includes("+998")) {
          
      setError(false)
    } else {
      setError(true)
    }
  }


  return (
    <div className='flex flex-col justify-start max-sm:pt-10 items-center h-screen w-full bg-cover bg-center bg-[url(/public\bg1.png)] text-white/80 font-semibold'>
      <div className='flex flex-col justify-center items-center mb-6'>
        <img src="public/pngwing.com (2).png" alt="" className='w-[250px] ' />
        <h1 className='text-white/80 text-xl font-semibold'>Financi Education</h1>
      </div>

      <div className='sm:w-[400px] h-[500px] bg-transparet border-4  border-blue-600 max-sm:w-[280px] h-min rounded-xl text-md px-2'>
        <h1 className='flex justify-center pb-1 mx-3 mt-3.5 border-b border-white-1' >Registratsyadan o'tish</h1>
        <form onSubmit={e => handleSubmit(e)} className=' w-full h-min rounded-b-xl px-2 pt-3 pb-1 flex flex-col gap-2 items-center'>
          <div className='w-full'>
            <h1>Name:</h1>
            <input
              className='w-full rounded max-sm:h-8 h-12 p-2 bg-transparent border border-white outline-none'
              type="text" placeholder='John'
              onChange={e => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className='w-full'>
            <h1>Lastname:</h1>
            <input className='w-full rounded max-sm:h-8 h-12 p-2 bg-transparent border border-white outline-none'
              type="text" placeholder='Doe'
              onChange={e => setLastname(e.target.value)}
              value={lastname}
            />
          </div>
          <div className='w-full'>
            <h1>Telefon Raqam:</h1>
            <input className='w-full rounded max-sm:h-8 h-12 p-2 bg-transparent border border-white outline-none'
              type="number" placeholder='+998 XX XXX XX XX'
              onChange={e => setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />
          </div>
          <div className='w-full'>
            <h1>Parol kiriting:</h1>
            <input className='w-full rounded max-sm:h-8 h-12 p-2 bg-transparent border border-white outline-none'
              type="password" placeholder='XXXXXXXX'
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <span className='text-red-700'
            style={{ display: error ? "block" : "none" }}
          >Your password must be longer than 6</span>
          <button className='w-2/3 rounded-2xl my-2 bg-blue-700 py-3 px-4'>Yuborish</button>
        </form>
      </div>
    </div>
  )
}

export default RegistartionStudent