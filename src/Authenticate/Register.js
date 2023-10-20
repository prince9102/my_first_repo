import React from 'react'
import { Formik , Form , Field , ErrorMessage } from 'formik'
import * as yup from 'yup';
import axios from 'axios';

const Register = () => {

    const initial = {
        name: '',
        email:'',
        password:''
    }

    const validation = yup.object({
        name: yup.string().required(),
        email: yup.string().required().email(),
        password: yup.string().required()
    })


const submit = (e)=>{
    axios.post(' http://localhost:3002/rack' ,e)
    .then((res)=>{
        console.log(res.data)
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
            <label htmlFor="">Name :</label>
            <Field type='text' name='name' className='form-control' placeholder='enter name'     />
            <ErrorMessage name='name' render={msg=> <div className='text-danger'>{msg}</div>}/>

            <label htmlFor="">Email :</label>
            <Field type='email' name='email' className='form-control' placeholder='enter email'     />
            <ErrorMessage name='email' render={msg=> <div className='text-danger'>{msg}</div>}/>
            <label htmlFor="">Password :</label>
            <Field type='password' name='password' className='form-control' placeholder='enter password'     />
            <ErrorMessage name='password' render={msg=> <div className='text-danger'>{msg}</div>}/>
    <button className='btn btn-primary m-3' type='submit'>Submit</button>
        </Form>

        </div>
    </div>
</div>

</Formik>
 </>
  )
}

export default Register