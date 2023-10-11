import React from 'react'
import { Formik , Field , ErrorMessage ,  } from 'formik'
import * as yup from 'yup'


function Validate() {
const initial = {
    name:'',
    email:'',
    password:'',
    address:''
}

const validation = yup.object({
    name: yup.string().required('name is required').min(6, 'name must be 6 letters'),
    email:yup.string().email('please enter valid email format'). required('email is required'),
    password:yup.string().min(6 , 'password must be 6 digit '),
    address: yup.string().required('password is required')
})

  return (

    <>


<Formik

initialValues={initial}
validationSchema={validation}
onSubmit={values=>{
    console.log(values)
}}
    
    
    
    ></Formik>
    </>
  )
}

export default Validate