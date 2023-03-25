import React from 'react'

const VerifyNumber = () => {
  return (
    <div className='flex flex-col justify-start max-sm:pt-10 items-center h-screen w-full bg-cover bg-center bg-[url(/public\bg1.png)] text-white/80 font-semibold'>

     <div className='flex flex-col justify-center items-center mb-6'>
        <img src="public/pngwing.com (2).png" alt="" className='w-[250px] ' />
        <h1 className='text-white/80 text-xl font-semibold'>Financi Education</h1>
     </div>   

     <div className='sm:w-[400px] h-min pb-2 bg-transparet border-4  border-blue-600 max-sm:w-[280px]  h-min rounded-xl text-md px-2'>
        <h1 className='flex justify-center text-2xl pb-1 mx-3 mt-3.5 border-b border-white-1' >Filials</h1>
        <form className=' w-full h- rounded-b-xl px-2 pt-3 pb-1 flex flex-col gap-2 items-center'>
          
          <div  className='w-full'>
          <h1>Telefon Raqam:</h1>
          <input className='w-full rounded max-sm:h-8 h-12 p-2 bg-transparent border border-white outline-none'  type="text" placeholder='Phone Number' />
          </div>

          <div className='w-full'>
            <h1>Codni Tasdiqlang:</h1>
            <input className='w-full rounded max-sm:h-8 h-12 p-2 bg-transparent border border-white outline-none' type="text" placeholder='Verify code' />
          </div>
          
          
          <button className='w-2/3 rounded-2xl my-2 bg-blue-700 py-3 px-4'>Yuborish</button>

        </form>
     </div>
    </div>
  )
}

export default VerifyNumber