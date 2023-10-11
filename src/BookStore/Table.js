import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Table } from 'react-bootstrap';

const Tables = () => {

    const [data , setData] = useState([])
    const [state , setState] =useState()

    useEffect(()=>{
     
      getData()
    },[])



    const getData=()=>{

      axios.get('http://localhost:3002/book')
     .then((res)=>{setData(res.data)
    console.log(res.data)

   })
    
    .catch(error=>console.log(error))
    }



    const handleDelete =(id)=>{
   

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`http://localhost:3002/book/${id}`)
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              getData()
            }
          })
        
        
        
    }

  return (
    <>
   <div className='d-flex flex-column justify-content-center align-items-center w-100vw vh-100'>
   <div className='w-50 bg-white border rounded shadow px-2'>
   <h1 className='d-flex justify-content-center align-items-center'>Book Information</h1>
   <div className='d-flex justify-content-end '>
   <Link to = '/book' className='btn btn-success'>Add+</Link>

   </div>
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
            <th scope='col'>Action</th>
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
                    <td><Link to={`/update/${item.id}`} className='btn btn-info'>Update</Link></td>
                    <td><Link onClick={(e)=>handleDelete(item.id)} className='btn btn-danger'>Delete</Link></td>
            
                </tr>
            })}
        </tbody>
   
   </Table>

   </div>

   </div>
    </>
  )
}

export default Tables