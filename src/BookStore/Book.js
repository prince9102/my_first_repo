import React from 'react'
import { BrowserRouter , Route, Router, Routes } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Dashboard from './Dashboard'
import Header from './Header'
import Author from './Author'
import Category from './Category'
import Rack from './Rack'
import AddBook from './AddBook'
import Tables from './Table'
import UpdateBook from './UpdateBook'
import UserTable from './UserTable'

function Main() {
  return (
      <>
    <BrowserRouter>
      <Header/>

<Routes>
    <Route path='register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/main' element={<Dashboard/>}/>
    <Route path='/book' element={<AddBook/>}/>
    <Route path='/author' element={<Author/>}/>
    <Route path='/category' element={<Category/>}/>
    <Route path='/rack' element={<Rack/>}/>
    <Route path='/table' element={<Tables/>}/>
    <Route path='/update/:id' element={<UpdateBook/>}/>
    <Route path='/usertable' element={<UserTable/>}/>
</Routes>

    </BrowserRouter>

    </>
  )
}

export default Main