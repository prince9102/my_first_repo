import axios from 'axios'
import React, { useState , useEffect } from 'react'
import ReactPaginate from 'react-paginate';
const Pagination = () => {
const [data , setdata] = useState([])
const [page , setPage] = useState(0)
const[totalPage , setTotalPage] = useState(0)

useEffect(()=>{

    axios.get(`https://jsonplaceholder.typicode.com/comments?_page=${page+1}&_limit=5`)
    .then((res)=>{setdata(res.data)
    console.log(res.data)})
    .catch(error=>console.log(error))
},[page])

const handlePageClick=(data)=>{
    setPage(data.selected)

}

useEffect(()=>{
    const fetchtotal =()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments')
        
        .then((res)=>{
        const totalRecords = res.data.length
        setTotalPage(Math.ceil((totalRecords/5)))
    console.log(totalRecords)})

    }
    fetchtotal()
},[])


const handleDelete =(id)=>{
  axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`)
  .then((res)=>console.log(res.data))
}
  return (
    <>


    <table className='table'>
        <thead>
      <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Action</th>

      </tr>
        </thead>
      <tbody>
        {data.map((item)=>{
          return <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td><button className='btn btn-danger' onClick={(e)=>handleDelete(item.id)}>Delete</button></td>

          </tr>
        })}
      </tbody>
    </table>

   
      <ReactPaginate
      containerClassName='pagination '
      pageClassName='page-item'
      pageLinkClassName='page-link'

        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPage}
        previousLabel="< previous"
        breakClassName='page-item'
        previousClassName='page-item'
        previousLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        breakLinkClassName='page-link'
        renderOnZeroPageCount={null}
        activeClassName='active'
      />

    </>
  )
}

export default Pagination