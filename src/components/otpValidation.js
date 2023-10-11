import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const OtpValidation = () => {
    const [otpVal , setOtpVal] = useState('')
    const navigate = useNavigate()

    const validate =()=>{
      
       {otpVal==localStorage.getItem( 'otpGenerate') ? navigate('/get')
        : 
        alert('otp not match')}

    }

  return (
    <div >
    <div className='container d-flex justify-content-center  my-5'>
        <div className='card w-50' >
            <h2 className='card-header'>Otp Validation</h2>
            <div className='body my-2'>
                <label htmlFor="">Enter Otp:</label>
                <input type="text"  onChange={(e)=>setOtpVal(e.target.value)} />
            </div>
            <div className=' card-footer'>
                <button  className='btn btn-primary' onClick={validate}>Submit</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default OtpValidation