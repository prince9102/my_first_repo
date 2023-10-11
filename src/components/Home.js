import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
    const [data , setData] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        getData()
    },[])
const getData  =()=>{
    axios.get(' http://localhost:3002/information')
        .then((res)=>{setData(res.data)
        console.log(res)})
        .catch(error=>console.log(error))
}

const handleDelete=(id)=>{
    const confirm =window.confirm('Sure To Delete')
    if(confirm){
    axios.delete('http://localhost:3002/information/' + id)}
//    window.location.reload()
getData()

}

  return (
    <div className='d-flex flex-column justify-content-center align-items-center '>
        <h1>List Of Users</h1>
        <div className='w-75 rounded bg-white border shadow p-4' >
        <div className='d-flex justify-content-end'>
            <Link to ='/create' className='btn btn-success'>Add +</Link>
            
        </div>

        <table className='table  table-striped'>
            <thead>
                <tr>
                <th className='scope-col'>ID</th>
                    <th className='scope-col'>Name</th>
                    <th className='scope-col'>Email</th>
                    <th className='scope-col'>Phone</th>
                    <th className='scope-col'>Password</th>
                    <th className='scope-col'>Action</th>
                </tr>

            </thead>
            <tbody>
               { data.map((item, i)=>{
                    return <tr key={i}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.password}</td>
                        <td><Link  to ={`/read/${item.id}`} className='btn btn-info'>Read</Link></td>
                        <td><Link to={`/update/${item.id}`} className='btn btn-primary'>Edit</Link></td>
                        <td><Link onClick={(e)=>handleDelete(item.id)} className='btn btn-danger'>Delete</Link></td>
                    </tr>
               })}
            </tbody>
        </table>

        </div>
    </div>
  )
}

export default Home