import axios from 'axios'
import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { useState } from 'react'

const UserTable = () => {
    const [data, setdata] = useState([])

    useEffect(()=>{
axios.get('http://localhost:3002/book')
.then((res)=>{setdata(res.data)
console.log(res.data)})
.catch(error=>console.log(error))
    },[])
  return (
   <>
<div className='d-flex flex-column justify-content-center align-items-center w-100vw vh-100'>
<div className='w-50 bg-white border shadow'>
    <h1 className='d-flex justify-content-center align-items-center'>User Table</h1>
    <Table   bordered striped>
    <thead>
        <tr>
            <th scope='col'>Name</th>
            <th scope='col'>ISBN NO.</th>
            <th scope='col'>Publish Year</th>
            <th scope='col'>Volume</th>
            <th scope='col'>Author ID</th>
            <th scope='col'>Category ID</th>
            <th scope='col'>Rack ID</th>
     
        </tr>
            </thead>
        <tbody>
            {data.map((item)=>{
                return <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.isbn}</td>
                    <td>{item.publishyear}</td>
                    <td>{item.volume}</td>
                    <td>{item.authorid}</td>
                    <td>{item.categoryid}</td>
                    <td>{item.rackid}</td>
               
            
                </tr>
            })}
        </tbody>
   
   </Table>

</div>

</div>
   </>
  )
}

export default UserTable