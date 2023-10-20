import React, { useState , useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';



const Update = () => {
  const [data , setdata] = useState([])

  const  {id} = useParams()
  const navigate = useNavigate()

  const initial = {

    name: '',
    email: '',
    password: '',
    cpassword: '',
    datetime: '',
    // time: '',
    address: '',
    country: '',
    mobile: '',
    gender: '',
    hobbies: [],
    
  }

  const validation = yup.object({

    name: yup.string().required().matches(/^[A-Za-z\s]*$/, 'Name must contain only letters and spaces'),
    email: yup.string().email('email must be in a proper format').required(),
    password: yup.string().min(6, 'password must be in 6 character').required().matches("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$" , 'password must contain a lowercase , uppercase and special character'),
    cpassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
    datetime: yup.string().required(),
    // time: yup.string().required(),
    address: yup.string().required(),
    country: yup.string().required(),
    mobile: yup.number().required(),
    gender: yup.string().required(),
    hobbies: yup.array().required()
  })


useEffect(()=>{

 
  axios.get('http://localhost:3002/form/' +id )

  .then((res)=>{setdata(res.data)
  initial.name = res.data.name
  initial.email = res.data.email
  initial.password= res.data.password
  initial.cpassword =res.data.cpassword
  initial.datetime=res.data.datetime
  initial.address = res.data.address
  initial.country = res.data.country
  initial.mobile = res.data.mobile
  initial.gender = res.data.gender
  initial.hobbies = res.data.hobbies

console.log(res.data)


})
  .catch(error=>console.log(error))

},[])




  const submit = (e)=>{
      axios.put(' http://localhost:3002/form/' +id , e)
      .then((res)=>console.log(res))
   
    }


   
  return (
    <>
      <Formik

        initialValues={initial}
        validationSchema={validation}
        onSubmit={(value , {resetForm}) => {
          submit(value)
          console.log(value)
          resetForm({value:''})
          navigate('/')
          
        }}
      >


        <Form>
          <div className='d-flex justify-content-center align-items-center w-100vw vh-100'>
            <div className='w-50 bg-white border shadow'>
              <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                  <h1>User Details </h1>
                  <label htmlFor="">Name :</label>

                  <Field 
                //   value={data.name}
                  type='text'
                //   onChange={(e)=>{
                //    setdata(e.target.value)
                //   }}
                   name='name'
                    placeholder='Enter name'
                     className='form-control'
                      />
                  <ErrorMessage name='name' render={msg => <div className='text-danger'>{msg}</div>} />


                  <label htmlFor="">Email :</label>
                  <Field
                //   value = {data.email}
                   type='email'
                    name='email'
                    // onChange={(e)=>setdata(e.target.value)}
                     placeholder='Enter email'
                      className='form-control'
                       />
                  <ErrorMessage name='email' render={msg => <div className='text-danger'>{msg}</div>} />


                  <label htmlFor="">Password :</label>
                  <Field 
                //    value ={data.password}
                  type='password'
                   name='password'
                //    onChange={(e)=>setdata(e.target.value)}
                    placeholder='Enter password'
                     className='form-control'
                      />
                  <ErrorMessage name='password' render={msg => <div className='text-danger'>{msg}</div>} />


                  <label htmlFor="">Confirm Password :</label>
                  <Field
                    // value = {data.cpassword}
                   type='password'
                    name='cpassword'
                    // onChange={(e)=>setdata(e.target.value)}
                     placeholder='Enter confirm password'
                      className='form-control'
                       />
                  <ErrorMessage name='cpassword' render={msg => <div className='text-danger'>{msg}</div>} />


                  <label htmlFor="">Date/Time :</label>
                  <Field
                //   value ={data.datetime}
                   type='datetime-local'
                    name='datetime'
                    // onChange={(e)=>setdata(e.target.value)}
                     placeholder='Enter date'
                      className='form-control'
                       />
                  <ErrorMessage name='datetime' render={msg => <div className='text-danger'>{msg}</div>} />


                  {/* <label htmlFor="">Time :</label>

                  <Field 
                  type='time'
                   name='time'
                    placeholder='Enter time'
                     className='form-control' 

                     />
                  <ErrorMessage name='time' render={msg => <div className='text-danger'>{msg}</div>} /> */}

                  <label htmlFor="">Mobile :</label>

                  <Field 
                //   value={data.number}
                  type='number'
                   name='mobile'
                //    onChange={(e)=>setdata(e.target.value)}
                    placeholder='Enter mobile no.'
                     className='form-control' 

                     />
                  <ErrorMessage name='mobile' render={msg => <div className='text-danger'>{msg}</div>} />


                  <label htmlFor="">Gender :</label>

                  <label> <Field
                  
                   type='radio'
                    value="Male"
                     name='gender'
                     ></Field>&nbsp; Male</label>

                  <ErrorMessage name='gender' render={msg => <div className='text-danger'>{msg}</div>} />

                  <label>
                  <Field 
                  type='radio' 
                  value="Female"
                   name='gender'
                   >

                   </Field>Female</label>

                  <ErrorMessage name='gender' render={msg => <div className='text-danger'>{msg}</div>} />

                  <br />

                  <div>
                    <label htmlFor="">Hobbies :</label>
                    <div>
                      
                      <Field
                       type='checkbox'
                        name='hobbies'
                         value='singing'
                          />
                          Singing

                    </div>

                    <div>
                      <Field 
                      type='checkbox'
                       name='hobbies' 
                       value='cooking' 

                       />Cooking

                    </div>


                    <div>
                      <Field type='checkbox' name='hobbies' value='reading' />reading
                    
                    </div>

                  </div>


                  <div>
                    <label htmlFor="">Address :</label>
                    <Field
                     as={"textarea"}
                      name='address'
                       rows={4} cols={40}
                        placeholder='Enter address'
                         className='form-control'
                          />

                    <ErrorMessage name='address' render={msg => <div className='text-danger'>{msg}</div>} />

                  </div>

                  <label htmlFor="">Country : </label>
                  <Field as='select' className='form-control' name='country' options={"nameoption"}>

                    <option value='' disabled>Select Country</option>
                    <option value='india'>India</option>
                    <option value='usa'>USA</option>
                  </Field>
                    <ErrorMessage name='country' render={msg => <div className='text-danger'>{msg}</div>} />
                 
                  <button className='btn btn-primary m-2' type='submit'>Submit</button>
                </div>
              </div>

            </div>

          </div>
        </Form>

      </Formik>

      </>
  )
}

export default Update