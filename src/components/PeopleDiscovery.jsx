import axios from "axios";
import React, { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaArrowDownLong } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import { FaEdit } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const PeopleDiscovery = () => {
  const [data, setData] = useState([]);
  const[currentPage,setCurrentPage]=useState(1);
  const[search,setSearch]=useState("")
  const itemPage=5;
  const navigate = useNavigate();

  async function getData() {
    const res = await axios.get(
      "https://696dd8ced7bacd2dd714ba5e.mockapi.io/employee-management"
    );
    setData(res.data);
  }
  useEffect(() => {
    getData();
  }, []);


  const filteredData = data.filter((item) => {
    const value = search.toLowerCase();
  
    return (
      item.name.toLowerCase().includes(value) ||
      item.email.toLowerCase().includes(value) ||
      item.role.toLowerCase().includes(value) ||
      item.team.toLowerCase().includes(value) ||
      item.status.toLowerCase().includes(value)
    );
  });

  async function deleteData(id) {
    try {
      await axios.delete(
        `https://696dd8ced7bacd2dd714ba5e.mockapi.io/employee-management/${id}`
      );
      getData();
      alert("Are You sure you want to delete this member details? This action can not be undone.");
    } catch (error) {
      console.log(error);
    }
  }

  const indexLastPage=currentPage* itemPage;
const indexFirstPage=indexLastPage-itemPage;
const handlePage=((pageNumber)=>{
  setCurrentPage(pageNumber)
  })
  return (
    <div className="p-3 " style={{ width: "1075px", height: "901px" }}>
      {/* top heading */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="d-flex gap-2">
          <h4 style={{ fontSize: "18px", fontWeight: "600", color: "#101828" }}>
            Team Member
          </h4>
          <span
            style={{
              color: "#6941C6",
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "20px",
            }}
          >
            100 User
          </span>
        </div>
        <div className="d-flex gap-2">
          <InputGroup
            className="mb-3"
            style={{ width: "312px", height: "36px" }}
          >
            <Form.Control placeholder="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
            <Button variant="outline-secondary" id="button-addon2">
              <IoSearchOutline />
            </Button>
          </InputGroup>
          <span style={{ height: "24px", width: "24px" }}>
            <CiFilter size={22} />
          </span>
          <button
            onClick={() => {
              navigate("/add");
            }}
            style={{
              background: "#6941C6",
              width: "150px",
              color: "white",
              height: "36px",
              padding: "8px",
              border: "none",
            }}
          >
            + Add Member
          </button>
        </div>
      </div>

      {/* 2nd eading */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ width: "279px" }}>
          Name{" "}
          <span>
            <FaArrowDownLong />
          </span>
        </p>
        <p style={{ width: "109px" }}>
          Status <FaArrowDownLong />
        </p>
        <p style={{ width: "179px" }}>
          Role <CiCircleQuestion />
        </p>
        <p style={{ width: "208px" }}>Email Address</p>
        <p style={{ width: "294px" }}>Team</p>
        <p style={{ width: "116px" }}></p>
      </div>

      {filteredData.slice(indexFirstPage,indexLastPage).map((item) => {
        const { id, name, img, role, status, email, team } = item;
        return (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid gray",
              padding: "1rem 0",
            }}
          >
            <td style={{ width: "279px" }}>
             
              <img
                src={img}
                alt=""
                style={{ width: "36px", height: "36px", borderRadius: "100%" }}
              />
              {name}
            </td>
            <td style={{ width: "109px" }}>
              <button
                style={{
                  border: "1px solid gray",
                  borderRadius: "6px",
                  fontSize: "12px",
                  fontWeight: "500",
                  background: "white",
                  color: "#344054",
                }}
              >
                <GoDotFill color="green" /> {status}
              </button>
            </td>
            <td style={{ width: "179px" }}>{role}</td>
            <td style={{ width: "208px" }}>{email}</td>
            <td style={{ width: "294px" }}>{team}</td>
            <div style={{ width: "116px" }}>
              <RiDeleteBin6Line
                onClick={() => {
                  deleteData(id);
                }}
                className="mx-3"
                style={{ width: "15px", height: "16.67px", color: "#475467" }}
              />
              <FaEdit
                style={{ width: "15px", height: "16.67px", color: "#475467" }}
              />
            </div>
          </div>
        );
      })}

      <div style={{display:'flex',justifyContent:'space-between',marginTop:'2rem'}}>
      <button style={{color:'#344054',borderRadius:'10px',padding:'8px',fontSize:'1rem',fontWeight:'600'}} disabled={currentPage===1} onClick={()=>{handlePage(currentPage-1)}}><FaArrowLeft /> Previous</button>
      <div>

   
    {
      [...Array(itemPage).keys()].map((num)=>{
        return(
          <button style={{border:'none',margin:'10px',gap:'12px',fontSize:'14px',fontWeight:'600',padding:'8px',borderRadius:'8px',color:'#101828'}} disabled={currentPage===num+1} onClick={()=>{handlePage(num+1)}}>{num+1}</button>
        )
      })
    }
    </div>
    <button style={{color:'#344054',borderRadius:'10px',padding:'8px',fontSize:'1rem',fontWeight:'600'}}   disabled={currentPage===5} onClick={()=>{handlePage(currentPage+1)}}>Next <FaArrowRight /></button>
      </div>

    
    </div>
  );
};

export default PeopleDiscovery;
