import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function sendData(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/register", {
        name,
        email,
        password,
      });
      toast.success("Registation Successfull")
      setEmail("");
      setName("");
      setPassword("");
      navigate("/");
     
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h2 className="text-center my-3">Registration here </h2>
      <Form onSubmit={sendData} className="w-50 border border-dark mx-auto p-4">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Names</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Toaster />
    </div>
  );
}

export default Register;
