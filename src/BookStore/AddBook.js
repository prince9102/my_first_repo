import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const AddBook = () => {

    const initial = {
        name: '',
        isbn: '',
        publishyear: '',
        volume: '',
        authorid: '',
        categoryid: '',
        rackid: ''

    }

    const validation = yup.object({

        name: yup.string('only string').required('name is required'),
        isbn: yup.string().required(),
        publishyear: yup.string().required(),
        volume: yup.string().required(),
        authorid: yup.string().required(),
        categoryid: yup.string().required(),
        rackid: yup.string().required()

    })

    useEffect(() => {

        author()
        category()
        rack()
    }, [])
    const [authdata, setAuthData] = useState([])
    const [data, setData] = useState([])
    const [rackdata, setRackData] = useState([])


    const navigate = useNavigate()


    const submit = (e) => {




        axios.post('http://localhost:3002/book', e)
            .then((res) => console.log(res))
            .catch(error => console.log(error))


        Swal.fire({
            position: 'top-mid',
            icon: 'success',
            title: 'Data Saved Sucessfully...',
            showConfirmButton: false,
            timer: 1500
        })


        navigate('/table')
    }

    const author = () => {
        axios.get('http://localhost:3002/author')
            .then((res) => {
                setAuthData(res.data)
                console.log(res)
            })
            .catch(error => console.log(error))
    }


    const handleBlur = (e) => {
        // const values = e.target.value
        axios.get('http://localhost:3002/book')
            .then((res) => {

                let isbnNo = res.data.filter((item) => (
                    item.isbn == e.target.value
                ))

                if (isbnNo.length > 0) {

                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'ISBN Number Already Exist!',

                    })
                }

            })
            .catch(error => console.log(error))
    }


    const category = () => {
        axios.get('http://localhost:3002/category')
            .then((res) => {
                setData(res.data)
                console.log(res)
            })
            .catch(error => console.log(error))
    }

    const rack = () => {
        axios.get('http://localhost:3002/rack')
            .then((res) => {
                setRackData(res.data)
                console.log(res)
            })
            .catch(error => console.log(error))
    }





    return (
        <>
            <Formik

                initialValues={initial}
                validationSchema={validation}
                onSubmit={value => {
                    submit(value)
                }}

            >

                <Form>
                    <div className='d-flex flex-column justify-content-center align-items-center w-100vw vh-100'>
                        <div className='w-50 bg-white  border shadow'>
                            <div className='row'>
                                <div className='col-md-3'></div>

                                <div className='col-md-6'>
                                    <h1 className=' d-flex justify-content-center align-items-center'>Book Details</h1>
                                    <label htmlFor="">Name :</label>
                                    <Field type='text' placeholder='enter name' className='form-control' name='name' />
                                    <ErrorMessage name='name' render={msg => <div className='text-danger'>{msg}</div>} />
                                    <label htmlFor="">ISBN :</label>
                                    <Field type='text' placeholder='enter isbn no.'
                                        onBlur={handleBlur}
                                        className='form-control' name='isbn' />
                                    <ErrorMessage name='isbn' render={msg => <div className='text-danger'>{msg}</div>} />
                                    <label htmlFor="">Publish Year :</label>
                                    <Field type='text' placeholder='enter publish year' className='form-control' name='publishyear' />
                                    <ErrorMessage name='publishyear' render={msg => <div className='text-danger'>{msg}</div>} />
                                    <label htmlFor="">Volume :</label>
                                    <Field type='text' placeholder='enter volume' className='form-control' name='volume' />
                                    <ErrorMessage name='volume' render={msg => <div className='text-danger'>{msg}</div>} />
                                    <label htmlFor="">Author id :</label>
                                    {/* <Field type='text' placeholder='enter author id' className='form-control' name='authorid'/> */}
                                    <Field name='authorid' as='select' className='form-control'>
                                        <option value='' default>Select Author</option>
                                        {authdata.map((item) => {
                                            return <option value={item.id}>{item.name}</option>
                                        })}
                                    </Field>
                                    <ErrorMessage name='authorid' render={msg => <div className='text-danger'>{msg}</div>} />
                                    <label htmlFor="">Category id :</label>
                                    {/* <Field type='text' placeholder='enter category id' className='form-control' name='categoryid'/> */}
                                    <Field name='categoryid' as='select' className='form-control'>
                                        <option value='' default>Select Category</option>
                                        {data.map((item) => {
                                            return <option value={item.id}>{item.name}</option>
                                        })}


                                    </Field>
                                    <ErrorMessage name='categoryid' render={msg => <div className='text-danger'>{msg}</div>} />
                                    <label htmlFor="">Rack id :</label>
                                    {/* <Field type='text' placeholder='enter rack id' className='form-control' name='rackid'/> */}
                                    <Field name='rackid' as='select' className='form-control'>
                                        <option value='' default>Select Rack</option>
                                        {rackdata.map((item) => {
                                            return <option value={item.id}>{item.rackNo}</option>
                                        })}
                                    </Field>
                                    <ErrorMessage name='rackid' render={msg => <div className='text-danger'>{msg}</div>} />
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

export default AddBook