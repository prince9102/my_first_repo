import axios from 'axios'
import React, { useEffect, useState } from 'react';
import moment from "moment";

const Date = () => {
    const [selectdate , setSelectDate] = useState('')
    const [status , setStatus] = useState('')
    const [data , setData] = useState([])

    useEffect(()=>{
      axios.get('http://localhost:3002/date')
      .then((res)=>{setData(res.data)
    console.log(res)})
    .catch(error=>console.log(error))
    },[])

    const handleSubmit =()=>{

        const dateStatus = getStatus(selectdate)
        const value =
         {date:selectdate,
            status:dateStatus
        }
        axios.post('http://localhost:3002/date',value)
        .then((res)=>{console.log(res)})
        .catch(error=>console.log(error))
    }

    const getStatus =(selectdate)=>{
const currentDate = moment().format("MM/DD/YYYY")

if(moment(selectdate).isSame(currentDate)){
    return 'today';

} 
else if(moment(selectdate).isBefore(currentDate)){    
    return 'before';
}
else{
    return 'after';
}
    }

  return (
  <>
<div className='row'>
<div className='col-md-6'>
    <input type="date" className='form-control' onChange={(e)=>setSelectDate(e.target.value)} />
<button className='btn btn-primary m-3' onClick={handleSubmit}>Submit</button>
</div>

</div>

<div className='d-flex justify-content-center align-items-center w-100vw vh-100'>
<div className='w-50 bg-white border shadow'>

<table className='table '>
        <thead>
    <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Date</th>
            <th scope='col'>Status</th>
    </tr>
        </thead>

    <tbody>
        {data.map((item ,index)=>{
            return <tr key={index}>
                <td>{item.id}</td>
                <td style={{
                    backgroundColor: moment(item.date).isBefore(moment().format("MM/DD/YYYY")) ? 'blue' : moment(item.date).isAfter(moment().format("MM/DD/YYYY")) ? 'green' : 'white'
                }}>{item.date}</td>
                <td>{item.status}</td>
            </tr>
        })}
    </tbody>
</table>

</div>

</div>
  </>
  )
}

export default Date