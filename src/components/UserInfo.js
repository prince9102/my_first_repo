import React, { useState } from 'react';
import * as yup from 'yup';
import { Formik , Form , Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const UserInfo = () => {
   
    const navigate = useNavigate()

   
      

    const submit =(e)=>{
     axios.post('http://localhost:3002/details',e)
     .then((res)=> console.log(res))
     .catch(error=> console.log(error))
    }
    


    const validation = yup.object({
        name:yup.string().required('name is required'),
        email:yup.string().required('email is required').email('email must be in a proper format'),
        mobileNo:yup.string().max(10, 'mobile no. must be 10 digit').required('mobile no is required'),
        password:yup.string() .min(6 , 'password must be 6 character').required('password is required')
            .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit"
        ),

        confirmPassword:yup.string().oneOf([yup.ref('password') , null]).required('confirmpassword is required')

    })

    
   


  


    
  return (
    <>
    <div className='container'>
    <h1 className='d-flex justify-content-center'>User Details</h1>
    <div className='row'>
    <div className='col-md-3'></div>
    <div className='col-md-6 '>
    
            <Formik
            
            initialValues={{
                name:'',
                email:'',
                mobileNo:'',
                password:'',
                confirmPassword:''
            }}

            validationSchema={validation}
            onSubmit={value =>{
             
                submit(value)
                localStorage.setItem('otpGenerate' , (Math.floor( Math.random()*9999)) )
                navigate('/otp')}}>
           
         <Form>

            <div className='form-group  my-2'>
         
            <label htmlFor="">Name:</label>
            <Field type='text' className='form-control ' placeholder ='Enter Your Name' name='name'/>
            <ErrorMessage name='name' render={msg =><div className='text-danger'>{msg}</div>}/>
            </div>
            <div className='form-group my-2'>
             <label htmlFor="">Email:</label>
            <Field type='text' className='form-control' placeholder='Enter Your Email' name='email'/>
            <ErrorMessage name='email' render={msg=><div className='text-danger'>{msg}</div>}/>
            </div>

            <div className='form-group my-2'>
            <label htmlFor="">Phone number:</label>
            <Field type = 'number' name='mobileNo' placeholder='Enter Mobile no.' className='form-control  spin-button-none'/>
            <ErrorMessage name='mobileNo' render={msg=><div className='text-danger'>{msg}</div>}/>
</div>
            <div className='form-group'>
            <label htmlFor="">Password:</label>
            <Field type='password' placeholder='Enter password' className='form-control' name='password'/>
            <ErrorMessage name='password' render={msg=><div className='text-danger'>{msg}</div>}/>
</div>
            <div className='form-group my-2'>
            <label htmlFor="">Confirm Password:</label>
            <Field type= 'password' placeholder='Confirm password' className='form-control' name='confirmPassword'/>
            <ErrorMessage name='confirmPassword' render={msg=><div className='text-danger'>{msg}</div>}/>
</div>
    <button type='submit' className='btn btn-primary my-2'>Submit</button>
         <div className='col-md-3'></div>      
         </Form> 
            </Formik>
    </div>
        </div>
    </div>


  


    </>
  )
}

export default UserInfo