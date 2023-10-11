import axios from 'axios'
import React, { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const GetInfo = () => {


    useEffect(() => {
     getData()
    }, [])
    

    const [data , setData] = useState([])

    const navigate = useNavigate()

    const getData = ()=>{
        axios.get('http://localhost:3002/details')
        .then((res)=>{
            setData(res.data)
            console.log(res.data)
        })
        .catch(error=>console.log(error))
    }

 const deleteData=(id)=>{
     

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
            axios.delete('http://localhost:3002/details/'+ id)
            getData()
          
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })

   
 }

 const setLocal =(e) => {
  localStorage.setItem('userId' , e)
  navigate('/demo')
 }

  return (
    <>
    <div className='container display-flex justify-content-center'>
    <h1 className='text-align-center'>User Data</h1>
    <table className='table-bordered'>
    <thead>
        <tr>
            <th className='scope-col'>Name</th>
            <th className='scope-col'>Email</th>
            <th className='scope-col'>Mobile no.</th>
            <th className='scope-col'>Password</th>
            <th className='scope-col'>Confirm Password</th>
            <th className='scope-col'>Action</th>
            <th className='scope-col'>Action</th>

        </tr>
        </thead>

        <tbody>
            {data.map((item, i)=>{
                return <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.mobileNo}</td>
                    <td>{item.password}</td>
                    <td>{item.confirmPassword}</td>
                    <td><button className='btn btn-success' onClick={()=> {setLocal(item?.id)}}>Update</button></td>
                    <td><button className='btn btn-danger' onClick={()=>{deleteData(item.id)}}>Delete</button></td>
                </tr>
            })}
        </tbody>
    
</table>
    </div>
    </>
  )
}

export default GetInfo