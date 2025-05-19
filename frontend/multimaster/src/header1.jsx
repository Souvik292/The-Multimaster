
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
// import Dropdown from 'react-bootstrap/Dropdown';
function Header1(){
    return(
    
          <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/" className='text-6xl italic font-bold font-serif'>The Multi Master</Navbar.Brand>
            
            <Nav>
         <Navbar.Brand href="/signin" className='text-xl font-bold'>Signin</Navbar.Brand>
         <Navbar.Brand href="/signup" className='text-xl font-bold'>Signup</Navbar.Brand>
            </Nav>
          </Container>
        </Navbar>

    );
};

export default Header1;





