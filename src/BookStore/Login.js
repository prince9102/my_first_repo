import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const Login = () => {


   useEffect(() => {
      localStorage.clear()
   }, [])

   const [email, setemail] = useState('')
   const [password, setPassword] = useState('')
   const [role , setRole] = useState('')
   const navigate = useNavigate('')



   const handleSubmit = () => {
 

      axios.get('http://localhost:3002/register')
         .then((res) => {
            console.log(res)


            let details = res.data.filter((item) => (
               item.email ==email && item.password ==password
               //  && item.role == role

            ))


            if (details.length > 0) {
               localStorage.setItem('email', JSON.stringify(details[0].email))
               localStorage.setItem('password', JSON.stringify(details[0].password))
               // localStorage.setItem('role', JSON.stringify(details[0].role))



               Swal.fire(
                  'Login!',
                  'You are login Sucessfully...',
                  'success'
               )

            }

        
            else {
               Swal.fire('Invalid Credential')
            }
            dataChek()
         })
         .catch(error => console.log(error))

   }

   const dataChek = () => {
      if (localStorage.getItem('email') ) {
         navigate('/main')
      }

   }


   return (
      <>
         <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
            <div className='w-50 bg-white border shadow'>
               <div className='row'>
                  <div className='col-md-3'></div>
                  <div className='col-md-6'>
                     <h1>Login Form </h1>
                     <label htmlFor="">Enter Email: </label>
                     <input type="text" className='form-control' placeholder='enter email' onChange={(e) => setemail(e.target.value)} />
                     <label htmlFor="">Password :</label>
                     <input type="password" placeholder='enter password' className='form-control' onChange={(e) => setPassword(e.target.value)} /> 
                     {/* <label htmlFor="">Role : </label>
                     <select className='form-control' >
                     <option value="" default >Select Role</option>
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                     </select> */}
                     <button onClick={handleSubmit} className='btn btn-primary m-2'>Login</button>
                  </div>
               </div>
            </div>
         </div>
      </>
   )

}

export default Login;