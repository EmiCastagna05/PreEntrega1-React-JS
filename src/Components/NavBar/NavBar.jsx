import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';


function NavBar() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container className='container'>
                    <Navbar.Brand href="#home">MIDI Store</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#inicio">Inicio</Nav.Link>
                        <Nav.Link href="#controladores-MIDI">Controladores MIDI</Nav.Link>
                        <Nav.Link href="#placas-de-sonido">Placas de sonido</Nav.Link>
                        <Nav.Link href="#CartWidget"><CartWidget /></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;