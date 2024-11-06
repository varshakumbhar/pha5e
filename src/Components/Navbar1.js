import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';



function Navbar1()
{
     return(
        <>
        
    <Navbar id='navbar' expand="lg" style={{color:'white'}} className='justify-content-between' >
      <Container>
        <Row>
          <Col>
        <Navbar.Brand style={{color:'white'}}><h1>PHA5E</h1></Navbar.Brand>
        </Col>
        <Col>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/team'} style={{color:'white'}}>Our Teams</Nav.Link>
            {/* <Nav.Link href="#link" style={{color:'white'}}>Link</Nav.Link>
            <Nav.Link href="#link" style={{color:'white'}}>Link</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
        </Col>
        </Row>
      </Container>
    </Navbar>
  
   </>
    
     )
}
export default Navbar1