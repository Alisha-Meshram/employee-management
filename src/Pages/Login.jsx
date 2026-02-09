import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[error,setError]=useState("")

    const navigate=useNavigate()
    function Login(e){
        e.preventDefault()
        if(!email || !password){
            setError("Fill the Information")
        }

        if(email==="user@gmail.com"&& password==="12345"){
navigate("/home/overview")
        }else{
            setError("Please Enter Valid Information")
        }

    }

  return (
    <div className=''  style={{height:'70%',fontSize:'1.2rem',textAlign:'center',border:'1px solid black',padding:'1rem',margin:'2rem auto',width:'30%',borderRadius:'8px'}} >
    <Form onSubmit={Login}>
    <label>Email: </label>
        <input className='my-3 w-75' type="email" value={email} placeholder='Enter Email' onChange={(e)=>{setEmail(e.target.value)}} /><br />
        <label>Password: </label>
        <input className='my-3 w-75' type="password" value={password} placeholder='Enter Password' onChange={(e)=>{setPassword(e.target.value)}} /><br />
        <Button type='submit'>Sumit</Button>
    </Form>
    
    </div>
  )
}

export default Login
