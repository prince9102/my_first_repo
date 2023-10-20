import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Head from './Head'

import Register from './Register'
import Login from './Login'

const MainAuth = () => {
  return (
    <>
    <BrowserRouter>
        <Head/>
        <Routes>
            <Route path='/reg' element={<Register/>} />
            <Route path='/login' element={<Login/>}/>
            </Routes>
    </BrowserRouter>

    </>
  )
}

export default MainAuth