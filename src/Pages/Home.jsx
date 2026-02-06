import React from 'react'
import Sidebar from '../components/Sidebar'
import Screen from '../components/Screen'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { CiBellOn } from "react-icons/ci";
const Home = () => {
  return (
    <div>
<Navbar className="bg-body-tertiary">
      <Container >
        <Navbar.Brand  style={{fontSize:'38px',fontWeight:'700',fontFamily:'intel',color:'#6941C6'}}>PEOPLE.CO</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='' >
            <CiBellOn size={21} /><span  href="#login" className='mx-2'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3m972e8FEvBi7ETC03avlJcZDg8nT9dWLSw&s" alt="" style={{width:'36px',height:'36px',borderRadius:'100%',fontSize:'1rem',fontWeight:'400'}} />  John Doe</span>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
    <div className='d-flex'>
    <Sidebar  />
    <Screen />
    </div>
    
    </div>
  )
}

export default Home
