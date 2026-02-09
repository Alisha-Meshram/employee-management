import axios from 'axios'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


const Create = () => {

    // for modals



    const navigate=useNavigate()

    // post
    const[name,setName]=useState("")
    const[img,setImg]=useState("")
    const[email,setEmail]=useState("")
    const[role,setRole]=useState("")
    const[team,setTeam]=useState("")
    const[status,SetStatus]=useState("")

async function sendData(e){
e.preventDefault()
try {
   await axios.post("https://696dd8ced7bacd2dd714ba5e.mockapi.io/employee-management",{name,img,email,status,role,team})
   alert("data added")
   navigate('/home/peopleDiscover')
} catch (error) {
    console.log(error)
}
}

  return (
    <div className='p-3' style={{border:'1px solid gray',margin:'5rem',borderRadius:'20px'}}>
       


      <Form onSubmit={sendData} style={{padding:'1rem'}}>
      <div style={{margin:'auto',width:'100px'}}>
        <img src={img} alt="" style={{height:'100px',width:'100px',borderRadius:'100%',border:'1px solid gray'}} />
     
      </div>
     <span>
     
     <Form.Control type="text" style={{width:'300px', margin:'1rem auto'}} placeholder="Enter url" value={img} onChange={(e)=>{setImg(e.target.value)}} />
     </span>
      
       
    
      <div className='d-flex gap-5'>
      <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>{setName(e.target.value)}} />
       
      </Form.Group>
      <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      </Form.Group>
</div>
  <div className='d-flex gap-5'>
     
      <Form.Group className="mb-3 w-50" controlId="formBasicPassword" >
        <Form.Label>Role</Form.Label>
        <Form.Select  value={role} onChange={(e)=>{setRole(e.target.value)}}>
        <option value="Role">Role</option>
          <option value="Product Designer">Product Designer</option>
          <option value="Product Devloper">Product Devloper</option>
          <option value="UX Designer">UX Designer</option>
          <option value="UX Copywriter">UX Copywriter</option>
          <option value="UI Designer">UI Designer</option>
        </Form.Select>
      
      </Form.Group>
      <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
      <Form.Label >Status</Form.Label>
      <Form.Select value={status} onChange={(e)=>{SetStatus(e.target.value)}}>
      <option value="status">Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </Form.Select>
       
     
      </Form.Group>
      </div>
      <div className='d-flex gap-5'>

      <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
        <Form.Label>Team</Form.Label>
        <Form.Select value={team} onChange={(e)=>{setTeam(e.target.value)}}>
      <option value="team">Team</option>
          <option value="Design">Design</option>
          <option value="Finance">Finance</option>
          <option value="Product">Product</option>
          <option value="Marketing">Marketing</option>
        </Form.Select>
        
    
      </Form.Group>
     </div>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Create
