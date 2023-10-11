import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Table() {

    const [data , setData] = useState([])
    const [prev , setPrev] = useState(0)
    const [next , setNext] = useState(10)
    const [search , setSearch] = useState('')

    useEffect(()=>{

        getData()
    },[])

   

   

    const getData = ()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((res)=>{setData(res.data)
        console.log(res.data)
    
    //   data.filter((d)=>{
    //      const matchsearch = !search || d.title.toLowerCase().includes(search.toLowerCase())
    //      return matchsearch
    //   })
    })
        .catch(error=>console.log(error))
    }
  return (
    <>
    <div className='col-md-6'>
    <label htmlFor="">Search Here :</label>
    <input type="text" placeholder='search' onChange={(e)=>setSearch(e.target.value)}  className='form-control'/>

    </div>
  <table className='table table-border stripped'>
    <thead>
        <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Title</th>
            <th scope='col'>Completed</th>
        </tr>
    </thead>
    <tbody>
   


       {data.filter((d)=>{
  if(search == '' || d.title.toLowerCase().includes(search.toLowerCase())){
    return d ; 
}
       })
       
       .slice(prev, next)
       .map((item,index)=>{
       return <tr key={index}>
        <td >{item.id}</td>
        <td>{item.title}</td>
        <td>{item.completed}</td>
       </tr>
       })}
    </tbody>
  </table>

  <button
  onClick={()=>{
  prev>0 &&
  setPrev(prev-10)
  setNext(next-10)
   } }
   className='btn btn-primary'>Prev</button>

   <button onClick={()=>{
    setPrev(prev+10)
    setNext(next+10)
   }}
   className='btn btn-primary'>Next</button>
    </>
  )
}

export default Table