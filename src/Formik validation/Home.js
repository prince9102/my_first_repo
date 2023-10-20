import React, { useState , useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Home = () => {
  const [data , setdata] = useState([])
  const [state , setState] = useState()
  const [search , setsearch] = useState('')
  const [msg , setmsg] = useState('')

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
    address: yup.string().required(),
    country: yup.string().required(),
    mobile: yup.number().required(),
    gender: yup.string().required(),
    hobbies: yup.array().required()
  })


useEffect(()=>{

  getData()

},[state])

const getData =()=>{
  axios.get('http://localhost:3002/form')
  .then((res)=>setdata(res.data))
  .catch(error=>console.log(error))
}

  const submit = (e)=>{
      axios.post(' http://localhost:3002/form' , e)
      .then((res)=>console.log(res))
      setState(Math.random())
    }


    const handleDelete =(id)=>{
     axios.delete(' http://localhost:3002/form/'+ id)

     getData()
    }


const handleBlur =(e)=>{

  axios.get('http://localhost:3002/form')
  .then((res)=>{
  
  let num = res.data.filter((item)=>(
    item.mobile == e.target.value
  ))
  if(num.length>0){
    alert(' this mobile num already exist')
  }
})
  
 
}
const newData = data.filter((d)=>{
  if(search == '' || d.name.toLowerCase().includes(search.toLowerCase()) || d.address.toLowerCase() .includes(search.toLowerCase())
  || d.country.toLowerCase().includes(search.toLowerCase())){
    return d;
  }

})

  return (
    <>
      <Formik

        initialValues={initial}
        validationSchema={validation}
        onSubmit={(value , {resetForm}) => {
          submit(value)
          console.log(value)
          resetForm({value:''})
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
                  type='text'
                   name='name'
                    placeholder='Enter name'
                     className='form-control'
                      />
                  <ErrorMessage name='name' render={msg => <div className='text-danger'>{msg}</div>} />


                  <label htmlFor="">Email :</label>
                  <Field
                   type='email'
                    name='email'
                     placeholder='Enter email'
                      className='form-control'
                       />
                  <ErrorMessage name='email' render={msg => <div className='text-danger'>{msg}</div>} />


                  <label htmlFor="">Password :</label>
                  <Field 
                  type='password'
                   name='password'
                    placeholder='Enter password'
                     className='form-control'
                      />
                  <ErrorMessage name='password' render={msg => <div className='text-danger'>{msg}</div>} />


                  <label htmlFor="">Confirm Password :</label>
                  <Field
                   type='password'
                    name='cpassword'
                     placeholder='Enter confirm password'
                      className='form-control'
                       />
                  <ErrorMessage name='cpassword' render={msg => <div className='text-danger'>{msg}</div>} />


                  <label htmlFor="">Date/Time :</label>
                  <Field
                   type='datetime-local'
                    name='datetime'
                     placeholder='Enter date'
                      className='form-control'
                       />
                  <ErrorMessage name='datetime' render={msg => <div className='text-danger'>{msg}</div>} />

                  <label htmlFor="">Mobile :</label>

                  <Field 

                  type='number'
                   name='mobile'
                    placeholder='Enter mobile no.'
                     className='form-control' 
                     onBlur={handleBlur}

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

      <div>
        <input type="text" className='form-control' onChange={(e)=>setsearch(e.target.value)} />
      </div>

      <div>
        <table className='table bordered striped'>
          <thead>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>Email</th>
              <th scope='col'>Password</th>
              <th scope='col'>CPassword</th>
              <th scope='col'>Date/Time</th>
              <th scope='col'>Address</th>
              <th scope='col'>Country</th>
              <th scope='col'>Mobile</th>
              <th scope='col'>Gender</th>
              <th scope='col'>Hobbies</th>
            </tr>

          </thead>
          <tbody>
            {newData.length !== 0 ? newData.map((item)=>{
              return <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>{item.cpassword}</td>
                <td>{item.datetime}</td>
                <td>{item.address}</td>
                <td>{item.country}</td>
                <td>{item.mobile}</td>
                <td>{item.gender}</td>
                <td>{item.hobbies}</td>
               <td><Link to={`/update/${item.id}`} className='btn btn-success'>Update</Link></td>
                <td><button onClick={(e)=>handleDelete(item.id)} className='btn btn-danger'>Delete</button></td>
              </tr>
            }):"no data"}
          </tbody>
        </table>
      </div>

    </>
  )
}

export default Home