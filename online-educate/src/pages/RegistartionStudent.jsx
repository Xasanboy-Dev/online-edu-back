import React from 'react'
import {FcGoogle} from 'react-icons/fc'
const RegistartionStudent = () => {
  return (
    <div className='flex flex-col justify-start max-sm:pt-10 items-center h-screen w-full bg-cover bg-center bg-[url(/public\bg1.png)] text-white/80 font-semibold'>

     <div className='flex flex-col justify-center items-center mb-6'>
        <img src="public/pngwing.com (2).png" alt="" className='w-[250px] ' />
        <h1 className='text-white/80 text-xl font-semibold'>Financi Education</h1>
     </div>   

     <div className='sm:w-[400px] h-[500px] bg-transparet border-4  border-blue-600 max-sm:w-[280px] h-min rounded-xl text-md px-2'>
        <h1 className='flex justify-center pb-1 mx-3 mt-3.5 border-b border-white-1' >Registratsyadan o'tish</h1>
        <form className=' w-full h-min rounded-b-xl px-2 pt-3 pb-1 flex flex-col gap-2 items-center'>
          <div className='w-full'>
            <h1>Ism Familya:</h1>
            <input className='w-full rounded max-sm:h-8 h-12 p-2 bg-transparent border border-white outline-none' type="text" placeholder='Name' />
          </div>
          
          <div  className='w-full'>
          <h1>Telefon Raqam:</h1>
          <input className='w-full rounded max-sm:h-8 h-12 p-2 bg-transparent border border-white outline-none'  type="text" placeholder='Phone Number' />
          </div>
         
         <div  className='w-full'>
          <h1>Nomi:</h1>
          <input className='w-full rounded max-sm:h-8 h-12 p-2 bg-transparent border border-white outline-none mb-2' type="text" placeholder='Title' />
         </div>
            <div className='w-full'>
                 <h1>Kurs:</h1>
                 <select className='w-full rounded max-sm:h-8 h-12 px-2 bg-transparent border border-white outline-none' name=""> 
                    <option className='pt-1 px-2 bg-sky-400' value="1">Frontend</option>
                    <option className='pt-1 px-2 bg-sky-400' value="1">Backend</option>
                    <option className='pt-1 px-2 bg-sky-400' value="1">SMM</option>
                </select>
            </div>  
          
          <button className='w-2/3 rounded-2xl my-2 bg-blue-700 py-3 px-4'>Yuborish</button>

        </form>
        <button className='w-[100%] h-[50px] bg-blue-600 my-3 pl-3 text-xl text-white flex items-center justify-start gap-2'><FcGoogle className='text-4xl'/>Sign up with Google</button>
     </div>
    </div>
  )
}

export default RegistartionStudent