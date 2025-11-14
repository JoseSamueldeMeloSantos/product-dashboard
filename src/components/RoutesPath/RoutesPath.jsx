import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import ContactPage from '../ContactPage/ContactPage'

function RoutesPath() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/contact' element={<ContactPage />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesPath
