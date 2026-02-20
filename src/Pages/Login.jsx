import axios from "axios";
import React, { useState } from "react";
import { Button} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
//   function Login(e) {
//     e.preventDefault();
//     if (!email || !password) {
//       setError("Fill the Information");
//     }

//     if (email === "user@gmail.com" && password === "12345") {
//       navigate("/home/overview");
//     } else {
//       setError("Please Enter Valid Information");
//     }
//   }

  async function login(e){
  e.preventDefault()
  try {
    await  axios.post("http://localhost:8000/login",{email,password})
    toast.success("login successfull")
    navigate("/home/overview");

  } catch (error) {
      console.log(error)
  }
  }

  return (
    <div
    
    >
      <Form onSubmit={login} className="w-50 border border-dark mx-auto p-4 my-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email: </Form.Label>
          <Form.Control
            type="email"
          value={email}
          placeholder="Enter Email"
          onChange={(e) => {
            setEmail(e.target.value);
            }}
          />
        </Form.Group>
        {/* <label>Email: </label>
        <input
          className="my-3 w-75"
          type="email"
          value={email}
          placeholder="Enter Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        /> */}
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Password: </Form.Label>
          <Form.Control
           type="password"
          value={password}
          placeholder="Enter Password"
          onChange={(e) => {
            setPassword(e.target.value);
            }}
          />
        </Form.Group>
        {/* <label>Password: </label>
        <input
          className="my-3 w-75"
          type="password"
          value={password}
          placeholder="Enter Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        /> */}
       
        <Button type="submit">Sumit</Button>
<br />
        <Button  className="w-100 mx-auto my-3 bg-success"
        onClick={() => {
          navigate("/register");
        }}
      >
        Registration here
      </Button>
      </Form>
<Toaster />
     
    </div>
  );
};

export default Login;
