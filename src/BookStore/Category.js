import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Formik,Field,Form,ErrorMessage } from 'formik';
import * as yup from 'yup';
import ClipLoader from 'react-spinners/ClipLoader';

function Category() {
 
   const [categorydata , setCategoryData ] = useState([])
   const [state, setState]=useState('')
   const [loading , setLoading] = useState(false)


    
   


   const initial = {
    name:'',
    code:''
   }

   const validation = yup.object({
    name:yup.string().required('name is required').matches(/^[A-Za-z\s]*$/, 'Name must contain only letters and spaces'),
    code:yup.number('Please enter only number').required('code is required')
   })


   useEffect(()=>{
    setLoading(true)
    axios.get('http://localhost:3002/category')
    .then((res)=>{ 
      setCategoryData(res.data)
    setLoading(false)
    })
   },[state])

   const handleSubmit = (e)=>{
   

    axios.post('http://localhost:3002/category', e)
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
  resetForm({value:''})
}}

>
<div className='d-flex flex-column justify-content-center align-items-center my-5'>
<div className='w-50 bg-white border rounded shadow'>
<div className='row'>
<div className='col-md-3'></div>

<div className='col-md-6'>
<h1>Category Details</h1>
<Form>
<label htmlFor="">Name :</label>
<Field type="text" placeholder='enter name' name='name'  className='form-control' />
<ErrorMessage name='name' render={msg=><div className='text-danger'>{msg}</div>}/>
<label htmlFor="">Code : </label>
<Field type="number" placeholder='enter code' name='code' className='form-control' />
<ErrorMessage name='code' render={msg=><div className='text-danger'>{msg}</div>}/>
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
    <th scope='col'>Category </th>
    <th scope='col'>Code</th>
  </tr>
 </thead>

 <tbody>
  {!loading ?  categorydata.map((item)=>{
    return <tr key={item.id}>
    <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.code}</td>
    </tr>
  })
  :
  <tr>
  <td colSpan={4}>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
                                          <ClipLoader
                                            color="red"
                                            loading={true}
                                            size={120}
                                            aria-label="Loading Spinner"
                                            data-testid="loader"
                                        />
                                        </div>
                                    </td>
  </tr>}
 </tbody>
</table>

</div>

</div>
</Formik>
</>
  )
}

export default Category
