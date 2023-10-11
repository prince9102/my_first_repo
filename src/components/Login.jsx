import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const Login = () => {

   const [email , setEmail] = useState('')
   const [password , setPassword] = useState('')
   const navigate = useNavigate('')



   const handleSubmit = () =>{

if(validate()){
axios.get('http://localhost:3002/info')
.then((res)=>
{
console.log(res)


let details = res.data.filter((item)=>{
   return item.email==email && item.password ==password 
   
})
console.log(details , 'fhj')

if(details.length>0){
   localStorage.setItem('email' , JSON.stringify(details[0].email))
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
}
}
 
const validate=()=>{
 let result = true
 if (email === '' || email === null) {
      result = false;

    }

    if (password === '' || password === null) {
      result = false;
      
    }
    return result ;
}

const dataChek =()=>{
   if(localStorage.getItem('email')){
      navigate('/movie')
   }

   }


  return (
    <div className='container'>
    <div className='card w-50 my-5'>
        <div className='card-header'>
        <h1 className='d-flex align-item-center justify-content-center'>Login</h1>
</div>
 <div className='card-body'>
    <div className='row'>
    <div className='col-md-6'>
        <label htmlFor="">Enter Your Email: </label>
        <input type="text" placeholder='email-id' required className='form-control' onChange={(e)=>setEmail(e.target.value)} />
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

export default Login