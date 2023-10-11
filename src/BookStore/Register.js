import React from 'react';
import { Formik , Form , Field , ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';

const Register = () => {

    const initial = {
        name:'',
        email:'',
        password:'',
        role:''
    }

    const validation = yup.object({

        name: yup.string().required('name is required'),
        email:yup.string().email('email must be in a proper format').required('email is required').matches(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/ , 'Please enter a valid email'),
        password:yup.string().min(6 , 'password must be 6 character').required('password is required'),
        role:yup.string().required('please select a role')

    })


    const submit = (e)=>{
        axios.post('http://localhost:3002/register',e)
        .then((res)=>console.log(res))
        .catch(error=>console.log(error))

            
    Swal.fire(
             'Registered!',
             'You are register Sucessfully...',
             'success'
           )
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

    <Form>
        <div className='d-flex flex-column justify-content-center align-items-center w-100vw vh-100'>
        <div className='w-50 bg-white  border shadow'>
<div className='row'>
        <div className='col-md-3'></div>

        <div className='col-md-6'>
        <h1 className='d-flex justify-content-center align-items-center'>Registration Form</h1>
        <label htmlFor="">Name :</label>
        <strong className='text-danger'>*</strong>
        <Field type='text' placeholder='enter name' className='form-control' name='name'/>
        <ErrorMessage name='name' render={msg=><div className='text-danger'>{msg}</div>}/>
        <label htmlFor="">Email :</label>
        <strong className='text-danger'>*</strong>
        <Field type='text' placeholder='enter email' className='form-control' name='email'/>
        <ErrorMessage name='email' render={msg=><div className='text-danger'>{msg}</div>}/>
        <label htmlFor="">Password :</label>
        <strong className='text-danger'>*</strong>
        <Field type='password' placeholder='enter password' className='form-control' name='password'/>
        <ErrorMessage name='password' render={msg=><div className='text-danger'>{msg}</div>}/>
        <label htmlFor="">Role :</label>
        <strong className='text-danger'>*</strong>
        <Field as = 'select' className='form-control' name='role'>
        <option value=''>Select Role</option>
        <option value='Admin'>Admin</option>
        <option value='User'>User</option>
        </Field>
        <ErrorMessage name='role' render={msg=><div className='text-danger'>{msg}</div>}/>
<Button varient='primary' className='m-2' type='submit' >Submit</Button>
        </div>
        <div className='col-md-3'></div>
</div>
        </div>

        </div>
    </Form>

    </Formik>
        
    </>
  )
}

export default Register