import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import TeachersCard from './components/TeachersCard'
import BuyAdmin from './pages/BuyAdmin'
import Chat from './pages/Chat'
import RegistartionStudent from './pages/RegistartionStudent'
import RegistartionWorker from './pages/RegisterPupil'
import { HostContext } from './useContext/default'
import Login from './pages/Login'
import Salary from './pages/Salary'

const App = () => {
  return (
    <div className='h-screen w-full'>
      <HostContext.Provider value='localhost'>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<RegistartionStudent />} />
          <Route path='/oylik' element={<Salary />} />
          <Route path='/buyAdmin' element={<BuyAdmin />} />
        </Routes>
      </HostContext.Provider>
    </div>
  )
}

export default App