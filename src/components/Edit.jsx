import axios from "axios";
import React, { useEffect,useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';

import Button from "react-bootstrap/Button";
const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  //put
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const teamOption = ["Design", "Marketing", "Product", "Finanace", "HR"];
  const [team, setTeam] = useState([]);
  const [status, SetStatus] = useState("");
  const [msg, setMsg] = useState("");

  async function getInformation() {
    const res = await axios.get(
      `http://localhost:8000/user/${id}`
    );
    console.log(res.data);
    setName(res.data.name);
    setEmail(res.data.email);
    setImg(res.data.img);
    setRole(res.data.role);
    setTeam(Array.isArray(user.team)? user.team:[user.team]);
    SetStatus(res.data.status);
  }

  useEffect(() => {
    getInformation();
  }, []);
  async function updateData(e) {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:8000/updateuser/${id}`,
        { name, email, img, status, role, team }
      );
      alert("update data sucessfully");
      navigate('/home/peopleDiscover')
    } catch (error) {
      console.log(error);
    }
  }

  function addTeam(item) {
    if (!item) return;
    if (team.includes(item)) {
      setMsg(`${item} is alredy added`);
    } else {
      setTeam([...team, item]);
      setMsg("");
    }
  }

  function removeTeam(item) {
    setTeam(team.filter((t) => t !== item));
  }

  return (
    <div>
      <Form onSubmit={updateData} style={{ padding: "1rem" }}>
      <div style={{ margin: "auto", width: "100px" }}>
          <img
            src={img}
            alt=""
            style={{
              height: "100px",
              width: "100px",
              borderRadius: "100%",
              border: "1px solid gray",
            }}
          />
        </div>
        <span>
          <Form.Control
            type="text"
            style={{ width: "300px", margin: "1rem auto" }}
            placeholder="Enter url"
            value={img}
            onChange={(e) => {
              setImg(e.target.value);
            }}
          />
        </span>

        <div className="d-flex gap-5">
          <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
        </div>
        <div className="d-flex gap-5">
          <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
            <Form.Label>Role</Form.Label>
            <Form.Select
              value={role}
              onChange={(e) => {
                setRole(e.target.value);
              }}
            >
              <option value="Role">Role</option>
              <option value="Product Designer">Product Designer</option>
              <option value="Product Devloper">Product Devloper</option>
              <option value="UX Designer">UX Designer</option>
              <option value="UX Copywriter">UX Copywriter</option>
              <option value="UI Designer">UI Designer</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
            <Form.Label>Status</Form.Label>
            <Form.Select
              value={status}
              onChange={(e) => {
                SetStatus(e.target.value);
              }}
            >
              <option value="status">Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </Form.Select>
          </Form.Group>
        </div>
        <div className="d-flex gap-5">
          <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
            <Form.Label>Team</Form.Label>
            <div style={{ display: "flex", gap: "10px" }}>
              {team.map((item) => {
                return (
                  <span
                    key={item}
                    onClick={() => {
                      removeTeam(item);
                    }}
                  >
                    {item}*
                  </span>
                );
              })}
              <Form.Select
                onChange={(e) => {
                  addTeam(e.target.value);
                  e.target.value = "";
                }}
              >
                {teamOption.map((item) => {
                  return (
                    <option
                      style={{
                        border: "1px solid #6941C6",
                        borderRadius: "6px",
                        fontSize: "12px",
                        fontWeight: "500",
                        background: "white",
                        color: "#6941C6",
                        padding: "4px 10px",
                        marginLeft: "5px",
                      }}
                      key={item}
                      value={item}
                    >
                      {item}
                    </option>
                  );
                })}
              </Form.Select>
            </div>
           
          </Form.Group>
        </div>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default Edit;
