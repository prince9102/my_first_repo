import React from 'react'
import { useParams , Link} from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'

function Read() {
  const [data , setData] = useState([])
  const {id} = useParams();

useEffect(()=>{
    axios.get(' http://localhost:3002/information/' + id )
    .then((res)=>{setData(res.data)
    console.log(res , 'jjgj')})
    .catch(error=>console.log(error))
},[])
  return (
    <div className='d-flex justify-content-center align-items-center w-100 vh-100'>
    <div className='w-75 bg-white border shadow rounded'>
      <h2>User Details</h2>
      <div className='mb-2'>
        <strong>Name: {data.name}</strong>
      </div>
      <div className='mb-2'>
        <strong>Email: {data.email}</strong>
      </div>
      <div className='mb-2'>
        <strong>Password: {data.phone}</strong>
      </div>
      <div className='mb-2'>
        <strong>Mobile: {data.password}</strong>
      </div>
      <Link to={`/update/${id}`} className = 'btn btn-primary'>Edit</Link>
      <Link to='/' className = 'btn btn-info'>Back</Link>
    </div>

    </div>
  )
}

export default Read