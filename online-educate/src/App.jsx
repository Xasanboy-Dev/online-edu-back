import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import TeachersCard from './components/TeachersCard'
import BuyAdmin from './pages/BuyAdmin'
import Chat from './pages/Chat'
import RegistartionStudent from './pages/RegistartionStudent'
import RegistartionWorker from './pages/RegistartionWorker'

import Login from './pages/RegistartionWorker'
import Salary from './pages/Salary'

const App = () => {
  return (
    <div className="h-screen w-full">
      <Routes>
        <Route path="/salary" element={<Salary />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/buyAdmin" element={<BuyAdmin />} />
      </Routes>
    </div>
  )
}

export default App
