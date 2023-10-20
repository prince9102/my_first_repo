import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import moment from 'moment';
import Swal from 'sweetalert2';
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

const Employee = () => {

    const [data, setdata] = useState([])
    const [state, setState] = useState('')
    const [search, setsearch] = useState('')
    const [loading, setloading] = useState(false)

    const { id } = useParams()

    useEffect(() => {
        setloading(true)
        axios.get('http://localhost:3002/employee')
            .then((res) => {
                setdata(res.data)

                setloading(false)
            })
    }, [state])

    const initial = {
        name: '',
        date: '',
        time: ''
    }

    const validation = yup.object({
        name: yup.string().required(),
        date: yup.string().required(),
        time: yup.string().required()
    })

    const submit = (e) => {
        axios.post('http://localhost:3002/employee', e)
            .then((res) => {
                setState(Math.random())
                console.log(res.data)
                const currentDate = moment().format("MM/DD/YYYY")
            })

        toast.success('Success Notification !', {
            position: toast.POSITION.TOP_CENTER
        });
        // Swal.fire({
        //     position: 'top-mid',
        //     icon: 'success',
        //     title: 'Your work has been saved',
        //     showConfirmButton: false,
        //     timer: 1500
        //   })
    }

    const handleDelete = (item) => {

        console.log(item)
        axios.post('http://localhost:3002/delete/', item)
            .then((res) => {
                console.log(res)
            })


        axios.delete('http://localhost:3002/employee/' + item.id)
            .then((res) => {
                setState(Math.random())
                console.log(item.id)
            })
    }

    return (
        <>
            <Formik

                initialValues={initial}
                validationSchema={validation}
                onSubmit={(value) => {
                    submit(value)
                }}
            >


                <Form>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <label htmlFor="">Employee Name</label>
                                <Field type='text' name='name' className='form-control' placeholder='enter name' />
                                <label htmlFor="">Date</label>
                                <Field type='date' name='date' className='form-control' />
                                <label htmlFor="">Time</label>
                                <Field type='time' name='time' className='form-control' />
                                <button className='btn btn-primary m-3'>Submit</button>
                            </div>
                        </div>

                    </div>
                </Form>
            </Formik>
            <label htmlFor="">Search name : </label>
            <div className='col-md-4'>
                <input type="text" className='form-control' placeholder='search here' onChange={(e) => setsearch(e.target.value)} />

            </div>

            <div>
                <table className='table bordered '>
                    <thead>
                        <tr>
                            <th scope='col'>Employee Name</th>
                            <th scope='col'>Date</th>
                            <th scope='col'>Time</th>
                            <th scope='col'>Date Status</th>
                            <th scope='col'>Status</th>
                            <th scope='col'>Action</th>

                        </tr>
                    </thead>
                    <tbody>

                        {!loading ?
                            data.filter((d) => {
                                if (search == '' || d.name.toLowerCase().includes(search.toLowerCase())) {
                                    return d;
                                }
                            }).map((item) => {
                                return <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.date}</td>
                                    <td>{item.time}</td>
                                    <td>

                                        {moment(item.date).isSame(moment().format("MM/DD/YYYY")) ? 'Today' :
                                            moment(item.date).isBefore(moment().format("MM/DD/YYYY")) ? 'Before' : 'After'

                                        }
                                    </td>
                                    <td>

                                        {moment(item.date + " " + item.time).isSame(item.date + " " + '10:00') || moment(item.date + " " + item.time).isBefore(item.date + " " + '10:00') ? "fullday"
                                            : moment(item.date + " " + item.time).isAfter(item.date + " " + '10:00') && moment(item.date + " " + item.time).isBefore(item.date + " " + '13:00') ? "short leave"
                                                : "half day"}
                                    </td>
                                    <td >
                                        <button className='btn btn-danger' onClick={(e) => handleDelete(item)}>Delete</button>
                                    </td>
                                </tr>
                            })

                            :

                            <tr>
                                <td colSpan={8}>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <ClipLoader
                                            color="red"
                                            setloading={true}
                                            size={200}
                                            aria-label="Loading Spinner"
                                            data-testid="loader"
                                        />
                                    </div>
                                </td>
                            </tr>}


                        {/* <div style={{display:'flex' ,  justifyContent: 'center', alignItems:'center '}}>          
                        <ClipLoader
        color='red'
        loading={true}
       
        size={300}
        aria-label="Loading Spinner"
        data-testid="loader"
      />   
      </div>                      */}
                        {/* } */}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Employee