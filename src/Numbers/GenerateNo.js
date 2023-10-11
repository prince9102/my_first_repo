import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import {Row} from 'react-bootstrap';

const GenerateNo = () => {
    const [inputNumber , setInputNumber] = useState('')
    const [newno , setNewNo] = useState([])
    // const [selectedNumbers, setSelectedNumbers] = useState('');

    const [selectedValue , setSelectedValue] = useState('')



    // const handleChange = (number) => {
    //     setSelectedNumbers((prev) => {
    //       if (prev.includes(number)) {
    //         return prev.filter((num) => num !== number);
    //       } else {
    //         return [...prev, number];
    //       }
    //     });
    //   };


    const handleSubmit =()=>{


        if (!isNaN(inputNumber) && inputNumber > 0) {
            const numbers = Array.from({ length: inputNumber }, (index) => index + 1);
            setNewNo(numbers)
            
           
        }
        
        setInputNumber('')
    
}



const submit =()=>{
// if(selectedValue){

  const data ={selectedValue}

     axios.post('http://localhost:3002/number', data)
            .then((res)=>{console.log(res)

            })
            .catch(error=>console.log(error))
            
          // }        
}



  return (
   <>
   <div className='d-flex justify-content-center align-items-center w-100vw vh-100'>
    <div className='w-50 bg-white border shadow row'>
    <h1>Generate Numbers </h1>
        <div className='col-md-4'>
        <input type="number" className='form-control' value={inputNumber}   onChange={(e)=>setInputNumber(e.target.value)} />
 <button className='btn btn-primary m-2' onClick={handleSubmit}>Generate</button>
        </div>
   
    <Row>

{newno.map((item,index)=>{
    
    return <Col md={2}>
     <div key={index} 
      style={{

// border:'1px solid black',
padding:'10px',
margin:'5px',
cursor:'pointer',
backgroundColor:item == selectedValue ? 'blue' :'white',
color:item==selectedValue ? 'white' : 'black',
border:item==selectedValue ? '2px solid black' : ''

      }}
      >

 
{item}

onClick={()=>setSelectedValue(item)}
    </div>
</Col>
})}
</Row>
   <button  className='btn btn-info' onClick={submit}>Submit</button>
   </div>
    </div>
   </>

  )
}

export default GenerateNo