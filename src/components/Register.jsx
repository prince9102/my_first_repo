import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [data, setData] =useState([])
    const navigate = useNavigate('')

const handleSubmit = () =>{

    console.log(email,password)
    axios.post('http://localhost:3002/info', {email: email , password: password})
    .then((res)=>
    {
       
    console.log(res)})
    .catch(error=>console.log(error)) 
    navigate('/login')
}

  return (
    <>

    <div className='container '>
    <div className='card w-50 my-5 mx-auto '>
        <div className='card-header'>
        <h1 className='d-flex align-item-center justify-content-center'>Register</h1>
</div>
 <div className='card-body'>
    <div className='row'>
    <div className='col-md-6'>
        <label htmlFor="">Enter Your Email: </label>
        <input type="text" placeholder='email-id' onChange={(e)=>setEmail(e.target.value)} className='form-control' />
        <label htmlFor="">Enter Password :</label>
        <input type="password" className='form-control' onChange={(e)=>{setPassword(e.target.value)}} />
    </div>

    </div>
 </div>
 <div className='card-footer'>
    <button className='btn btn-primary m-2'    onClick={handleSubmit}  >Register</button>
    
 </div>
    </div>

    </div>
  
    </>
  )
}

export default Register