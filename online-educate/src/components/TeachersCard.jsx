import React from 'react'
import TeachersData from '../mock/CardsData'

const TeachersCard = () => {
  return (
    <div>

        {
         TeachersData.map( item => (
            <div className="">
                <div className='flex'>
                    <h1>{item.name}</h1>
                    <p>{item.phone}</p>
                </div>

                <div className='flex flex-wrap'>
                    <p>{item.rasxod}</p>
                    <p>{item.rasxod}</p>
                </div>

                <div>
                    <h1>summa: {item.salary}</h1>
                </div>

            </div>
         ))
        }

    </div>
  )
}

export default TeachersCard