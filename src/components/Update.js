import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import { Link , useNavigate, useParams } from 'react-router-dom';

function Update() {
 
  const {id} = useParams();
  const [user , setUser] = useState({
    name:'',
    email:'',
    password:'',
    phone:''
  })
  const navigate = useNavigate()

useEffect(()=>{
    axios.get(' http://localhost:3002/information/' + id )
    .then((res)=>{setUser(res.data)
    console.log(res , 'jjgj')})
    .catch(error=>console.log(error))
},[])

const handleChange = (e)=>{
  const {name , value} =e.target
  setUser({...user , [name]:value})
}
const handleUpdate=(e)=>{
 
  e.preventDefault()
  axios.put('http://localhost:3002/information/'+id, user)
.then((res)=>console.log(res.data))
console.log(user , 'user')
navigate('/')

}

  return (
    <div className='d-flex justify-content-center align-items-center w-100vw vh-100'>
    <div className=' w-50 bg-white border shadow-md '>

    <form  onSubmit={handleUpdate}>
<div className='col-md-8 m-3'>
    <h1>Update Details</h1>
<label htmlFor="name">Name: </label>
      <input type="text" name='name' placeholder='Enter Name' value={user.name} onChange={(e)=>handleChange(e)} className='form-control' />
      <label htmlFor="email">Email:</label>
      <input type="text" placeholder='Enter email' value={user.email} onChange={(e)=>handleChange(e)} className='form-control' name='email' />
      <label htmlFor="password"> Password: </label>
      <input type="password" className='form-control' value={user.password} onChange={(e)=>handleChange(e)} placeholder='Enter password' name='password' />
      <label htmlFor="mobile">Mobile No :</label>
      <input type="phone" placeholder='Enter Mobile no.' value={user.phone} onChange={(e)=>handleChange(e)} className='form-control' />
</div>
<button type='submit'  className='btn btn-success'>Update</button>
<Link  to= '/' className='btn btn-info'>Back</Link>
    </form>
</div>
    </div>
  )
}

export default Update