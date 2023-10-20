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
import Protected from './Protected'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Main() {
  return (
      <>
      <ToastContainer/>
    <BrowserRouter>
      <Header/>

<Routes>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Protected><Login/></Protected>}/>
    <Route path='/main' element={<Protected><Dashboard/></Protected>}/>
    <Route path='/book' element={<Protected><AddBook/></Protected>}/>
    <Route path='/author' element={<Protected><Author/></Protected>}/>
    <Route path='/category' element={<Protected><Category/></Protected>}/>
    <Route path='/rack' element={<Protected><Rack/></Protected>}/>
    <Route path='/table' element={ <Protected><Tables/></Protected>}/>
    <Route path='/update/:id' element={ <Protected><UpdateBook/></Protected>}/>
    <Route path='/usertable' element={<Protected><UserTable/></Protected>}/>
</Routes>

    </BrowserRouter>

    </>
  )
}

export default Main