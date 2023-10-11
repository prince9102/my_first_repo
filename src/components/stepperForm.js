import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  spousename: '',
  mothername: '',
  fathername: '',
  siblingname: '',
  highschool: '',
  highschoolmarks: '',
  intermediate: '',
  intermediatemarks: '',
  graduation: '',
  graduationmarks: '',
  lastcompany: '',
  lastsalary: '',
  exp: '',
  position: ''
};





const validation = yup.object({

  spousename: yup.string().required('spouse name is required'),
  mothername: yup.string().required('mother name is required'),
  fathername: yup.string().required('father name is required'),
  siblingname: yup.string().required('sibling name required'),
  highschool: yup.string().required('it is required'),
  highschoolmarks: yup.string().required('it is required'),
  intermediate: yup.string().required('it is required'),
  intermediatemarks: yup.string().required('it is required'),
  graduation: yup.string().required('it is required'),
  graduationmarks: yup.string().required('it is required'),
  lastcompany: yup.string().required('it is required'),
  lastsalary: yup.string().required('it is required'),
  exp: yup.string().required('it is required'),
  position: yup.string().required('it is required')


})


const Step1 = ({ next }) => (
  <div className='container'>
    <div className='row'>
      <div className='col-md-4'>
        <h2> Step-1 Family Details</h2>
        <div className='form-group' >
          <label htmlFor="firstName">Spouse Name:</label>
          <Field type="text" name="spousename" className='form-control' placeholder='Spouse Name' />
          <ErrorMessage name='spousename' render={msg => <div className='text-danger'>{msg}</div>} />
        </div>
        <div className='form-group'>
          <label htmlFor="mothername">Mother Name:</label>
          <Field type="text" name="mothername" className='form-control' placeholder='Mother Name' />
          <ErrorMessage name='mothername' render={msg => <div className='text-danger'>{msg}</div>} />
        </div>
        <div className='form-group'>
          <label>Father Name</label>
          <Field type='text' name='fathername' className='form-control' placeholder='Enter Father Name' />
          <ErrorMessage name='fathername' render={msg => <div className='text-danger'>{msg}</div>} />
        </div>
        <div className='form-group'>
          <label>Siblings Name</label>
          <Field type='text' name='siblingname' className='form-control' placeholder='Enter Siblings Name' />
          <ErrorMessage name='fathername' render={msg => <div className='text-danger'>{msg}</div>} />
        </div>
        <button className='btn btn-primary my-2' onClick={next}>Next</button>
      </div>
    </div>
  </div>
);

const Step2 = ({ prev, next }) => (

  <div className='container'>
    <h2> Step-2 Educational Details</h2>
    <div className='row'>
      <div className='col-md-4'>
        <div className='form-group'>
          <label htmlFor="highschool">High School Board</label>
          <Field type='text' name='highschool' className='form-control' placeholder='High School Board' />
          <ErrorMessage name='highschool' render={msg => <div className='text-danger'>{msg}</div>} />
        </div>
      </div>

      <div className='col-md-4'>
        <div className='form-group'>
          <label htmlFor="intermediate">Intermediate Board</label>
          <Field type='text' className='form-control' name='intermediate' placeholder='Intermediate Board' />
          <ErrorMessage name='intermediate' render={msg => <div className='text-danger'>{msg}</div>} />
        </div>
      </div>
      <div className='col-md-4'>
        <div className='form-group'>
          <label htmlFor="graduation">Graduation</label>
          <Field type='text' name='graduation' className='form-control' placeholder='Graduation University' />
          <ErrorMessage name='graduation' render={msg => <div className='text-danger'>{msg}</div>} />
        </div>
      </div>


      <div className='col-md-4'>

        <div className='form-group'>
          <label htmlFor="highschoolmarks">High School Marks</label>
          <Field type='text' name='highschoolmarks' className='form-control' placeholder='High School Marks' />
          <ErrorMessage name='highschoolmarks' render={msg => <div className='text-danger'>{msg}</div>} />
        </div>
      </div>

      <div className='col-md-4'>
        <div className='form-group'>
          <label htmlFor="intermediatemarks">Intermediate Marks</label>
          <Field type='text' name='intermediatemarks' className='form-control' placeholder='Intermediate Marks' />
          <ErrorMessage name='intermediatemarks' render={msg => <div className='text-danger'>{msg}</div>} />
        </div>
      </div>

      <div className='col-md-4'>
        <div className='form-group'>
          <label htmlFor="graduationmarks">Graduation Marks</label>
          <Field type='text' name='graduationmarks' className='form-control' placeholder='Graduation Marks' />
          <ErrorMessage name='graduationmarks' render={msg => <div className='text-danger'>{msg}</div>} />
        </div>
      </div>


    </div>
    <button className='btn btn-primary m-1 rounded' onClick={prev}>Previous</button>
    <button className='btn btn-primary m-1 rounded' onClick={next}>Next</button>
  </div>

);

const Step3 = ({ prev }) => (

  <div className='container'>
    <h2>Step-3 Professional Details</h2>
    <div className='row'>
      <div className='col-md-4'>
        <Form>
          <div className='form-group'>
            <label htmlFor="">Last Company </label>
            <Field type='text' name='lastcompany' className='form-control' placeholder='Last Company Name' />
            <ErrorMessage name='lastcompany' render={msg => <div className='text-danger'>{msg}</div>} />
          </div>
          <div className='form-group'>
            <label htmlFor="">Last Salary </label>
            <Field type='text' name='lastsalary' className='form-control' placeholder='Last Salary' />
            <ErrorMessage name='lastsalary' render={msg => <div className='text-danger'>{msg}</div>} />
          </div>
          <div className='form-group'>
            <label htmlFor="">Total Experience </label>
            <Field type='text' name='exp' className='form-control' placeholder='Total exp.' />
            <ErrorMessage name='exp' render={msg => <div className='text-danger'>{msg}</div>} />
          </div>
          <div className='form-group'>
            <label htmlFor="">Position in last company</label>
            <Field type='text' name='position' className='form-control' placeholder='Last Position' />
            <ErrorMessage name='position' render={msg => <div className='text-danger'>{msg}</div>} />
          </div>
        </Form>

      </div>
    </div>


    <button className='btn btn-primary rounded m-1' onClick={prev}>Previous</button>
    <button className='btn btn-primary rounded m-1' type="submit">Submit</button>
  </div>

);

const StepperForm = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState([])



  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const submit = (e) => {
    axios.post('http://localhost:3002/user', e)
      .then((res) => {
        setData(res.data)
        console.log(res)
      })
      .catch(error => console.log(error))

  }
  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit={(values)=>{
        values.parentId = localStorage.getItem('userId')
        submit(values)

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your Details has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        console.log('Form submitted with values:', values);
      }
      }
    >
      {({ values }) => (
        <Form>
          {step === 1 && <Step1 next={nextStep} />}
          {step === 2 && <Step2 prev={prevStep} next={nextStep} />}
          {step === 3 && <Step3 prev={prevStep} />}
        </Form>
      )}
    </Formik>
  );
};

export default StepperForm;
