import { height } from '@mui/system';
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

const PostOffice = () => {

    const [data, setData] = useState([])
    const [prev, setPrev] = useState(0)
    const [next, setNext] = useState(5)
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)
   
    useEffect(() => {
        setLoading(true)
        axios.get('https://api.postalpincode.in/pincode/844122')
            .then((res) => {
                setData(res.data[0].PostOffice)

                setLoading(false)

                console.log(res)
              
            })
            .catch(error => {
                setLoading(false)
            })
    }, [])


    return (
        <>

            <div className='d-flex flex-column justify-content-center align-items-center'>

                <h1>Post Office Data</h1>
                <div>
                    <label htmlFor="">Search Name : </label>
                    <input type="search" className='form-control my-2' onChange={(e) => {
                        setSearch(e.target.value)
                        // handleSearch()
                    }} placeholder='search' />
                </div>
                <div className='w-50 bg-white border shadow'>
                    <table className='table table-striped'>
                        <thead>    <tr>
                            <th scope='col'>Name</th>
                            <th scope='col'>BranchType</th>
                            <th scope='col'>DeliveryStatus</th>
                            <th scope='col'>Region</th>
                        </tr>
                        </thead>
                        <tbody>
                            {!loading ? data.filter((d) => {
                                if (search == '' || d.Name.toLowerCase().includes(search.toLowerCase())) {
                                    return d;
                                }
                            })
                                .slice(prev, next).map((item, index) => {
                                    return <tr key={index}>
                                        <td>{item.Name}</td>
                                        <td>{item.BranchType}</td>
                                        <td>{item.DeliveryStatus}</td>
                                        <td>{item.Region}</td>
                                    </tr>
                                })

                                :
                                <tr>
                                    <td colSpan={4}>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
                                          <ClipLoader
                                            color="red"
                                            loading={true}
                                            size={120}
                                            aria-label="Loading Spinner"
                                            data-testid="loader"
                                        />
                                        </div>
                                    </td>

                                </tr>

                            }
                        </tbody>



                    </table>

                    <button
                        onClick={() => {
                            if (prev != 0) {
                                setPrev(prev - 5);
                                setNext(next - 5)
                            }
                        }}
                        className='btn btn-outline-primary m-2'>Prev</button>

                    <button
                    
                        onClick={() => {
                            if(next< data.length){
                            setPrev(prev + 5);
                            setNext(next + 5)
                        }}}
                        className='btn btn-outline-primary m-3'>Next</button>

                </div>

            </div>


        </>
    )
}

export default PostOffice;