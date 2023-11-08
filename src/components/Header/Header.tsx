import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate  } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    return(
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand onClick={ () => navigate('/') }> App </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={ () => navigate('/') }>Home</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={ () => navigate('/Componentes') }>Componentes</NavDropdown.Item>
                            <NavDropdown.Item onClick={ () => navigate('/Administracion') }>Administracion</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={ () => navigate('/Help') }>Help</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
    
}
export default Header;