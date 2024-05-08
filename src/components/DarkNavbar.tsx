import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const DarkNavbar = () =>  {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Portafolio</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#home">Proyectos</Nav.Link>
            <Nav.Link href="#features">Contacto</Nav.Link>
            <Nav.Link href="#pricing">Perfil</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default DarkNavbar;