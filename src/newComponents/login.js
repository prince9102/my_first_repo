import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const Login = () => {


  useEffect(()=>{

   localStorage.clear()
  },[])

    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')
    const navigate = useNavigate('')
 
 
 
    const handleSubmit = () =>{
 
 
 axios.get('http://localhost:3002/post')
 .then((res)=>
 {
 console.log(res)
 
 
 let details = res.data.filter((item)=>(
     item.username==username && item.password ==password 
    
 ))
//  console.log(details , 'details')
 
 if(details.length>0){
    localStorage.setItem('username' , JSON.stringify(details[0].username))
    localStorage.setItem('password' , JSON.stringify(details[0].password))
 
    
    
    Swal.fire(
             'Login!',
             'You are login Sucessfully...',
             'success'
           )
    
 }
 else{
    Swal.fire('Invalid Credential')
 }
 dataChek()
 })
.catch(error=>console.log(error))

 }

 const dataChek =()=>{
    if(localStorage.getItem('username')) {
       navigate('/postdata')
    }
 
    }
  
//  const validate=()=>{
//   let result = true
//   if (username === '' || username === null) {
//        result = false;
 
//      }
 
//      if (password === '' || password === null) {
//        result = false;
       
//      }
//      return result ;
//  }
 

 
 
   return (
     <div className='container'>
     <div className='card w-50 my-5'>
         <div className='card-header'>
         <h1 className='d-flex align-item-center justify-content-center'>Login</h1>
 </div>
  <div className='card-body'>
     <div className='row'>
     <div className='col-md-6'>
         <label htmlFor="">Enter Username: </label>
         <input type="text" placeholder='Username' required className='form-control' onChange={(e)=>setUsername(e.target.value)} />
         <label htmlFor="">Enter Password :</label>
         <input type="password" required className='form-control' onChange={(e)=>setPassword(e.target.value)} />
     </div>
 
     </div>
  </div>
  <div className='card-footer'>
     <button className='btn btn-primary m-2' onClick={handleSubmit}>Login</button>
  </div>
     </div>
 
     </div>
   )    

}

export default Login;