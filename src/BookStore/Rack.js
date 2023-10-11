import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Formik,Field,Form,ErrorMessage } from 'formik';
import * as yup from 'yup'

function Rack() {
 
   const [state , setState] = useState('')
   const [rackdata , setRackData] = useState([])



   const initial = {
    rackNo:'',
    rackCap:''
   }

   const validation = yup.object({
    rackNo:yup.number().required('rackno. is required'),
    rackCap:yup.number().required('rack capacity is required')
   })

   useEffect(()=>{
     
    axios.get('http://localhost:3002/rack')
    .then((res)=>{setRackData(res.data)
     console.log(res)})
    .catch(error=>console.log(error))

   },[state])



   const handleSubmit = (e)=>{
  
   
    axios.post('http://localhost:3002/rack', e)
    .then((res)=>{
      console.log(res)
      
      setState(Math.random())

      })
    .catch(error=>console.log(error))
   }
  return (
<>
<Formik

initialValues={initial}
validationSchema={validation}
onSubmit={(value , {resetForm})=>{
  handleSubmit(value)
  resetForm({value :''})
}}
>
<div className='d-flex flex-column justify-content-center align-items-center my-5'>
<div className='w-50 bg-white border rounded shadow'>
<div className='row'>
<div className='col-md-3'></div>

<div className='col-md-6'>
<h1>Rack Details</h1>
<Form>
<label htmlFor="">RackNo :</label>
<Field type="number" placeholder='enter RackNo' name='rackNo'  className='form-control'  />
<ErrorMessage name='rackNo' render={msg=><div className='text-danger'>{msg}</div>}/>
<label htmlFor="">Rack capacity : </label>
<Field type="number" name='rackCap' placeholder='enter rack capacity'  className='form-control'  />
<ErrorMessage name='rackCap' render={msg=><div className='text-danger'>{msg}</div>}/>
<button className='btn btn-primary m-2' type='submit'>Add</button>
</Form>
</div>
<div className='col-md-3'></div>
</div>

</div>


<div className='w-50 bg-white border shadow mt-5'>
<table  className='table  bordered striped'>
 <thead>
  <tr>
    <th scope='col'>ID</th>
    <th scope='col'>Rack No. </th>
    <th scope='col'>Rack Capacity</th>
  </tr>
 </thead>

 <tbody>
  {rackdata.map((item)=>{
    return <tr key={item.id}>
    <td>{item.id}</td>
      <td>{item.rackNo}</td>
      <td>{item.rackCap}</td>
    </tr>
  })}
 </tbody>
</table>

</div>
</div>
</Formik>
</>
  )
}

export default Rack
