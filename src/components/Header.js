import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Header = () => (
    <Navbar bg="primary" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Revisão Textual</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
);
export default Header;