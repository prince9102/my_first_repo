import React, { useState } from 'react';
import { Formik , Form , Field , ErrorMessage } from 'formik'
import * as yup from 'yup';
import axios from 'axios';

const Login = () => {
const [data , setdata] = useState([])

    const initial = {
       
        email:'',
        password:''
    }

    const validation = yup.object({
       
        email: yup.string().required().email(),
        password: yup.string().required()
    })


    const submit = ()=>{
        axios.get(' http://localhost:3002/rack')
        .then((res)=>{
            setdata(res.data)
            console.log(res.data)

            let data = res.data.filter((item)=>(
                item.email == initial.email 
            ))

            if(data.length>0){
                localStorage.setItem('email' , JSON.stringify((data[0].email)))
                alert('password match')
            }
            else{
                alert('data not match')
            }
        })
     


        .catch((error)=>{
            console.log(error)
        })
    }


  return (
 <>
<Formik

initialValues={initial}
validationSchema={validation}
onSubmit={(value)=>{
    submit(value)
}}
>

<div className='container'>
    <div className='row'>
        <div className='col-md-4'>
        <Form>
         

            <label htmlFor="">Email :</label>
            <Field type='email' name='email' className='form-control' placeholder='enter email'     />
            <ErrorMessage name='email' render={msg=> <div className='text-danger'>{msg}</div>}/>
            <label htmlFor="">Password :</label>
            <Field type='password' name='password' className='form-control' placeholder='enter password'     />
            <ErrorMessage name='password' render={msg=> <div className='text-danger'>{msg}</div>}/>
    <button className='btn btn-primary m-3' type='submit'>Login</button>
        </Form>

        </div>
    </div>
</div>

</Formik>
</>
)
}

export default Login