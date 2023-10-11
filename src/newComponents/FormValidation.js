import React from 'react'
import { Formik , Field , ErrorMessage , useFormik, Form } from 'formik'
import * as yup from 'yup'
import { Col, Row } from 'react-bootstrap'

function FormikData() {

   

    const validation = yup.object({
        name: yup.string().min(3).max(10).required('Name is required'),
        email:yup.string().email().required('email is required'),
        password:yup.string().min(6).required('password is required'),
        phone:yup.string().min(10).required('phone no. is required'),
        add:yup.string().required('address is required')
    })



  return (


    <>
    <Formik

initialValues={{

        name:'',
        email:'',
        password:'',
        phone:'',
        add:''

    
}}

validationSchema={validation}

onSubmit={values=>{

    // submit(values)
}


}


    />
<div className='d-flex justify-content-center align-items-center w-100vw vh-100 '>
    <h1>Formik Validation</h1>
    <div className='w-50 bg-white border shadow'>
       <Form>
       <Row>
            <Col md= {6}>
                <label htmlFor="">Name:</label>
                <input type="text" placeholder='enter name' className='form-control' name='name'  />
                <label htmlFor="">Email:</label>
                <input type="text" placeholder='enter email' className='form-control' name='email'  />
                <label htmlFor="">Password:</label>
                <input type="password" placeholder='enter password' className='form-control' name='password'  />
                <label htmlFor="">Phone:</label>
                <input type="text" placeholder='enter phone' className='form-control' name='phone'  />
                <label htmlFor="">Address:</label>
                <input type="text" placeholder='enter address' className='form-control' name='address'  />
            </Col>
        </Row>
       </Form>
    </div>

</div>

    </>
  )
}

export default FormikData