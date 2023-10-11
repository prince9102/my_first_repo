import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PostData = () => {

    const [username , setUsername] = useState('')
    const [content , setContent] = useState('')
    const [date, setdate] = useState('')
    const [image, setimage] = useState('')
    const [comments, setcomments] = useState('')
    const navigate = useNavigate()



const submitData =()=>{
    let user= {username , content , date, image , comments}

    axios.post(' http://localhost:3002/postdata' , user)
    .then((res)=>console.log(res))
    .catch(error=>console.log(error))

     navigate('/getpost')
}

const handleChange =(e)=>{
    console.log(e.target.files)
    const img = new FileReader()
    img.onload =()=>{
        setimage(img.result)
    }
    img.readAsDataURL(e.target.files[0])

}

console.log(image)

  return (
   <>
   <div className='d-flex flex-column justify-content-center align-items-center  '>
   <div className='w-50 bg-white border shadow px-3 py-3'>
   <h2>Add Post</h2> 
   <form onSubmit={submitData}>
   <div className='col-md-6'>
   <label htmlFor="">Author Name : </label>
   <input type="text" placeholder='Enter author name' className='form-control' onChange={(e)=>setUsername(e.target.value)} />
   
   </div>
  

   <div className='col-md-6'>
   <label htmlFor="">Created Date :</label>
   <input type="date" className='form-control' onChange={(e)=>setdate(e.target.value)} />
  <div>
  <label htmlFor="">Post Content :</label>
   <textarea  rows={4} cols={40} className='form-control' onChange={(e)=>setContent(e.target.value)} />
  </div>

   <label htmlFor="">Select Image :</label>
   <input type="file" className='form-control' onChange={handleChange}/>
   <img src={image} />
   <div>
    <label htmlFor="">Comments :</label>
    <textarea rows={4} cols={40} className='form-control' onChange={(e)=>setcomments(e.target.value)} />
   </div>

   </div>
<button type='submit' className='btn btn-outline-primary m-2'>Submit</button>


   </form>

   </div>

   </div>


   </>
  )
}

export default PostData