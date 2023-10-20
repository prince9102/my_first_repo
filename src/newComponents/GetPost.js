import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { Row , Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const GetPost = () => {

 

    const [data , setData] = useState([])
  const [search , setSearch] = useState('')
  const[prev , setPrev] = useState(0)
  const [next, setNext] = useState(4)

    useEffect(()=>{
     axios.get('http://localhost:3002/postdata')
     .then((res)=>{setData(res.data)
    console.log(res)})
    .catch(error=>console.log(error))
    },[])
  return (
   <>
<div className='col-md-12'>
<input type='search' placeholder='search here' className='form-control mb-3' onChange={(e)=>setSearch(e.target.value)}></input>

</div>


<Row>
 {data.filter((d)=>{
  if(search == '' || d.username.toLowerCase().includes(search.toLowerCase())){
    return d;
  }
 })
 .slice(prev, next).map((item , index)=>{
    return <Col md={3}>
    <Card key={index}  style={{ width: '18rem', marginInline:10 }}>
      <Card.Img variant="top" src={item.image}  alt={item.username}/>
      <Card.Body>
        <Card.Title>{item.username}</Card.Title>
        <Card.Text>
          {item.content}
        </Card.Text>
      <p>{item.date}</p>
      <p>{item.comments}</p>
      </Card.Body>
    </Card>
    </Col>})}
    </Row>
  

    <button 
    onClick={()=>{
      if(prev !==0){
        setPrev(prev-4)
        setNext(next-4)
      }
    }}
     className='btn btn-primary'>Prev</button>
    
    <button
    onClick={()=>{
      if(next<data.length){
        setPrev(prev+4)
        setNext(next+4)
      }
    }}
     className='btn btn-primary m-2'>Next</button>
    
   </>
  )
}

export default GetPost