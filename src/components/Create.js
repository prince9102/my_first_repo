import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Create() {
  const [user , setUser] = useState({
    name:'',
    email:'',
    password:'',
    phone:''

  })
  const navigate = useNavigate()

  const handleChange=(e)=>{
    const {name , value} = e.target
    setUser({...user ,[name]:value})
  }

    const handleSubmit =(e)=>{
      e.preventDefault();
      axios.post('http://localhost:3002/information', user)
.then((res)=>console.log(res.data))
navigate('/')
    }
  
  return (
    <div className='d-flex justify-content-center w-100vw vh-100 align-items-center bg-light'>

<div className='w-50 border bg-white shadow p-4 rounded'>
<h1>Add a User</h1>
<form onSubmit={handleSubmit}> 
  <div className='mb-2 col-md-6'>
    <label htmlFor="name">Name :</label>
    <input type="text " name='name' placeholder='Enter your Name' onChange={(e)=>{handleChange(e)}} className='form-control' />
  
    <label htmlFor="email">Email:</label>
    <input type="text" name='email' placeholder='Enter email id' onChange={ (e)=>handleChange(e)}  className='form-control' />
    <label htmlFor="password">Enter Password : </label>
    <input type="password"  className='form-control' onChange={(e)=>handleChange(e)}  name='password' />
    <label htmlFor="phone no">Enter Mobile No. : </label>
    <input type="phone" placeholder='Enter Mobile no' onChange={(e)=>handleChange(e)}  className='form-control' name='phone' />
<button className='btn btn-success m-2'>Submit</button>
<Link to= '/' className='btn btn-primary'>Back</Link>
  </div>
</form>
 
</div>
    </div>
 
  )
}

export default Create