import React from 'react'
import { Formik , Field , ErrorMessage, Form } from 'formik'
import * as yup from 'yup';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Nav from './Nav';



const UserRegister = () => {

    const navigate = useNavigate()
   const  initial = {
    username:'',
    email:'',
    password:''
   }

   const validation = yup.object({
    username: yup.string().required('username is required'),
    email:yup.string().email('email must be in a proper format').required('email is required'),
    password:yup.string().min(6 , 'password must be 6 character').required('password is required')
   })
   


       const submit = (e)=>{
        axios.post(' http://localhost:3002/post',e)
        .then((res)=>console.log(res))
        .catch(error=>console.log(error))

        Swal.fire(
             'Registered!',
             'You are Data is Saved  Sucessfully...',
             'success'
           )
           navigate('/login')
       }
  return (

    
<>


<Formik

initialValues={initial}
validationSchema={validation}
onSubmit={value=>{
   
    submit(value)
    
}}
>

<Form >
    <div className='d-flex flex-column justify-content-center align-items-center w-100vw vh-100'>
    <div className='w-25 bg-white border shadow px-3'>
    <h2>User Details</h2>
   <div className='col-md-8'>
   <label htmlFor="">Username :</label>
    <Field type ='text' name='username' placeholder='Enter Username' className='form-control' />
    <ErrorMessage name='username' render={msg=><div className='text-danger'>{msg}</div>}/>
    <label htmlFor="">Email :</label>
    <Field type ='text' name='email' placeholder='Enter Email' className='form-control' />
    <ErrorMessage name='email' render={msg=><div className='text-danger'>{msg}</div>}/>
    <label htmlFor="">Password :</label>
    <Field type ='text' name='password' placeholder='Enter Password' className='form-control' />
    <ErrorMessage name='password' render={msg=><div className='text-danger'>{msg}</div>}/>

   </div>
<button type='submit' className='btn btn-primary m-2'>Submit</button>
    </div>

    </div>
</Form>

</Formik>
</>
  )
}

export default UserRegister