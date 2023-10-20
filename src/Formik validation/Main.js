import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './Home';

import Header from './Header';
import Update from './Update';

const ContextMain = () => {

  return (
 <>
 <BrowserRouter>
 {/* <Header/> */}
 <Routes>
    <Route path='/' element={<Home/>}/>
  
    <Route path='/update/:id' element={<Update/>}/>
    </Routes>
 </BrowserRouter>

 </>
  )
}

export default ContextMain