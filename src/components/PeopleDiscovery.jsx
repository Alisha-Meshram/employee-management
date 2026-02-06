import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaArrowDownLong } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

import { FaEdit } from 'react-icons/fa';
import { GoDotFill } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

const PeopleDiscovery = () => {
  const [data,setData]=useState([])
  const navigate=useNavigate()

 async function getData(){
    const res=await axios.get("https://696dd8ced7bacd2dd714ba5e.mockapi.io/employee-management")
    setData(res.data)
  }
  useEffect(()=>{
    getData()
  },[])

  async function deleteData(id){
    try {
      await axios.delete(`https://696dd8ced7bacd2dd714ba5e.mockapi.io/employee-management/${id}`)
      getData()
      alert("delete sucessfully")
    } catch (error) {
      console.log(error)
    }

  }
  return (
   
    <div className='p-3 ' style={{width:'1075px',height:'901px'}}>
      {/* top heading */}
<div   style={{display:'flex',justifyContent:'space-between'}}>
  <div className='d-flex gap-2'>
<h4 style={{fontSize:'18px',fontWeight:'600',color:'#101828'}}>Team Member</h4>
<span style={{color:'#6941C6',fontSize:'14px',fontWeight:'500',lineHeight:'20px'}}>100 User</span>
  </div>
  <div className='d-flex gap-2'>
  <InputGroup className="mb-3" style={{width:'312px',height:'36px'}}>
        <Form.Control
          placeholder="Search"
        />
        <Button variant="outline-secondary" id="button-addon2" >
         <IoSearchOutline  />
        </Button>
      </InputGroup>
      <span style={{height:'24px',width:'24px'}} ><CiFilter size={22} /></span>
    <button onClick={()=>{navigate("/add")}} style={{background:'#6941C6',width:'150px',color:'white',height:'36px',padding:'8px',border:'none'}} >+ Add Member</button>
  </div>
</div>

{/* 2nd eading */}
<div style={{display:'flex',justifyContent:'space-between'}}>
  <p style={{width:'279px'}}>Name <span><FaArrowDownLong /></span></p>
  <p style={{width:'109px'}}>Status <FaArrowDownLong /></p>
  <p style={{width:'179px'}}>Role <CiCircleQuestion /></p>
  <p style={{width:'208px'}}>Email Address</p>
  <p style={{width:'294px'}}>Team</p>
  <p style={{width:'116px'}}></p>
</div>

     
      {
        data.map((item)=>{
const{id,name,img,role,status,email,team}=item
          return(
<div key={item.id}  style={{display:'flex',justifyContent:'space-between',borderBottom:'1px solid gray',padding:'1rem 0'}}>



         
          <td style={{width:'279px'}}> <img src={img} alt="" style={{width:'36px',height:'36px',borderRadius:'100%'}} />{name}</td>
          <td style={{width:'109px'}}><button style={{border:'1px solid gray',borderRadius:'6px',fontSize:'12px',fontWeight:'500',background:'white',color:'#344054'}}><GoDotFill color='green' /> {status}</button></td>
          <td style={{width:'179px'}}>{role}</td>
          <td style={{width:'208px'}}>{email}</td>
          <td style={{width:'294px'}}>{team}</td>
          <div style={{width:'116px'}}>
          <RiDeleteBin6Line onClick={()=>{deleteData(id)}} className='mx-3' style={{width:'15px',height:'16.67px',color:'#475467'}} />
          <FaEdit style={{width:'15px',height:'16.67px',color:'#475467'}}  />
          </div>
        
       
</div>


          )
        })
      }
       
       
       
     
  
    
    </div>
  )
}

export default PeopleDiscovery
