import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Protected = ({children}) => {
    const navigate = useNavigate()
    const location = useLocation()
    
    
    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user')) || null
        if(user == null){
         return navigate('/login')
        }
        
        if(user.email && location.pathname == '/login' && user.role=="Admin"){
            navigate('/main')
        }
        // if(user.email && location.pathname == '/login' && user.role=="Admin"){
        //     navigate('/main')
        // }
        if(user.email && location.pathname == '/register' && user.role=="Admin"){
            navigate('/main')
        }
        if(user.email  && user.role=="User"){
            navigate('/usertable')
        }

        if(user.email  && user.role=="User"){
            return navigate('/usertable')
        }
    },[navigate])

  return (
    <>
    {children}
    </>
  )
}

export default Protected